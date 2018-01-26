//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    grids:[
      {name:'天气预报',url:'../../pages/weather/weather',img:'../../assest/images/icon_tabbar/weather.png'},
      {name:'公交路线',url:'../../pages/bus/bus',img:'../../assest/images/icon_tabbar/bus.png'},
      {name:'车型大全',url:'../../pages/cars/cars',img:'../../assest/images/icon_tabbar/car.png'},
      {name:'智能回答',url:'../../pages/reply/reply',img:'../../assest/images/icon_tabbar/reply.png'},
      {name:'手机归属地',url:'../../pages/mobile/mobile',img:'../../assest/images/icon_tabbar/mobile.png'},
      {name:'待定',url:'../../pages/block/block',img:'../../assest/images/icon_tabbar/loading.png'},
      {name:'待定',url:'../../pages/block/block',img:'../../assest/images/icon_tabbar/loading.png'},
      {name:'待定',url:'../../pages/block/block',img:'../../assest/images/icon_tabbar/loading.png'},
      {name:'待定',url:'../../pages/block/block',img:'../../assest/images/icon_tabbar/loading.png'},
    ]
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
})
