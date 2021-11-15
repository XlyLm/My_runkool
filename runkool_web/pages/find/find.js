// pages/find/find.js
const httpUrl = 'http://121.41.109.167/runkool';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    suer:'',
    creBlog:{
      Is:false,
      open:false,
      name:'',
      maxNum:''
    },
    tapBlog1:false,
    tapBlog2:false,
    tapBlog3:false,
    array:[
      {
        title:"我的部落",
        infor:[],
        tab:'MyBlog'
      },{
        title:"加入的部落",
        infor:[],
        tab:'AddBlog'
      },{
        title:"周围部落",
        infor:[],
        tab:'SurrBlog'
      }
    ]
  },
  // 创建部落弹框
  createBlog:function(e){
    const this_ = this;
    wx.showModal({
      title: '是否创建部落',
      content: '',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          this_.setData({"creBlog.Is":true});
        } else {}//这里是点击了取消以后
      }
    })
  },
  //单选按钮
  choose1:function(e){
    this.setData({"creBlog.open":false});
  },
  choose2:function(e){
    this.setData({"creBlog.open":true});
  },
  // 获取输入信息
  intBlogName:function(e){
    this.setData({"creBlog.name":e.detail.value});
  },
  intBlogNum:function(e){
    const maxNum = e.detail.value;
    if(parseInt(maxNum)>=500||parseInt('1'+maxNum).toString() !==('1'+maxNum)){
      wx.showToast({
        title: '请输入正确信息!',
        icon: 'none',
        duration: 1000//持续的时间
      })
    }
    this.setData({"creBlog.maxNum":maxNum});
  },
  //  <--------------提交信息给后台，加入部落
  submitBlog:function(e){
    const open = this.data.creBlog.open;
    const name = this.data.creBlog.name;
    let maxNum = this.data.creBlog.maxNum;
    const this_ = this;
    if(name === ''||maxNum === ''){
      wx.showToast({
        title: '请输入信息!',
        icon: 'none',
        duration: 1000//持续的时间
      })
    }else if(parseInt(maxNum)>=500||parseInt('1'+maxNum).toString() !==('1'+maxNum)){
      wx.showToast({
        title: '请输入正确信息!',
        icon: 'none',
        duration: 1000//持续的时间
      })
    }else{
      if(parseInt(maxNum) === 0){
        maxNum = 1;
      }
      const it = {
        isopen:open?'开放':'私有',
        name:name,
        personnum:1,
        grade:1,
        maxnum:parseInt(maxNum),
        userid:this_.data.user.id
      };
      wx.request({
        url: httpUrl+"/addblog/insert", //仅为示例，并非真实的接口地址
        method:"post",
        data: it,
        header: {
          "content-Type": "application/x-www-form-urlencoded"
        },
        success (res) {
          if(res.data==''){
            wx.showToast({
              title: '已创建该部落',
              icon: 'success',
              duration: 2000
            })
          }else{
            this_.getData();
            this_.getData2();
            this_.getData3();
          }
        }
      })
      wx.request({
        url: httpUrl+"/surrblog/insert", //仅为示例，并非真实的接口地址
        method:"post",
        data: it,
        header: {
          "content-Type": "application/x-www-form-urlencoded"
        },
        success (res) {
          if(res.data==''){
            wx.showToast({
              title: '已创建该部落',
              icon: 'success',
              duration: 2000
            })
          }else{
            this_.getData();
            this_.getData2();
            this_.getData3();
          }
        }
      })
      setTimeout(function(){
        this_.setData({
          "creBlog.Is":false,
          "creBlog.name":'',
          "creBlog.maxNum":''
        });
      },100)
    }
  },
  // 跳转到我的部落
  toMyBlog:function(e){
    wx.navigateTo({
      url: './Blogs/Blogs?id=1&title=我的部落'
    })
  },
  // 跳转到加入部落
  toAddBlog:function(e){
    wx.navigateTo({
      url: './Blogs/Blogs?id=2&title=加入的的部落'
    })
  },
  // 跳转到周围部落
  toSurrBlog:function(e){
    wx.navigateTo({
      url: './Blogs/Blogs?id=3&title=周围部落'
    })
  },
  //删除我的部落<----------------------
  clearMyBlog:function(e){
    const this_ = this;
    const index = e.currentTarget.dataset.index;
    wx.showModal({
      title: '确认删除部落?',
      content: '',
      success (res) {
        if (res.confirm) {
          wx.request({
            url: httpUrl+"/surrblog/deleteById", //仅为示例，并非真实的接口地址
            method:"post",
            data: {
              userid:this_.data.user.id,
              id:this_.data.array[0].infor[index].id,
            },
            header: {
              "content-Type": "application/x-www-form-urlencoded"
            },
            success (res) {
              this_.getData();
              this_.getData3();
            }
          })
          wx.request({
            url: httpUrl+"/addblog/deleteById", //仅为示例，并非真实的接口地址
            method:"post",
            data: {
              userid:this_.data.user.id,
              id:this_.data.array[1].infor[index].id,
            },
            header: {
              "content-Type": "application/x-www-form-urlencoded"
            },
            success (res) {
              this_.getData2();
            }
          })
        } else if (res.cancel) {
        }
      }
    })
  },
  //删除加入的部落<----------------------
  clearAddBlog:function(e){
    const this_ = this;
    const index = e.currentTarget.dataset.index;
    const blog = this_.data.array[2].infor[index];
    blog.userid = this_.data.user.id;
    blog.personnum = this_.data.user.personnum - 1;
    wx.showModal({
      title: '确认删除部落?',
      content: '',
      success (res) {
        if (res.confirm) {
          wx.request({
            url: httpUrl+"/addblog/deleteById", //仅为示例，并非真实的接口地址
            method:"post",
            data: {
              userid:this_.data.user.id,
              id:this_.data.array[1].infor[index].id,
            },
            header: {
              "content-Type": "application/x-www-form-urlencoded"
            },
            success (res) {
              this_.getData2();
            }
          })
        } else if (res.cancel) {
        }
      }
    })
  },
  //加入部落<----------------------
  clearSurrBlog:function(e){
    const this_ = this;
    wx.showModal({
      title: '是否加入该部落?',
      content: '',
      success (res) {
        if (res.confirm) {
          const index = e.currentTarget.dataset.index;
          const blog = this_.data.array[2].infor[index];
          const blog2 = blog;
          blog.userid = this_.data.user.id;
          blog2.personnum = parseInt(blog2.personnum) + 1;
          // 将数据传给后台，查询书否有该活动，无责加入数据库并返回true，有责返回false
          wx.request({
            url: httpUrl+"/addblog/insert", //仅为示例，并非真实的接口地址
            method:"post",
            data: blog,
            header: {
              "content-Type": "application/x-www-form-urlencoded"
            },
            success (res) {
              if(res.data==''){
                wx.showToast({
                  title: '已加入该部落',
                  icon: 'success',
                  duration: 2000
                })
              }else{
                this_.getData2();
              }
            }
          })
          wx.request({
            url: httpUrl+"/surrblog/update", //仅为示例，并非真实的接口地址
            method:"post",
            data: blog2,
            header: {
              "content-Type": "application/x-www-form-urlencoded"
            },
            success (res) {
                this_.getData3();
            }
          })
        } else if (res.cancel) {
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载<----------加载后端数据>
   */
  onLoad: function (options) {
    //<-----------加载用户信息
    const this_ = this;
    wx.getStorage({
      key: 'user',
      success (res) {
        this_.setData({user:res.data});
        this_.getData();
        this_.getData2();
        this_.getData3();
      },
      fail(res){
        console.log(res)
      }
    })
  },

  //加载数据
  getData:function(){
    const this_ = this;
    wx.request({
      url: httpUrl+"/surrblog/querySurrblogInfoByUId", //仅为示例，并非真实的接口地址
      method:"post",
      data: {
       id:this_.data.user.id,
       offset:0,
       limit:10
      },
      header: {
        "content-Type": "application/x-www-form-urlencoded"
      },
      success (res) {
        this_.setData({'array[0].infor':res.data});
      }
    })
  },
  getData3:function(){
    const this_ = this;
    wx.request({
      url: httpUrl+"/surrblog/queryProInfo", //仅为示例，并非真实的接口地址
      method:"post",
      data: {
       offset:0,
       limit:10
      },
      header: {
        "content-Type": "application/x-www-form-urlencoded"
      },
      success (res) {
        this_.setData({'array[2].infor':res.data});
      }
    })
  },
  getData2:function(){
    const this_ = this;
    wx.request({
      url: httpUrl+"/addblog/queryProInfo", //仅为示例，并非真实的接口地址
      method:"post",
      data: {
        id:this_.data.user.id,
        offset:0,
        limit:10
      },
      header: {
        "content-Type": "application/x-www-form-urlencoded"
      },
      success (res) {
        this_.setData({'array[1].infor':res.data});
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        indexColor:"white",
        findColor:"#ffb300",
        myColor:"white"
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //清除弹框
    this.setData({
      "creBlog.Is":false,
      "creBlogopen":false,
      "creBlogname":'',
      "creBlogmaxNum":'',
      tapBlog1:false,
      tapBlog2:false,
      tapBlog3:false,
    });
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作<--------重新加载页面
   */
  onPullDownRefresh: function () {
  //<-----------加载用户信息
  const this_ = this;
  wx.getStorage({
    key: 'user',
    success (res) {
      this_.setData({user:res.data});
      this_.getData();
      this_.getData2();
      this_.getData3();
    },
    fail(res){
      console.log(res)
    }
  })
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