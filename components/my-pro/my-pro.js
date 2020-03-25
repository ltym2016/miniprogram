// components/my-pro/my-pro.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:"我是默认标题"
    },
    content: {
      type: String,
      value: "我是默认内容",
      observer:function(newval, oldval) {
        console.log(newval, oldval)
      }
    }
  },
  externalClasses: ['title-class']
})
