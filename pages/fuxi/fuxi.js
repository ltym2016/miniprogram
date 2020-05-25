import request from "../../http/http.js"
// pages/fuxi/fuxi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab_list: [],
    title_list:[],
    videocategory_id:0,
    page:0,
    video_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showLoading({
    //   title: '加载中'
    // })

    this._getTabData()

    this._getListData(this.data.videocategory_id)
    
  },

  _getListData(id){
    const page = this.data.page+1
    request({
      url: "api/video/videolist",
      method: 'POST',
      data:{
        videocategory_id: id,
        page: 3,
        pagenum:10
      }

    }).then(res => {
      console.log("res",res)
      const list = res.data.data.list
      const oldlist = this.data.video_list
      oldlist.push(...list)
      this.setData({
        video_list: oldlist,
        page:page
      })

    }).catch(err => {
      console.log(err)
    })
  }, 

  _getTabData() {
    // 封装的网络请求
    request({
      url: "api/videocategory/index",
      method: 'POST'

    }).then(res => {
      wx.hideLoading()
      const list = res.data.data
      this.data.tab_list = list
      for (let i = 0; i < list.length; i++) {
        const tabName = list[i].name
        this.data.title_list[i] = tabName
      }
      this.setData({
        title_list: this.data.title_list
      })

      // title_list:this.data.title_list.concat(list)

    }).catch(err => {
      console.log(err)
    })
  },

  tabItemClick(e) {
    const selectIndex = e.detail.index
    this.setData({
      videocategory_id: this.data.tab_list[selectIndex].videocategory_id,
      page:0,
      video_list:[]
    })

    this._getListData(this.data.videocategory_id)
  },

  videoItemClick(e) {
    const index = e.currentTarget.dataset.index
    const id = this.data.video_list[index].video_id
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id
    })
  }
})