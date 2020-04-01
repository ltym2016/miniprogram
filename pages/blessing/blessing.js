// pages/blessing/blessing.js
// import {
//   getInitData
// } from "../../http/wish-net.js"

const api = require('../../http/wish-net.js')
const COS = require('../../utils/cos-wx-sdk-v5.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH:0,
    navT:0,
    animationData:{},
    background:"",

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

    api.getInitData().then(res=>{
      console.log(res)
      this.setData({
        background: res.data.data.list[0].background_image_url
      })
    })
  },

  chooseWxImageShop() {
    wx.chooseImage({
      count:1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success: function(res) {
        console.log(res)
      },
    })
  },

  changeTemplate() {
    wx.navigateTo({
      url: '/pages/template/template',
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

    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation

    // animation.scale(2, 2).rotate(45).step()

    // this.setData({
    //   animationData: animation.export()
    // })
    var next = true
    setInterval(()=> {
      if (next) {
        animation.scale(0.8).step()
        next = !next
      } else {
        animation.scale(1).step()
        next = !next
      }
      
    
      this.setData({
        animationData: animation.export()
      })
    }, 1000)
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