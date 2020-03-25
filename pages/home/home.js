
const app = getApp()

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
    count:0,
    newlist:[],
    counter:0
  },

  btnClick(event) {
    // 这种做法界面不会刷新
    // this.data.count++,
    // console.log("点击按钮" + this.data.count)

    // 正确的做法
    this.setData({
      count:this.data.count+1
    })

    console.log(app.globalData.age+app.globalData.name)
  },

  btnGetUserInfo (event) {
    console.log(event)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://job.wdwfrh.cn/api/partjob/index',
      success:(res)=>{
        console.log(res)
        this.setData({
          newlist : res.data.data.list
        })
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
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

  onPageScroll(obj) {
    // console.log(obj)
  },
  onReachBottom() {
    console.log("滚动搭配都着急哦")
  },
  sekectImage() {
    wx.chooseImage({
      success: function(res) {
        console.log(res)
      },
    })
  },

  loadComplete() {
    console.log("图片加载完成")
  },
  bindinput(event) {
    console.log("用户输入内容：" ,event.detail.value)
  },
  bindfocus(event) {
    console.log("获得焦点", event)
  },
  bindblur(event) {
    console.log("失去焦点", event)
  },

  bindScroll(event) {
    console.log("开始滚动", event)
  },

  clickItem(e) {
    const dataset = e.currentTarget.dataset
    console.log(dataset.index, dataset.item)
  },

  handleCaptureView1() {
    console.log("handleCaptureView1")
  },

  handleCaptureView2() {
    console.log("handleCaptureView2")
  },

  handleCaptureView3() {
    console.log("handleCaptureView3")
  },

  handleView1(){
    console.log("handleView1")
  },
  handleView2() {
    console.log("handleView2")
  },
  handleView3() {
    console.log("handleView3")
  },
  clickAddOne(event) {
    console.log("00-----", event)
    this.setData({
      counter: this.data.counter+1
    })
  },
  itemClick(e){
    console.log(e.detail.name)
    wx.showToast({
      title: e.detail.name,
      icon: 'none',
      duration: 2000
    })
  },
  clickAddNum() {
    const mySel = this.selectComponent(".sel-class");
    // mySel.setData({
    //   counter:mySel.data.counter + 20
    // })

    mySel.addNum(30)
  }
})