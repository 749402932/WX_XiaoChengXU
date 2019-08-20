//app.js
App({
  //  小程序初始化完成时
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

  },
  //  小程序显示出来时
  onShow: function(options) {
    //  1.判断小程序的进入场景
    console.log(options)
    switch (options.scene) {
      case 1001:
        break;
      case 1005:
        break;
      default:
        break;
    }

    //  2.获取用户的信息，并且获取到用户信息之后，将用户的信息传递给服务器
    wx.getUserInfo({
      success: function(res) {
        console.log(res)
      }
    })
  },
  //  小程序隐藏时
  onHide: function() {

  },
  //  小程序产生一些错误
  onError: function(msg) {

  },
  //全局数据
  globalData: {
    userInfo: null,
    name: "张三",
    age: 18
  }
})