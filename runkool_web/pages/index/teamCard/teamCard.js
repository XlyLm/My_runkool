// pages/index/teamCard/teamCard.js
const httpUrl = 'http://121.41.109.167/runkool';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[],
    array2:[],
    actArr:true,
    inputVal:'',
    inputFoc:false,
    labelClass:true,
    bottom:false,
    user:{}
  },
  // 显示搜索框
  showInput:function(e){
   this.setData({
     labelClass:false,
     inputFoc:true
    });
  },
  // 取消按钮
  clearInput:function(e){
   this.setData({
     labelClass:true,
     actArr:true,
     inputVal:'',
     inputFoc:false,
     bottom:false,
     array:[],
     array2:[]
    });
    this.getData(this.data.array.length);
  },
  // 搜索内容
  inputChange:function(e){
    const this_ = this;
    const value = e.detail.value;
    this_.setData({
      bottom:false,
      actArr:false,
      inputVal:value,
      array2:[]
    });
    const index = this_.data.array2.length;
    // 发送请求获取数据
   this_.getData2(index,value);
    if(value === ''){
      this.setData({
        actArr:true,
        array:[]
      });
      this.getData(this.data.array.length);
    }
  },
  // 点击签到  <-------------修改后端数据库中isPlay的值>
  play:function(e){
    const this_ = this;
    const index = e.currentTarget.dataset.list;
    if(this_.data.actArr){
      if(this_.data.array[index].isover=='false'){
        if(this_.data.array[index].isplay=='true'){
          wx.showToast({
            title: '已打卡成功',
            icon: 'success',
            duration: 2000,//持续的时间
            mask:true
          })
        }else{
          wx.showToast({
            title: '获取地址中...',
            icon: 'loading',
            duration: 500,//持续的时间
            mask:true
          })
          const latitudes = this_.data.array[index].e;
          const longitudes = this_.data.array[index].w;
          wx.getLocation({
            type: 'wgs84',
            success (res) {
              const latitude = parseInt(res.latitude);
              const longitude = parseInt(res.longitude);
              if(((latitude+1)>=latitudes||(latitude-1)<=latitudes)&&((longitude+1)>=longitudes||(longitude-1)<=longitudes)){
                wx.showModal({
                  title: '成功获得地址',
                  content: '是否打卡?',
                  mask:true,
                  success: function (res) {
                    if (res.confirm) {//这里是点击了确定以后
                      // 修改后端数据库打卡状况
                      const array = this_.data.array;
                      array[index].isplay = 'true';
                      //<---------------修改打卡状态
                      wx.request({
                        url: httpUrl+'/addact/switchDisplay', //仅为示例，并非真实的接口地址
                        method:"post",
                        data: {
                          id: array[index].id,
                          userid:this_.data.user.id
                        },
                        header: {
                          'content-type': 'application/x-www-form-urlencoded' // 默认值
                        },
                        success (res) {
                          this_.setData({array:array});
                          wx.showToast({
                            title: '打卡成功',
                            icon: 'success',
                            duration: 2000,//持续的时间
                            mask:true
                          })
                        }
                      })
                    } else {//这里是点击了取消以后
                      return;
                    }
                  }
                })
              }else{
                wx.showToast({
                  title: '地址错误，请到达正确地址!',
                  icon: 'none',
                  mask:true,
                  duration: 2000//持续的时间
                })
              }
            },
            fail(){
              wx.showToast({
                title: '获取地址失败，请稍后打卡',
                icon: 'none',
                mask:true,
                duration: 2000//持续的时间
              })
            }
          })
        }
      }else{
        const isplay = this_.data.array[index].isplay
        const cont = isplay=='true'?'已完成活动':'未完成活动';
        wx.showToast({
          title: '活动时间已过，'+cont,
          icon: 'none',
          mask:true,
          duration: 1000//持续的时间
        })
      }
    }else{
      if(this_.data.array2[index].isover=='false'){
        if(this_.data.array2[index].isplay=='true'){
          wx.showToast({
            title: '已打卡成功',
            icon: 'success',
            duration: 2000,//持续的时间
            mask:true
          })
        }else{
          wx.showToast({
            title: '获取地址中...',
            icon: 'loading',
            duration: 500,//持续的时间
            mask:true
          })
          const latitudes = this_.data.array2[index].e;
          const longitudes = this_.data.array2[index].w;
          wx.getLocation({
            type: 'wgs84',
            success (res) {
              const latitude = parseInt(res.latitude);
              const longitude = parseInt(res.longitude);
              if(((latitude+1)>=latitudes||(latitude-1)<=latitudes)&&((longitude+1)>=longitudes||(longitude-1)<=longitudes)){
                wx.showModal({
                  title: '成功获得地址',
                  content: '是否打卡?',
                  mask:true,
                  success: function (res) {
                    if (res.confirm) {//这里是点击了确定以后
                      // 修改后端数据库打卡状况
                      const array2 = this_.data.array2;
                      array2[index].isplay = "true";
                      //发送请求修改数据<----------
                      wx.request({
                        url: httpUrl+'/addact/switchDisplay', //仅为示例，并非真实的接口地址
                        method:"post",
                        data: {
                          id: array2[index].id,
                          userid:this_.data.user.id
                        },
                        header: {
                          'content-type': 'application/x-www-form-urlencoded' // 默认值
                        },
                        success (res) {
                          this_.setData({array2:array2});
                          wx.showToast({
                            title: '打卡成功',
                            icon: 'success',
                            duration: 2000,//持续的时间
                            mask:true
                          })
                        }
                      })
                    } else {//这里是点击了取消以后
                      return;
                    }
                  }
                })
              }else{
                wx.showToast({
                  title: '地址错误，请到达正确地址!',
                  icon: 'none',
                  mask:true,
                  duration: 2000//持续的时间
                })
              }
            },
            fail(){
              wx.showToast({
                title: '获取地址失败，请稍后打卡',
                icon: 'none',
                mask:true,
                duration: 2000//持续的时间
              })
            }
          })
        }
      }else{
        const isplay = this_.data.array2[index].isplay
        const cont = isplay=='true'?'已完成活动':'未完成活动';
        wx.showToast({
          title: '活动时间已过，'+cont,
          icon: 'none',
          mask:true,
          duration: 1000//持续的时间
        })
      }
    }
  },
  
  //滑动底部触发
  lower(e) {
    const this_ = this;
    const value = this.data.inputVal;
    if(!this_.data.bottom){
      let index = 0;
      if(this_.data.actArr){
        index = this_.data.array.length;
        this_.getData(index);
      }else{
        index = this_.data.array2.length;
        this_.getData2(index,value);
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const this_ = this;
    const index = this_.data.array.length;
    wx.getStorage({
      key: 'user',
      success (res) {
        this_.setData({user:res.data});
        this_.getData(index);
      },
      fail(res){
        console.log(res)
      }
    })
  },
  //发送请求获取数据<--------------
  getData:function(offset){
    const this_ = this;
    wx.request({
      url:httpUrl + '/addact/queryAddactByLimitId', //仅为示例，并非真实的接口地址
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
        this_.setData({array:[...this_.data.array,...res.data]});
      },
      fail(res){
          console.log(res)
      }
    })
  },
  getData2:function(offset,value){
    const this_ = this;
    wx.request({
      url:httpUrl+'/addact/searchActions', //仅为示例，并非真实的接口地址
      method:"post",
      data: {
        value:value,
        userid:this_.data.user.id,
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
        this_.setData({array2:[...this_.data.array2,...res.data]})
      
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
   
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
   * 页面相关事件处理函数--监听用户下拉动作<-------重新加载页面
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