// pages/login/login.js
Page({
  onLoad: function(options) {
    //  1.先从缓冲中取出token
    const token = wx.getStorageSync('token')
    //  2.判断token是否有值
    if (token && token.length !== 0) { //  已经有token，验证token是否过期
      //验证token是否过期
      this.check_token(token)
    } else { //  没有token，进行登录操作
      this.login()
    }
  },

  check_token(token) {
    console.log('执行了验证token操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      // data: '',
      header: {
        token
      },
      method: 'POST',
      // dataType: 'json',
      // responseType: 'text',
      success: (res) => {
        console.log('验证token是否过期成功：', res)
        if (!res.data.errCode) {
          console.log('token有效')
          this.globalData.token = token
        } else {
          this.login()
        }
      },
      fail: (res) => {
        console.log('验证token是否过期失败：', res)
      },
      complete: (res) => {},
    })
  },

  login() {
    console.log('执行了登录操作')
    //  登录操作
    wx.login({
      //  code只有5分钟的有效期
      success: (res) => {
        console.log('微信服务器返回login接口数据成功：', res)
        //  1.获取code
        const code = res.code

        //  2.将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          data: {
            code: '123123123'
          },
          // header: {},
          method: 'POST',
          // dataType: 'json',
          // responseType: 'text',
          success: (res) => {
            console.log('服务器返回数据成功：', res)
            //  1.取出token
            const token = res.data.token

            //  2.将token保存在globalData中
            this.globalData.token = token

            //  3.进行本地存储
            //  3.1.wx.setStorage表示异步
            // wx.setStorage({
            //   key: '',
            //   data: '',
            //   success: function(res) {},
            //   fail: function(res) {},
            //   complete: function(res) {},
            // })
            //  3.2.wx.setStorageSync表示同步
            wx.setStorageSync('token', token)
          },
          fail: (res) => {
            console.log('服务器返回数据失败：', res)
          },
          complete: (res) => {
            console.log('服务器返回数据完成：', res)
          },
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  //  对象：  小程序关闭掉
  globalData: {
    token: ''
  }
})