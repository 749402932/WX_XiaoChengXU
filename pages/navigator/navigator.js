// pages/navigator/navigator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '哈哈哈'
  },

  handlePushDetail() {
    wx.navigateTo({
      // url: '/pages/detail/detail',  //  不带参数跳转
      url: '/pages/detail/detail?title=你好啊', //  带参数跳转
      success: function(res) {
        console.log('跳转到详情页：', res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})