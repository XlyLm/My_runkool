// pages/index/praviteCard/praviteCard.js
const util = require('../../../utils/util.js');
const httpUrl = 'http://121.41.109.167/runkool';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:'',
    array:[],
    array2:[],
    actArr:true,
    inputVal:'',
    inputFoc:false,
    labelClass:true,
    inputTure:false,
    input_wvalue:'',
    bottom:false,
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
   // 搜索内容  <-----搜索个人打卡数据库
   inputChange:function(e){
    const this_ = this;
    const value = e.detail.value;
    this_.setData({
      bottom:false,
      actArr:false,
      inputVal:value,
      array2:[]
    });
    //发送请求获取数据
    const index = this_.data.array2.length;
     this_.getData2(index,value);
     if(value === ''){
        this.setData({
        actArr:true,
        array:[]
      });
      this.getData(this.data.array.length);
     }
   },
  //  添加活动
  addAct:function(e){
    this.setData({inputTure:true});
  },
  // 获取输入信息
  inputText:function(e){
    this.setData({input_wvalue:e.detail.value})
  },
  //  <-------向个人打卡数据库添加信息
  tureInt:function(e){
    const value = this.data.input_wvalue;
    const this_ = this;
    if(value !== ''){
      const time = util.formatTime(new Date());
      //  <-------向个人打卡数据库添加信息
      const list = {
        name:value,
        address:'',
        time:time
      };
      wx.getLocation({
        type: 'wgs84',
        success (res) {
          const w = parseInt(res.latitude);
          const e = parseInt(res.longitude);
          list.address = w + ':' + e;
          //<-----------向后端加入数据
          wx.request({
            url: httpUrl+'/pravitecars/insertPravitecars', //仅为示例，并非真实的接口地址
            method:'post',
            data: {
              userid:this_.data.user.id,
              name:list.name,
              time:list.time,
              address:list.address
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            success(res){
              this_.setData({array:[]});
              this_.getData(this_.data.array.length);
              wx.showToast({
                title: '添加活动成功',
                icon: 'success',
                duration: 1000//持续的时间
              })
            }
          })
          this_.setData({
            input_wvalue:'',
            inputTure:false
          });
        },
        fail(){
          this_.setData({
            input_wvalue:'',
            inputTure:false
          });
          wx.showToast({
            title: '获取位置失败，请重新添加！',
            icon: 'none',
            duration: 1000//持续的时间
          })
        }
      })
    }else{
      wx.showToast({
        title: '请输入活动名!',
        icon: 'none',
        duration:800//持续的时间
      })
    }
  },
  // 取消添加活动
  clearInt:function(e){
    this.setData({
      input_wvalue:'',
      inputTure:false
    });
  },
  //   <----------删除后端数据库活动记录>
  clearAct:function(e){
    let index = 0;
    const this_ = this;
    wx.showModal({
      title: '是否删除该活动？',
      content: '',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          index = e.currentTarget.dataset.index;
          //<--------------删除该活动
          wx.request({
            url: httpUrl+"/pravitecars/deletePravitecard", //仅为示例，并非真实的接口地址
            method:"post",
            data: {
             id:this_.data.actArr?this_.data.array[index].id:this_.data.array2[index].id,
             userid:this_.data.user.id
            },
            header: {
              "content-Type": "application/x-www-form-urlencoded"
            },
            success (res) {
              this_.setData({
                array:[],
                array2:[]
              })
              this_.data.actArr?this_.getData(0):this_.getData2(0,this_.data.inputVal);
            }
          })
        } else {}//这里是点击了取消以后
      }
    })
  },
    // 滑动底部触发
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
   * 生命周期函数--监听页面加载<--------加载数据
   */
  onLoad: function (options) {
    //<-----------加载用户信息
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
  //加载数据
  getData:function(offset){
    const this_ = this;
    wx.request({
      url: httpUrl+"/pravitecars/queryPersonPunchCard", //仅为示例，并非真实的接口地址
      method:"post",
      data: {
        userid:this_.data.user.id,
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
          this_.setData({array:[...this_.data.array,...res.data]});
      }
    })
  },
  getData2:function(offset,value){
    const this_ = this;
    wx.request({
      url:httpUrl+'/pravitecars/searchPersonPunchCard', //仅为示例，并非真实的接口地址
      method:'post',
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
   * 页面相关事件处理函数--监听用户下拉动作<-------重新加载页面
   */
  onPullDownRefresh: function () {
    //  <----------------加载个人打卡数据>
    const data = [
      {
        name:'first',
        location:{
          w:0,
          e:0
        },
        time:'2020/05/06 13:00:00'
      },{
        name:'second',
        location:{
          w:0,
          e:0
        },
        time:'2020/05/06 13:00:00'
      },{
        name:'third',
        location:{
          w:0,
          e:0
        },
        time:'2020/05/06 13:00:00'
      }
    ]
    if(data.length<1){
      this.setData({actArr:false});
    }
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