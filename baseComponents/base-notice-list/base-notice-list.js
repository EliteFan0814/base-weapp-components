// baseComponents/base-notice-list/base-notice-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //
    noticeList: {
      type: Array,
      value: []
    },
    // 是否自动播放
    autoplay: {
      type: Boolean,
      value: true
    },
    // 自动切换时间间隔
    interval: {
      type: Number,
      value: 5000
    },
    // 滑动动画时长
    duration: {
      type: Number,
      value: 500
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    // 打开相应 notice 页面
    openNotice(e) {
      const { id } = e.currentTarget.dataset
      // todo
      if (id === 'all') {
        // todo 打开 更多界面
      } else if (id) {
        // todo 打开 某一个notice界面
      } else {
        // 不跳转
      }
    }
  }
})
