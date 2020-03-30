export default function request(options){
  console.log(options)
  return new Promise((reslove,reject)=>{
    wx.request({
      url: options.url,
      method:options.method,
      data:options.data || {},
      success: reslove,
      fail: reject
    })
  })
}