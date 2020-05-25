import request from "../../http/http.js"
// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    video_url:'',
    guessList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id
    this._getVideoDetailData(id)
    this._getGuessData(id)
    
  },

  _getGuessData(id) {
    request({
      url: "api/video/recommand",
      method: 'POST',
      data: {
        videocategory_id: id
      }

    }).then(res => {
      console.log(res)
      this.setData({
        guessList:res.data.data.list
      })

    }).catch(err => {
      console.log(err)
    })
  },

  _getVideoDetailData(id) {
    request({
      url: "api/video/detail",
      method: 'POST',
      data: {
        video_id: id
      }

    }).then(res => {
      console.log(res)
      this.setData({
        video_url: res.data.data.video_url_text,
        share_num: res.data.data.share_count
      })

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

  back(){
     wx.navigateBack({
       
     })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    const pages = getCurrentPages()
    const home = pages[0]

    home.setData({
      content:"lusss------"
    })
    console.log(pages)
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