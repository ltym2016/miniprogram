import request from "./http.js"

export function getInitData() {
  return request({
    url:"api/wishtemplate/index"
  })
}

export function uploadInit() {
  return request({
    url:"api/cosupload/init"
  })
}