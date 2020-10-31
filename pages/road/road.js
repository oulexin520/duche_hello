// pages/road/road.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  goInformation:function(){
    wx.navigateTo({
      url: "/pages/information/information"
    })
  },
 
  chooseAddrssFn(){
    const key = "DDEBZ-TFLWG-6RAQE-IXOHP-FX3AH-ZIBIP"; //使用在腾讯位置服务申请的key
const referer = '小堵hello'; //调用插件的app的名称
const location = JSON.stringify({
  latitude: 39.89631551,
  longitude: 116.323459711
});
const category = '生活服务,娱乐休闲';

wx.navigateTo({
  url: `plugin://chooseLocation/index?key=${key}&referer=${referer}&location=${location}&category=${category}`
})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
     // 从地图选点插件返回后，在页面的onShow生命周期函数中能够调用插件接口，取得选点结果对象
    const chooseLocation = requirePlugin('chooseLocation');
    const location = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
    // console.log(location);
    let address =location  ?location.address : ""
    this.setData({
      //因为地图是打开新页面的选择后会关闭地图页面然后触发onshow 在这里可以获取用户选择信息
      address
    })
    
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