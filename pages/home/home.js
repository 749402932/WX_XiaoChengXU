// pages/home/home.js
import {
  getMultiData
} from '../../service/home.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567168558123&di=05577c9d46068f10c587dae50f9f5719&imgtype=0&src=http%3A%2F%2Fpic33.nipic.com%2F20130924%2F9822353_015119969000_2.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567168575874&di=506038d186ec89325d4e5780136d96cc&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20110718%2FImg313696301.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567168613728&di=79e114ee62f35c5492b1ddf976a57d02&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F5f56362ebfd186e7a8c16b1a00442938cf7ddc9747ba8-nrIZSr_fw658'
    ],
    recommends: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //  1.请求轮播图以及推荐数据
    getMultiData().then(res => {
      console.log('轮播图请求成功', res)
      const banners = res.data.data.list;
      const recommends = res.data.recommend.list;

      //  将banners和recommends放到data中
      // this.setData({
      //   banners,
      //   recommends
      // })

    }).catch(err => {
      console.log('轮播图请求失败', err)
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