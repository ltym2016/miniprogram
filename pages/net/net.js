import request from "../../http/http.js"

// pages/net/net.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success:function(res) {
    //     console.log(res)
    //   }
    // }),

    // // get请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/home/data',
    //   method:'get',
    //   data:{
    //     type:'sell',
    //     page:1
    //   },
    //   success:function(res){
    //     console.log(res)
    //   }
    // })

    // // post请求
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method:"post",
    //   data:{
    //     name:"liu",
    //     age:18
    //   },
    //   success: function(res){
    //     console.log(res)
    //   }
    // })
    // wx.showLoading({
    //   title: '加载中'
    // })
    // // 封装的网络请求
    // request({
    //   url:"http://job.wdwfrh.cn/api/partjob/index"

    // }).then(res=>{
    //   wx.hideLoading()
    //   console.log(res)
    //   this.setData({
    //     jobList: res.data.data.list
    //   })
    // }).catch(err => {
    //   console.log(err)
    // })

    wx.showLoading({
      title: '加载中'
    })
    // 封装的网络请求
    request({
      url: "http://video.chuji.mobi/api/video/videolist",
      method:'POST'

    }).then(res => {
      wx.hideLoading()
      console.log(res)
      
    }).catch(err => {
      console.log(err)
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
    return {
      title: "分享样式",
      path: "pages/about/about"
    }

  }
})