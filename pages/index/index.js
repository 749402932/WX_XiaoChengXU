//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isShow: true
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  handleIncrementCpn() {

    //  最终目的： 修改my-sel中的counter
    //  1.获取组件对象
    // const my_sel = this.selectComponent('.sel-class')
    const my_sel = this.selectComponent('#sel-id') //推荐
    console.log("------------------", my_sel)

    //  2.通过setData修改组件中的数据（不合理）
    // my_sel.setData({
    //   counter: my_sel.data.counter + 20
    // })

    //  3.通过方法对数据进行修改
    my_sel.incrementCounter(10)
  },

  handleChangeShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})