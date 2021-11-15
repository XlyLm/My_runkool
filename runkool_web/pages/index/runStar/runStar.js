// pages/index/runStar/runStar.js
const httpUrl = 'http://121.41.109.167/runkool';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:false,
    imgSrc:'',
    index:0,
    array:[]
  },

  //展示头像
  appearImg:function(e){
    const index = e.currentTarget.dataset.index;
    this.setData({
      imgSrc:this.data.array[index].img,
      img:true
    });
  },
 
  //隐藏头像
  clearImg:function(e){
    this.setData({
      imgSrc:'',
      img:false
    });
  },
  /**
   * 生命周期函数--监听页面加载 <--------加载数据
   */
  onLoad: function (options) {
    //<--------------加载所有用户信息
    const this_ = this;
    wx.request({
      url: httpUrl+"/user/getLis", //仅为示例，并非真实的接口地址
      method:"post",
      data: {},
      header: {
        "content-Type": "application/x-www-form-urlencoded"
      },
      success (res) {
        this_.setData({array:res.data});
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
   * 页面相关事件处理函数--监听用户下拉动作<------重新加载数据
   */
  onPullDownRefresh: function () {
    //<--------------加载所有用户信息
    let data = [
      {
        name:'张三',
        grade:99,
        img:'../../../images/index/run1.jpeg'
      },{
        name:'李四',
        grade:25,
        img:''
      },{
        name:'李四',
        grade:25,
        img:''
      },{
        name:'李四',
        grade:25,
        img:''
      },{
        name:'李四',
        grade:25,
        img:''
      },{
        name:'李四',
        grade:25,
        img:''
      }
    ];
    this.setData({array:data});
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