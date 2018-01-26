// pages/mobile/mobile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      countryCodes: ["+86", "+80", "+84", "+87"],
      countryCodeIndex: 0,
      mobileValue:0,
      res_body:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  bindKeyInput: function (e) {
    var that = this;
    if(e.detail.value){
      this.setData({
          mobileValue: e.detail.value
      })
      wx.request({
        url:'http://showphone.market.alicloudapi.com/6-1',
        data:{num:this.data.mobileValue},
        header: { 'Content-Type':'application/json','Authorization': 'APPCODE 300e6d4b55bc4d51af1dc57da635c103'},
        success: function(res){
          that.setData({
              res_body: res.data.showapi_res_body
          })
        }
      })
    }
  },
  showPhone: function(){
    var that = this;
    if(this.data.mobileValue){
      wx.request({
          url:'http://showphone.market.alicloudapi.com/6-1',
          data:{num:this.data.mobileValue},
          header: { 'Content-Type':'application/json','Authorization': 'APPCODE 300e6d4b55bc4d51af1dc57da635c103'},
          success: function(res){
              that.setData({
                  res_body: res.data.showapi_res_body
            })
          }
      })
    }
  }
})