// pages/home/home.js
import request from '../../service/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    //  1.原生的方式发送网络请求
    this.get_data_origin()

    //  2.使用封装的request发送网络请求
    //  promise最大的好处就是防止出现回调地狱
    request({
      url: 'http://123.207.32.32:8000/recommend'
    }).then(res => {
      console.log('封装请求成功：', res)
    }).catch(err => {
      console.log('封装请求失败：', err)
    })

  },

  get_data_origin() {
    //  发送网络请求
    //  1.发送最简单的get请求
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: function(res) {
        console.log('请求1：', res)
      }
    })
    //  2.get请求，并且携带参数
    wx.request({
      url: 'http://123.207.32.32:8000/home/data',
      data: {
        type: 'sell',
        page: 1
      },
      success: function(res) {
        console.log('请求2：', res)
      }
    })
    //  3.post请求，并且携带参数
    wx.request({
      url: 'http://httpbin.org/post',
      method: "post",
      data: {
        name: 'coderwhy',
        age: 18
      },
      success: function(res) { //  成功回调
        console.log('请求3成功：', res)
      },
      fail: function(res) { //  失败回调
        console.log('请求3失败：', res)
      },
      complete: function(res) { //  请求结束回调
        console.log('请求3完成：', res)
      }
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})