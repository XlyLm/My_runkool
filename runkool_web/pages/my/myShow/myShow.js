// pages/my/myShow/myShow.js
const httpUrl = 'http://121.41.109.167/runkool';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:'',
    imgs:[,],
    bottom:false
  },
  //加入图片   <-------------向后端加入图片
  addImg:function(e){
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
          wx.request({
            url:httpUrl + '/userimgs/insert', //仅为示例，并非真实的接口地址
            method:"post",
            data: {
              userid:this_.data.user.id,
              img:tempFilePaths,
              type:'show'
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            success (res) {
              this_.setData({
                imgs:[,],
                bottom:false
              })
              this_.getData(0);
            },
          })
        }
      }
    })
  },
  //删除图片    <------------删除数据库的数据
  clearImg:function(e){
    const this_ = this;
    wx.showModal({
      title: '确认删除此图片?',
      content: '',
      success (res) {
        if (res.confirm) {
          const index = e.currentTarget.dataset.index;
          let data = this_.data.imgs;
          wx.request({
            url:httpUrl + '/userimgs/delet', //仅为示例，并非真实的接口地址
            method:"post",
            data: {
             id:data[index].id
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            success (res) {
              this_.setData({
                imgs:[,],
                bottom:false
              })
              this_.getData(0);
              wx.showToast({
                title: '删除成功',
                icon: 'success',
                duration: 1500
              })
            },
          })
        } else if (res.cancel) {}
      }
    })
  },
  //滑动底部触发
  lower(e) {
    const this_ = this;
    const index = this_.data.imgs.length;
    if(!this_.data.bottom){
      this_.getData(index);
    }
  },
  /**
   * 生命周期函数--监听页面加载<----------加载图片数据
   */
  onLoad: function (options) {
    //<-----------加载用户信息
    const this_ = this;
    wx.getStorage({
      key: 'user',
      success (res) {
        this_.setData({user:res.data});
        this_.getData(0);
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
      url:httpUrl + '/userimgs/queryImgByLimitId', //仅为示例，并非真实的接口地址
      method:"post",
      data: {
        id:this_.data.user.id,
        offset:offset,
        limit:10
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success (res) {
        if(res.data.length<10){
        this_.setData({bottom:true})
        }
        this_.setData({imgs:[...this_.data.imgs,...res.data]});
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