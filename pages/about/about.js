// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstName:"Lu",
    lastName:"ys",
    newTime: new Date().toLocaleString(),
    age:9,
    isActive:false,
    score:50
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(()=>{
      this.setData({
        newTime: new Date().toLocaleString()
      })
    }, 1000)

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

  clikSwitchColor() {
    console.log("-------")
    this.setData({
      isActive: !this.data.isActive
    })
  },
  addScore(){
    this.setData({
      score:this.data.score+6
    })
  }
})