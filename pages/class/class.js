const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    headerHeight: 38 + app.globalData.capsuleToTop,
    hideScrollBar: false, // 是否隐藏滚动条
    activeItemIndex: 0, // 高亮的 item 角标
    activeClassId: undefined,
    classList: [
      { text: '斯蒂芬士蒂芬士大夫', value: 1 },
      { text: '圣象', value: 3 },
      { text: '斯蒂芬圣象士大夫', value: 2 },
      { text: '斯士蒂芬士大夫', value: 13 },
      { text: '斯蒂芬夫', value: 11 },
      { text: '斯蒂圣象芬士蒂芬士大夫', value: 16 },
      { text: '斯蒂芬士大夫', value: 14 },
      { text: '圣象', value: 1 }
    ]
  },
  handleClick(e) {
    const { index, id } = e.currentTarget.dataset
    this.setData({
      activeItemIndex: index,
      activeClassId: id
    })
  },
  observers: {
    activeItemIndex: function () {
      console.log(111)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})
