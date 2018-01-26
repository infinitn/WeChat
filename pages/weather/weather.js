const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userLocation: {},
    hasUserLocation: false,
    canIUse: wx.canIUse('button.open-type.getLocation')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'https://op.juhe.cn/189/bus/busline',
    //   data: { key:'9efb8013e24b34b1f2cb22461c28a6fe',city:'上海',bus:'1097'},
    //   header: { 'Content-Type':'application/json'},
    //   success:function(res){
    //     console.log(res)
    //   }
    // })

    if(app.globalData.userLocation) {
      this.setData({
        userLocation: app.globalData.userLocation,
        hasUserLocation: true
      })
    }else if(this.data.canLoca){
      app.userLocationReadyCallback = res => {
        this.setData({
          userLocation: res,
          hasUserLocation: true
        })
      }
    } else{
      wx.getLocation({
        type: 'wgs84',
        success: res => {
          app.globalData.userLocation = res
          this.setData({
            userLocation: res,
            hasUserLocation: true
          })
        }
      })
    }

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
    if(this.data.hasUserLocation) {
      // console.log(this.data.userLocation.latitude + "0,0" + this.data.userLocation.latitude)
      wx.request({
          url:'http://jisutqybmf.market.alicloudapi.com/weather/query',
          // data:{location:this.data.userLocation.latitude + "0,0" + this.data.userLocation.latitude},
          data:{location: '39.983424,116.322987'},
          header: { 'Content-Type':'application/json','Authorization': 'APPCODE 300e6d4b55bc4d51af1dc57da635c103'},
          success: function(res){
            console.log(res)
          }
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
    
  },
  getLocation: function(e){
    console.log(e)
  }
})