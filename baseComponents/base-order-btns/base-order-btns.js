// baseComponents/base-order-btns/base-order-btns.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    orderBtnList: [
      { img: './pending.png', name: '待付款' },
      { img: './stocking.png', name: '待发货' },
      { img: './sending.png', name: '待收货' },
      { img: './evaluate.png', name: '待评价' },
      { img: './end.png', name: '已完成' }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(e){
      console.log(e)
    }
  }
})
