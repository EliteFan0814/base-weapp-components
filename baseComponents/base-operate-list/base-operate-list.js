// baseComponents/base-operate-list/base-operate-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否使用 icon 图标
    useIcon: {
      type: Boolean,
      value: true
    },
    operateList: {
      type: Array,
      value: [
        { name: '这是名字', value: 1, iconUrl: '', otherInfo: '其他信息' },
        { name: '这是名字', value: 1, iconUrl: '' }
      ]
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
    handleClick(e) {
      console.log(e)
    }
  }
})
