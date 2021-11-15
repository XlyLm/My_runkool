// pages/my/my.js
const httpUrl = 'http://121.41.109.167/runkool';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    code:false,
    user:{},
    array:[
      {
        icon:'add2',
        title:'创建活动',
        color:'#9f5252',
        name:'AddAct'
      },{
        icon:'sticker',
        title:'我的秀记',
        color:'#7e2984',
        name:'MyShow'
      },{
        icon:'star',
        title:'收藏',
        color:'#cc6108',
        name:'Collect'
      }
    ],
    array2:[
      {
        icon:'setting',
        title:'设置',
        color:'blue',
        name:'Setting'
      },{
        icon:'comment',
        title:'在线客服',
        color:'#ff8c00',
        name:'OnlineService',
        rang:'工作日：10:30-19-30'
      },{
        icon:'mobile-contacts',
        title:'客服电话',
        color:'#04c918',
        name:'Phone',
        rang:'4000 222 工作日：10:30-19-30'
      }
    ]
  },
  //查看二维码
  showUserCode:function(e){
    this.setData({code:true});
  },
  //退出二维码
  clearCode:function(e){
    this.setData({code:false});
  },
  //去用户的信息界面
  toUserInfor:function(e){
    wx.navigateTo({
      url: './userInfor/userInfor'
    })
  },
  //去创建活动界面
  toAddAct:function(e){
    wx.navigateTo({
      url: './addAct/addAct'
    })
  },
   //去我的秀记界面
   toMyShow:function(e){
    wx.navigateTo({
      url: './myShow/myShow'
    })
  },
   //去收藏界面
   toCollect:function(e){
    wx.navigateTo({
      url: './collect/collect'
    })
  },
   //去设置界面
   toSetting:function(e){
    wx.navigateTo({
      url: './setting/setting'
    })
  },
   //去在线客户界面
   toOnlineService:function(e){
    wx.navigateTo({
      url: './onlineservice/onlineService'
    })
  },
   //拨打电话
   toPhone:function(e){
    wx.makePhoneCall({
      phoneNumber:4000222,
      success:function(res){
        console.log("已拨通");
      },
      fail:function(res){
        wx.showToast({
          title: '信号异常',
          icon: 'error',
          duration: 1500
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载<------加载用户数据
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        indexColor:"white",
        findColor:"white",
        myColor:"#ffb300"
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({code:false});
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