// pages/index/moreAct/moreAct.js
const httpUrl = 'http://121.41.109.167/runkool';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[],
    bottom:false,
    user:{}
  },
  //加入活动  <------修改用户参加活动的信息
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
    //滑动底部触发
  lower(e) {
   const this_ = this;
   const index = this.data.array.length;
    if(this_.data.bottom){
      this_.getAct(index);
    }
  },

  /**
   * 生命周期函数--监听页面加载 <--------加载数据
   */
  onLoad: function (options) {
    // <---------加载活动数据库
    const index = this.data.array.length;
    //<--------加载用户的展示部落
    const this_ = this;
    wx.getStorage({
      key: 'user',
      success (res) {
        this_.setData({user:res.data});
        this_.getAct(index);
      },
      fail(res){
        console.log(res)
      }
    })
  },

  //加载活动
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
        if(res.data.length<10){
          this_.setData({bottom:true});
        }
        this_.setData({array:[...this_.data.array,...res.data]});
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
   * 页面相关事件处理函数--监听用户下拉动作<--------重新加载页面
   */
  onPullDownRefresh: function () {
      // <---------加载活动数据库
      // const data = [
      //   {
      //     img:'../../../images/index/四喜.jpeg',
      //     name:'四喜酷跑部落',
      //     type:'团队',
      //     time:'2020',
      //     address:'体育场'
      //   },{
      //     img:'../../../images/index/二哈.jpeg',
      //     name:'二哈酷跑部落',
      //     type:'个人',
      //     time:'2020',
      //     address:'街道'
      //   },{
      //     img:'../../../images/index/二哈.jpeg',
      //     name:'二哈酷跑部落',
      //     type:'个人',
      //     time:'2020',
      //     address:'街道'
      //   },{
      //     img:'../../../images/index/二哈.jpeg',
      //     name:'二哈酷跑部落',
      //     type:'个人',
      //     time:'2020',
      //     address:'街道'
      //   },{
      //     img:'../../../images/index/二哈.jpeg',
      //     name:'二哈酷跑部落',
      //     type:'个人',
      //     time:'2020',
      //     address:'街道'
      //   },{
      //     img:'../../../images/index/二哈.jpeg',
      //     name:'二哈酷跑部落',
      //     type:'个人',
      //     time:'2020',
      //     address:'街道'
      //   },{
      //     img:'../../../images/index/二哈.jpeg',
      //     name:'二哈酷跑部落',
      //     type:'个人',
      //     time:'2020',
      //     address:'街道'
      //   }
      // ];
      // this.setData({array:data});
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