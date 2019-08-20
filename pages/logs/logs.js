//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onPageScroll(obj) {
    console.log(obj)
  },
  onReachBottom() {
    console.log("页面滚动到底部")
  },
  onPullDownRefresh(){
    console.log("下拉刷新的事件")
  },
  onLoad: function() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})