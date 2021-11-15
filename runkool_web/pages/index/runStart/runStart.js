// pages/index/runStart/runStart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    timeCont:0,
    getLatitude:'',
    getLongitude:'',
    getScale:16,
    getCircles:'',
    userSpeed:0,
    userTime:0,
    start:true,
    mask:false,
    getMarkers:[],
    getPolyline:[{
      points:[],
      color:'#ff4bf9',
      arrowLine:true,
    }],
  },
  //地图渲染成功
  bindupdated:function(e){
    setTimeout(()=>{
      this.setData({show:true});
    },1000)
  },
  //点击控件回到当前位置
  backLocation:function(e){
    this.setData({
      getLatitude: this.data.getLatitude,
      getLongitude: this.data.getLongitude,
      getScale:16
    })
  },
  //开始跑步
  runStart:function(e){
    const this_ = this;
    const sTime = setInterval(() => {
      wx.getLocation({
        type:'wgs84',
        success:function(res){
          this_.setData({getLongitude:res.longitude});
          this_.setData({getLatitude:res.latitude});
          this_.setData({userSpeed:res.speed});
        }
      })
      this_.setData({
        'getPolyline.points[0].latitude':this_.data.getLatitude,
        'getPolyline.points[0].longitude':this_.data.getLongitude,
        userTime:this_.data.userTime+1
      });
    }, 1000);
    this_.setData({
      timeCont:sTime,
      start:false
    });
  },
  //取消跑步
  runClear:function(e){
    clearInterval(this.data.timeCont);
    this.setData({
      timeCont:0,
      userSpeed:0,
      userTime:0,
      'getPolyline[0].points':[],
      getLongitude:'',
      getLatitude:'',
      getScale:16
    });
  },
  //暂停跑步
  runDown:function(e){
    this.setData({start:true});
    clearInterval(this.data.timeCont);
  },
  //完成跑步
  runFinsh:function(e){
    clearInterval(this.data.timeCont);
    this.setData({mask:true});
    wx.showToast({
      title: '恭喜您完成跑步!',
      icon: 'none',
      duration: 2000//持续的时间
    })
    setTimeout(()=>{
      this.setData({
        timeCont:0,
        userSpeed:0,
        userTime:0,
        'getPolyline[0].points':[],
        getLongitude:'',
        getLatitude:'',
        getScale:16,
        start:true,
        mask:false
      });
    },2000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const this_ = this;
    wx.getLocation({
      type:'wgs84',
      success:function(res){
        this_.setData({
          getLatitude: res.latitude,
          getLongitude: res.longitude
        })
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