import{
  baseUrl
} from "./config.js"


export default function request(options){
  return new Promise((reslove,reject)=>{
    wx.request({
      url: baseUrl+options.url,
      method:options.method || "POST",
      data:options.data || {},
      header: {
        //传输接收数据的头（！！！）
        'content-type': 'application/x-www-form-urlencoded',
        'clientid': 1
      },
      success: reslove,
      fail: reject
    })
  })
}