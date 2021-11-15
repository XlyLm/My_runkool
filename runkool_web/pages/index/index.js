// pages/my/my.js
const httpUrl = 'http://121.41.109.167/runkool';
Page({
  util:require('../../utils/util.js'),
  /**
   * 页面的初始数据
   */
  data: {
    user:'',
    imgsurl:[],
    blogurl:'',
    blogname:'',
    array:[]
  },
  // 跳转到打卡页面
  toTeamCard:function(e){
    wx.navigateTo({
      url: './teamCard/teamCard'
    })
  },
  toPraviteCard:function(e){
    wx.navigateTo({
      url: './praviteCard/praviteCard'
    })
  },
  // 跳转到酷跑星榜
  toRunStar:function(e){
    wx.navigateTo({
      url: './runStar/runStar'
    })
  },
  // 跳转到部落群聊
  toBlogChat:function(e){
    wx.navigateTo({
      url: './blogChat/blogChat'
    })
  },
  // 开启扫码功能
  toScan:function(e){
    wx.scanCode({
    onlyFromCamera: true,
      success (res) {
        wx.navigateTo({
          url: './scan/scan'
        })
      },
      fail(){
        wx.navigateTo({
          url: './scan/fail/fail'
        })
      }
    })
  },
  // 跳转到更多功能
  toMoreFun:function(e){
    wx.navigateTo({
      url: './moreFun/moreFun'
    })
  },
  // 开始跑步
  toRunStart:function(e){
    wx.navigateTo({
      url: './runStart/runStart'
    })
  },
  // 跳转到更多活动
  toMoreAct:function(e){
    wx.navigateTo({
      url: './moreAct/moreAct'
    })
  },
  //加入活动  <---------修改用户参加活动的信息
  addAct:function(e){
    const this_ = this;
    wx.showModal({
      title: '是否加入该活动?',
      content: '',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          const index = e.currentTarget.dataset.index;
          let addact = this_.data.array[index];
          addact.userid = this_.data.user.id;
          addact.isplay = "false";
          //<---------将当前活动加入到用户的活动打卡中
          wx.request({
            url: httpUrl+"/addact/addAction", //仅为示例，并非真实的接口地址
            method:"post",
            data: {
              userid:addact.userid,
              name:addact.name,
              time:addact.time,
              address:addact.address,
              img:addact.img,
              type:addact.type,
              isover:addact.isover,
              isplay:addact.isplay,
              e:addact.e,
              w:addact.w
            },
            header: {
              "content-Type": "application/x-www-form-urlencoded"
            },
            success (res) {
              if(res.data==''){
                wx.showToast({
                  title: '已有该活动',
                  icon: 'success',
                  duration: 1500
                })
              }else{
                 wx.showToast({
                  title: '成功加入活动',
                  icon: 'success',
                  duration: 1500
                })
              }
            }
          })
        } else {//这里是点击了取消以后
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载  <-------加载后端数据
   */
  onLoad: function (options) {
    const this_ = this;
    const index = this_.data.array.length;
    //<--------加载轮播图
    wx.request({
      url: httpUrl+"/userimgs/queryImageByImagetype", //仅为示例，并非真实的接口地址
      method:"post",
      data: {
       type:'nav'
      },
      header: {
        "content-Type": "application/x-www-form-urlencoded"
      },
      success (res) {
        this_.setData({
          imgsurl:res.data,
        });
      }
    })
    //<--------加载用户的展示部落
    wx.getStorage({
      key: 'user',
      success (res) {
        this_.setData({user:res.data});
        this_.getAct(index);
        wx.request({
          url: httpUrl+"/surrblog/queryBlogByUserId", //仅为示例，并非真实的接口地址
          method:"post",
          data: {
           userid:this_.data.user.id
          },
          header: {
            "content-Type": "application/x-www-form-urlencoded"
          },
          success (res) {
            this_.setData({
              blogname:res.data[0].name
            });
          }
        })
      },
      fail(res){
        console.log(res)
      }
    })
  },
  //获取活动
  getAct:function(offset){
    const this_ = this;
    wx.request({
      url: httpUrl + "/actions/queryActionsByLimit", //仅为示例，并非真实的接口地址
      method:"post",
      data: {
        offset:offset,
        limit:10
      },
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        indexColor:"#ffb300",
        findColor:"white",
        myColor:"white"
      })
    }
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
   * 页面相关事件处理函数--监听用户下拉动作<----重新加载页面
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