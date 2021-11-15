// pages/my/setting/setting.js
var _app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    menuitems: [
      { text: '修改密码', url: '#', icon: '/images/user/user1.png', tips: '', arrows: '../../../images/my/arrows.png' },
      { text: '关于我们', url: '#', icon: '/images/user/user2.png', tips: '', arrows: '../../../images/my/arrows.png' },
      { text: '意见反馈', url: '#', icon: '/images/user/user3.png', tips: '', arrows: '../../../images/my/arrows.png' },
      { text: '服务协议', url: '#', icon: '/images/user/user4.png', tips: '', arrows: '../../../images/my/arrows.png' },
      { text: '加入名单', url: '#', icon: '/images/user/user4.png', tips: '', arrows: '../../../images/my/arrows.png' },
      { text: '版本信息', url: '#', icon: '/images/user/user4.png', tips: '', arrows: '../../../images/my/arrows.png' },
    ]
  },
  setBiaoTi1:function(){
    wx.setNavigationBarTitle({
      title: '正在退出登录...',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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