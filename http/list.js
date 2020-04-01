import request from "./http.js"

export function getListData() {
  return request({
    url: "api/wishtemplate/index"
  })
}