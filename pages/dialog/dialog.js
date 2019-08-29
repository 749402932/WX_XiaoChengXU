// pages/dialog/dialog.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '加载中ing',
      duration: 3000,
      icon: 'loading',
      mask: true,
      success: function(res) {
        console.log("展示弹窗成功：", res)
      },
      fail: function(err) {
        console.log("展示弹窗失败：", err)
      },
      complete: function(e) {
        console.log("展示弹窗完成：", e)
      },
    })
  },

  handleShowModal() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容哈哈哈',
      showCancel: true,
      cancelText: '退出',
      cancelColor: 'red',
      confirmText: '提交',
      success: res => {
        console.log('showModal:', res)
        if (res.cancel) {
          console.log('用户点击了showModal取消按钮')
        }
        if (res.confirm) {
          console.log('用户点击了showModal确定按钮')
        }
      }
    })
  },

  handleShowLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })

    setTimeout(() => {
      //必须手动hideLoading才会让loading消失
      wx.hideLoading()
    }, 1000)
  },

  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'blue',
      success: function(res) {
        console.log('showActionSheet成功', res)
      },
      fail: function(res) {
        console.log('showActionSheet失败', res)
      },
      complete: function(res) {
        console.log('showActionSheet完成', res)
      },
    })
  },

  onShareAppMessage: function(options) {
    console.log('onShareAppMessage', options)
    return {
      title: '你好啊',
      path: '/pages/dialog/dialog',
      imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567077416155&di=9f2f372dcbedf6b4375a7fc4af6f05a3&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130314%2F11899688_192542628000_2.jpg',
    }
  }
})