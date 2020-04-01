// pages/template/template.js
const api = require('../../http/list.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: 0,
    navT: 0,
    templates:[],
    selectBackground:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var menuInfo = wx.getMenuButtonBoundingClientRect()
    console.log("options", menuInfo)
    this.setData({
      navH: menuInfo.height,
      navT: menuInfo.top
    })

    api.getListData().then((res)=>{
      console.log(res)
      this.setData({
        templates:res.data.data.list
      })
    })
  },

  back(){
    wx.navigateBack({
      
    })
  },

  itemClick(e) {
    console.log(e)
    const index = e.currentTarget.dataset.index
    this.setData({
      selectBackground : this.data.templates[index].background_image_url
    })
    wx.navigateBack({
      
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
    const pages = getCurrentPages()
    const blessing = pages[pages.length - 2]
    blessing.setData({
      background: this.data.selectBackground
    })
    
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