// pages/my/addAct/addAct.js
const httpUrl = 'http://121.41.109.167/runkool';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:'',
    show:true,
    imgurl:''
  },
  bindshow:function(e){
    const this_ = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFiles = res.tempFiles;
        const tempFilePaths = res.tempFilePaths[0];
        if(tempFiles.size>500){
          wx.showToast({
            title: '图片太大,无法上传',
            icon: 'none',
            duration: 1500
          })
        }else{
          this_.setData({
            show:false,
            'imgurl':tempFilePaths
          });
        }
      }
    })
  },
  bindhide:function(e){
    this.setData({
      show:true,
      imgurl:''
    });
  },
  //提交信息<---------将得到的信息上传到后端
  submit:function(e){
    const this_ = this;
    let act = e.detail.value;
    act.imgurl = this.data.imgurl;
    if(act.blog!=''&&act.address!=''&&act.time!=''){
      wx.getLocation({
      type: 'wgs84',
      success (res) {
        const latitude = parseInt(res.latitude);
        const longitude = parseInt(res.longitude);
        wx.request({
          url: httpUrl+"/addact/creAction", //仅为示例，并非真实的接口地址
          method:"post",
          data: {
            userid:this_.data.user.id,
            name:act.blog,
            time:act.time,
            address:act.address,
            img:act.imgurl,
            type:act.radio,
            isover:'false',
            isplay:'false',
            e:latitude,
            w:longitude
          },
          header: {
            "content-Type": "application/x-www-form-urlencoded"
          },
          success (res) {
            if(res.data==''){
              wx.request({
                url: httpUrl+"/actions/creAction", //仅为示例，并非真实的接口地址
                method:"post",
                data: {
                  userid:this_.data.user.id,
                  name:act.blog,
                  time:act.time,
                  address:act.address,
                  img:act.imgurl,
                  type:act.radio,
                  isover:'false',
                  e:latitude,
                  w:longitude
                },
                header: {
                  "content-Type": "application/x-www-form-urlencoded"
                },
                success (res) {
                  if(res.data==''){
                    wx.showToast({
                      title: '成功创建活动',
                      icon: 'success',
                      mask:true,
                      duration: 1500
                    })
                  }else{
                    wx.showToast({
                      title: res.data,
                      icon: 'success',
                      mask:true,
                      duration: 1500
                    })
                  }
                }
              })
            }else{
              wx.showToast({
                title: res.data,
                icon: 'success',
                mask:true,
                duration: 1500
              })
            }
          }
        })
      },
      fail(res){
        wx.showToast({
          title: '获取地址失败',
          icon: 'error',
          mask:true,
          duration: 1500
        })
      }
     })
    }else{
      wx.showToast({
        title: '不能为空',
        icon: 'error',
        mask:true,
        duration: 1500
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //<-----------加载用户信息
    const this_ = this;
    wx.getStorage({
      key: 'user',
      success (res) {
        this_.setData({user:res.data});
      },
      fail(res){
        console.log(res)
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