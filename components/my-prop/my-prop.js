// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // title:String
    title: {
      type: String,
      value: "我是默认的标题",
      observer: function(newVal, oldVal) { //观察数据的变化
        console.log(newVal, oldVal)
      }
    }
  },

  /**
   * 页面可以修改组件样式
   */
  externalClasses: ["titleclass"],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})