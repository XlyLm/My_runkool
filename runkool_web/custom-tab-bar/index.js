// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  /**
   * 组件的初始数据
   */
  data: {
    curIndex: 0,
    color: "#00f",
    selectedColor: "#ff0",
    list: [
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      },
      {
        "pagePath": "pages/find/find",
        "text": "发现"
      },
      {
        "pagePath": "pages/my/my",
        "text": "个人中心"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoPage:function(e){
      let pages = getCurrentPages();
      let nowPage = pages[pages.length-1];
      let nowPageUrl = nowPage.route;
      if(nowPageUrl.search(e.currentTarget.dataset.this) === -1){
        wx.switchTab({
          url:e.currentTarget.dataset.page
        })
      }
    },
  }
})
