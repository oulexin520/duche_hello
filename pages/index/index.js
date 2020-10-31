// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:"",
    latitude:"",
    scale:16
  },
  setPositionFn(){
    this.getLocationFn()
  },
  setScalFn(e){
    //获取参数scale数据
    let {type} =e.currentTarget.dataset
    let {scale} = this.data
    //判断更新
    if(type==="add"){
      scale+=1
    }else{
      scale-=1
    }
    //限制最小3 最大4
    if(scale<3) scale=3
    if(scale>20) scale =20
    //更新数据
    this.setData({
      scale
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取用户经度纬度
      this.getLocationFn()  
  },
  /**
   * 地图-路线规划插件
   */
  showMapFn(){
    let plugin = requirePlugin('routePlan');
    let key='DDEBZ-TFLWG-6RAQE-IXOHP-FX3AH-ZIBIP';  //使用在腾讯位置服务申请的key
    let referer = '小堵hello';   //调用插件的app的名称
    let endPoint = JSON.stringify({  //终点
      'name': '北京西站',
      'latitude': 39.894806,
      'longitude': 116.321592
    });
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    });
  },
  getLocationFn() {
    wx.getLocation({ 
      // type: 'wgs84',
      type: 'gcj02',
      success: res => {
        const latitude = res.latitude
        const longitude = res.longitude
        console.log('经度', longitude, '纬度', latitude)
        this.setData({  // ES6对象属性的简写
          longitude,
          latitude
        })
      }
     })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})