// pages/entery/entery.js
const httpUrl = 'http://121.41.109.167/runkool';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    log:true,
    phone:'',
    password:'',
    user:{
      img:'../../images/my/head.jpeg',
      phone:'',
      password:''
    }
  },
  //输入用户手机号，<-------向后端拉去用户数据
  bindinput1:function(e){
    const value = this.phoneT(e.detail.value);
    const this_ = this;
    this.setData({phone:e.detail.value});
    if(value){
      const phone = this_.data.phone;
      //<---------拉取用户信息
      wx.request({
        url: httpUrl+"/user/queryUserByPhone",
        method:"POST",
        header: {
          "content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          phone: phone
        },
        success:function(result){
            if(result.data.code=="0"){  //说明成功  保存token
              this_.setData({'user.img':result.data.data.img})
              if(this_.data.log){
              }else{
                wx.showToast({
                  title: "用户已存在",
                  icon: 'error',
                  duration: 1500
                })
              }
            }else{
              if(this_.data.log){
                wx.showToast({
                  title: result.data.msg,
                  icon: 'error',
                  duration: 1500
                })
              }
            }
        }
      })
    }else{
      this.setData({
        user:{
          img:'../../images/my/head.jpeg',
          phone:'',
          password:''
        }
      })
    }
  },
  bindinput2:function(e){
    const value = e.detail.value;
    this.setData({password:value});
  },
  // 验证用户信息登录
  submit:function(e){
    const phone = this.data.phone;
    const password = this.data.password;
    if(password.length>=6){
      if(this.phoneT(phone)){
        //发起请求
        wx.login({
          success (res) {
            if (res.code) {
              //发起网络请求
              wx.request({
                url: httpUrl+"/user/userLogin",
                method:"POST",
                header: {
                  "content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                  code: res.code,
                  password: password,
                  phone: phone
                },
                success:function(result){
                    if(result.data.code=="0"){  //说明成功  保存token
                        //1.获取到user，放入本地缓存
                        wx.setStorage({
                          key:"user",
                          data:result.data.data
                        });
                        //2.到首页
                        wx.switchTab({
                          url: "/pages/index/index"
                        })
                    }else{
                      wx.showToast({
                        title: result.data.msg,
                        icon: 'error',
                        duration: 2000
                      })
                    }
                }
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      }else{
        wx.showToast({
          title: '手机号错误',
          icon: 'error',
          mask: true,
          duration: 1500
        })
      }
    }else{
      wx.showToast({
        title: '密码错误',
        icon: 'error',
        mask: true,
        duration: 1500
      })
    }
  },
  //注册新用户<--------------
  creUser:function(e){
    const phone = this.data.phone;
    const password = this.data.password;
    const this_ =this;
    if(password.length>=6){
      if(this.phoneT(phone)){
        wx.getStorage({
          key: 'userInfo',
          success (res) {
            //2.发起请求   注册功能   POST请求安全
            wx.request({
              url: httpUrl+"/user/regUser", //仅为示例，并非真实的接口地址
              method:"post",
              data: {
                name:res.data.nickName,
                img:res.data.avatarUrl,
                phone:phone,
                password:password,
                sex:res.data.gender==1?'男':'女',
                address:res.data.province,
                grade:1,
                const:'',
                work:''
              },
              header: {
                "content-Type": "application/x-www-form-urlencoded"
              },
              success (res2) {
                if(res2.data.code=="0"){ //成功
                  //跳转到登录页面
                  this_.setData({
                    log:true,
                    password:'',
                    'user.img':res.data.avatarUrl
                  });
                }else{  //提示用户
                  wx.showToast({
                    title: res2.data.msg,
                    icon: 'error',
                    duration: 1500
                  })
                }
              }
            })
          }
        })
      }else{
        wx.showToast({
          title: '手机号错误',
          icon: 'none',
          duration: 1500
        })
      }
    }else{
      wx.showToast({
        title: '密码错误',
        icon: 'none',
        duration: 1500
      })
    }
  },
  //去注册用户
  addUser:function(e){
    this.setData({
      log:false,
      password:''
    });
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        //把数据放入本地缓存
        wx.setStorage({
          key:"userInfo",
          data:res.userInfo
        })
        //跳转页面---首页   tabbar的页面
      }
    })
  },
  //去登录用户
  loging:function(e){
    this.setData({
      log:true,
      password:'',
    });
  },
  //检验手机号正确
  phoneT:function phone(TEL) {
    //定义判断电话号码的正则表达式
    var strTemp = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
    if (strTemp.test(TEL)) {
      return true;
    }
    return false;
},
  /**
   * 生命周期函数--监听页面加载<-----判断用户是否过期
   */
  onLoad: function (options) {
    //2.发起请求更新活动   POST请求安全
    wx.request({
      url: httpUrl+"/actions/queryAllActions", //仅为示例，并非真实的接口地址
      method:"post",
      data: {},
      header: {
        "content-Type": "application/x-www-form-urlencoded"
      },
      fail(res){
        wx.showToast({
          title: '更新数据失败，请重新进入',
          icon: 'none',
          duration: 1500
        })
      }
    })
    wx.request({
      url: httpUrl+"/addact/queryAllActions", //仅为示例，并非真实的接口地址
      method:"post",
      data: {},
      header: {
        "content-Type": "application/x-www-form-urlencoded"
      },
      fail(res){
        wx.showToast({
          title: '更新数据失败，请重新进入',
          icon: 'none',
          duration: 1500
        })
      }
    })
    wx.getStorage({
      key: 'user',
      success (res) {
        wx.checkSession({
          success () {
            //session_key 未过期，并且在本生命周期一直有效
            //2.到首页
            wx.switchTab({
              url: "/pages/index/index"
            })
          },
          fail () {
            // session_key 已经失效，需要重新执行登录流程
            // wx.login() //重新登录
          }
        })
      },
      fail(res){
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})