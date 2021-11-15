// pages/my/userInfor/userInfor.js
const httpUrl = 'http://121.41.109.167/runkool';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mask:false,
    changeTitle:'',
    changes:'',
    changeContent:'',
    user:''
  },
  //点击修改头像
  changeImg:function(e){
    const this_ = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFiles = res.tempFiles;
        const tempFilePaths = res.tempFilePaths;
        if(tempFiles.size>500){
          wx.showToast({
            title: '图片太大,无法上传',
            icon: 'none',
            duration: 1500
          })
        }else{
          this_.setData({'user.img':tempFilePaths});
        }
      }
    })
  },
  //点击修改信息
  changeInfor:function(e){
    const title = e.currentTarget.dataset.users;
    this.setData({
      mask:true,
      changeTitle:title
    });
  },
  //修改信息
  bindinput:function(e){
    const value = e.detail.value;
    this.setData({changes:value});
  },
  //取消修改
  clearChange:function(e){
    this.setData({
      mask:false,
      changes:''
    });
  },
  //确认修改
  keepChange:function(e){
    const value = this.data.changes;
    const title = this.data.changeTitle;
    wx.showToast({
      title: '修改成功',
      icon: 'success',
      duration: 1500//持续的时间
    })
    switch(title){
      case '昵称':
        this.setData({"user.name":value});
        break;
      case '性别':
        this.setData({"user.sex":value});
        break;
      case '星座':
        this.setData({"user.ct":value});
        break;
      case '公司or学校':
        this.setData({"user.work":value});
        break;
      case '地址':
        this.setData({"user.address":value});
        break;
      default:break;
    }
    this.setData({
      mask:false,
      changeContent:''
    })
  },
  //<----------将修改的信息传给后端保存
  keepInfor:function(e){
    const user = this.data.user;
    wx.request({
      url: httpUrl+"/user/UpdateUserByUser", //仅为示例，并非真实的接口地址
      method:"post",
      data:user,
      header: {
        "content-Type": "application/x-www-form-urlencoded"
      },
      success (res) {
        wx.setStorage({
          key:"user",
          data:res.data
        });
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 1500
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载<--------加载数据
   */
  onLoad: function (options) {
    //<------------加载用户数据
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