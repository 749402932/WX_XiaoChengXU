//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // 开始数据示例
    name: 'Coderwhy',
    students: [{
        id: 110,
        name: 'kobe',
        age: 30
      },
      {
        id: 111,
        name: 'james',
        age: 28
      },
      {
        id: 112,
        name: 'curry',
        age: 32
      },
      {
        id: 113,
        name: 'why',
        age: 18
      }
    ],
    counter: 0
    // 结束数据示例
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
  // 开始点击示例
  handleBtnClick() {
    // 1.错误做法：界面是不会刷新的
    // this.data.counter += 1
    // console.log('按钮发生了点击：'+this.data.counter)

    //2.this.setData()
    this.setData({
      counter: this.data.counter += 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter -= 1
    })
  }
  // 结束点击示例
})