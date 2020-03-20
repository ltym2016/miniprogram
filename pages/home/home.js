// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'luys',
    list:[
      { id: 1, name: "lius1", age:11},
      { id: 2, name: "lius2", age: 12 },
      { id: 3, name: "lius3", age: 13 },
      { id: 4, name: "lius4", age: 14 }
    ],
    count:0
  },

  btnClick() {
    // 这种做法界面不会刷新
    // this.data.count++,
    // console.log("点击按钮" + this.data.count)

    // 正确的做法
    this.setData({
      count:this.data.count+1
    })
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