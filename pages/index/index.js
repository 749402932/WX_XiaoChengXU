//index.js
//获取应用实例
const app = getApp()

Page({
  // 2.初始化数据
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 3.监听wxml中相关的一些事件
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 1.监听页面的生命周期函数
  onLoad: function() {

    // 页面被加载出来
    console.log("onLoad")
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        console.log(res)
      }
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow() {
    // 页面显示出来时
    console.log("onShow")
  },
  onReady() {
    // 页面初次渲染完成时
    console.log("onReady")
  },
  onHide() {
    // 当页面隐藏起来时
    console.log("onHide")
  },
  onUnload() {
    console.log("onUnload")
  },

  // 4.其他事件
  // 监听页面的滚动
  onPageScroll(obj) {
    console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom() {
    console.log("页面滚动到底部")
  },
  // 监听下拉刷新的事件
  onPullDownRefresh() {
    console.log("下拉刷新的事件")
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})