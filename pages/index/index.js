// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    isPushing: false,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swiperList: [
      { hostPic: 'https://dummyimage.com/750x240/000/fff', id: 4 },
      { hostPic: 'https://dummyimage.com/750x240/000/fff', id: 15 },
      { hostPic: 'https://dummyimage.com/750x80/000/fff', id: 28 },
      { hostPic: 'https://dummyimage.com/750x80/000/fff', id: 3 }
    ],
    classArr: [
      { className: '生生鲜大虾鲜', classImg: 'https://dummyimage.com/80x80/000/fff' },
      { className: '生生鲜大虾鲜', classImg: 'https://dummyimage.com/80x80/000/fff' },
      { className: '生生鲜大虾鲜', classImg: 'https://dummyimage.com/80x80/000/fff' },
      { className: '生生鲜大虾鲜', classImg: 'https://dummyimage.com/80x80/000/fff' },
      { className: '生生鲜大虾鲜', classImg: 'https://dummyimage.com/80x80/000/fff' },
      { className: '生生鲜大虾鲜', classImg: 'https://dummyimage.com/80x80/000/fff' },
      { className: '生生鲜大虾鲜', classImg: 'https://dummyimage.com/80x80/000/fff' },
      { className: '生生鲜大虾鲜', classImg: 'https://dummyimage.com/80x80/000/fff' },
      { className: '生生鲜大虾鲜', classImg: 'https://dummyimage.com/80x80/000/fff' },
      { className: '生生鲜大虾鲜', classImg: 'https://dummyimage.com/80x80/000/fff' },
      { className: '生生鲜大虾鲜', classImg: 'https://dummyimage.com/80x80/000/fff' },
      { className: '生生鲜大虾鲜', classImg: 'https://dummyimage.com/80x80/000/fff' },
      { className: '生生鲜大虾鲜', classImg: 'https://dummyimage.com/80x80/000/fff' },
      { className: '生生鲜大虾鲜', classImg: 'https://dummyimage.com/80x80/000/fff' },
      { className: '生生鲜大虾鲜', classImg: 'https://dummyimage.com/80x80/000/fff' },
      { className: '生生鲜大虾鲜', classImg: 'https://dummyimage.com/80x80/000/fff' }
    ],
    noticeList: [
      { title: '放假啦，赶紧回放假啦，赶放假啦，赶紧回家放假啦，赶放假啦，赶紧回家紧回家紧回家家啦！！！', id: 0 },
      { title: '放假啦放放假啦，赶紧回家假啦，赶放假啦，赶紧回家紧回家，赶紧回家啦！！！', id: 1 },
      { title: '放假啦，赶放假啦，赶紧回家紧回家啦！！！', id: 2 },
      { title: '放放假啦，赶紧回家假啦放假啦，赶紧回家，赶紧回家啦放假啦，赶紧回家！！！', id: 3 }
    ]
  },
  openGood(e) {
    console.log('id', e.detail)
  },
  handleTap() {
    this.setData({
      isPushing: true
    })
    setTimeout(() => {
      this.setData({
        isPushing: false
      })
    }, 4000)
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: (res) => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
