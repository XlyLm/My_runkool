// pages/find/Blogs/Blogs.js
const httpUrl = 'http://121.41.109.167/runkool';

Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:'',
      navTitle:'',
      array:[],
      user:'',
      bottom:false
  },
   //删除我的部落<----------------------
   clear1:function(e){
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
              id:this_.data.array[index].id,
            },
            header: {
              "content-Type": "application/x-www-form-urlencoded"
            },
            success (res) {
              this_.setData({
                bottom:false,
                array:[]
              })
              this_.getData(0);
            }
          })
          wx.request({
            url: httpUrl+"/addblog/deleteById", //仅为示例，并非真实的接口地址
            method:"post",
            data: {
              userid:this_.data.user.id,
              id:this_.data.array[index].id,
            },
            header: {
              "content-Type": "application/x-www-form-urlencoded"
            },
          })
        } else if (res.cancel) {
        }
      }
    })
  },
  //删除加入的部落<----------------------
  clear2:function(e){
    const this_ = this;
    const index = e.currentTarget.dataset.index;
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
              id:this_.data.array[index].id,
            },
            header: {
              "content-Type": "application/x-www-form-urlencoded"
            },
            success (res) {
              this_.setData({
                bottom:false,
                array:[]
              })
              this_.getData2(0);
            }
          })
        } else if (res.cancel) {
        }
      }
    })
  },
  //加入部落<----------------------
  clear3:function(e){
    const this_ = this;
    wx.showModal({
      title: '是否加入该部落?',
      content: '',
      success (res) {
        if (res.confirm) {
          const index = e.currentTarget.dataset.index;
          const blog = this_.data.array[index];
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
                this_.setData({
                  bottom:false,
                  array:[]
                })
                this_.getData2(0);
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
            }
          })
        } else if (res.cancel) {
        }
      }
    })
  },
  //滑动底部触发
  lower(e) {
    const this_ = this;
    const index = this_.data.array.length;
    if(!this_.data.bottom){
      if(this_.data.id==1){
        this_.getData(index);
      }else if(this_.data.id==2){
        this_.getData2(index);
      }else{
        this_.getData3(index);
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //<-----------加载用户信息
    const this_ = this;
    this.setData({
      navTitle:options.title,
      id:options.id,
    });
    wx.getStorage({
      key: 'user',
      success (res) {
        this_.setData({user:res.data});
        if(options.id==1){
          this_.getData(0);
        }else if(options.id==2){
          this_.getData2(0);
        }else{
          this_.getData3(0);
        }
      },
      fail(res){
        console.log(res)
      }
    })
  },
  //加载数据
  getData:function(offset){
    const this_ = this;
    wx.request({
      url: httpUrl+"/surrblog/querySurrblogInfoByUId", //仅为示例，并非真实的接口地址
      method:"post",
      data: {
       id:this_.data.user.id,
       offset:offset,
       limit:10
      },
      header: {
        "content-Type": "application/x-www-form-urlencoded"
      },
      success (res) {
        if(res.data.length<10){
          this_.setData({bottom:true})
        }
        this_.setData({'array':[...this_.data.array,...res.data]});
      }
    })
  },
  getData3:function(offset){
    const this_ = this;
    wx.request({
      url: httpUrl+"/surrblog/queryProInfo", //仅为示例，并非真实的接口地址
      method:"post",
      data: {
       offset:offset,
       limit:10
      },
      header: {
        "content-Type": "application/x-www-form-urlencoded"
      },
      success (res) {
        if(res.data.length<10){
          this_.setData({bottom:true})
        }
        this_.setData({'array':[...this_.data.array,...res.data]});
      }
    })
  },
  getData2:function(offset){
    const this_ = this;
    wx.request({
      url: httpUrl+"/addblog/queryProInfo", //仅为示例，并非真实的接口地址
      method:"post",
      data: {
        id:this_.data.user.id,
        offset:offset,
        limit:10
      },
      header: {
        "content-Type": "application/x-www-form-urlencoded"
      },
      success (res) {
        if(res.data.length<10){
          this_.setData({bottom:true})
        }
        this_.setData({'array':[...this_.data.array,...res.data]});
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