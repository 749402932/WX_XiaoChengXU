// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: "",
    imgPathList: []
  },
  handleChooseAlbum() {
    //系统API，让用户在相册中选中图片（或者拍照）
    wx.chooseImage({
      success: res => {
        console.log(res)
        this.setData({
          imgPathList: res.tempFilePaths
        })
      },
    })
  },
  handleImageLoad() {
    console.log("图片加载完成")
  }
})