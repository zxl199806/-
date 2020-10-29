// pages/commit/commit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:''
  },

  //发送响应
  send:function(){
    var that = this
    wx.showLoading({
      title: '加载中',
    })
    //与服务器交互
    setTimeout(() => {
      wx.hideLoading()
    }, 2000);
  },
  


  //数据绑定
  bindTextAreaBlur:function(e){
    this.data.detail=e.detail.value
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

  }
})