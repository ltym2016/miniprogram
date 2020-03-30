// components/j-tab/j-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title_list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickItem(e) {
      const selectIndex = e.currentTarget.dataset.index
      this.setData({
        currentIndex:selectIndex
      })

      this.triggerEvent("tabItemClick", { index: selectIndex }, {})
    }
  }
})
