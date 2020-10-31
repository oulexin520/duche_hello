// JSDoc手册： https://www.html.cn/doc/jsdoc/tags-author.html

// 接口地址 
const baseUrl = 'http://rap2.taobao.org:38080/app/mock/254162'

/**
 * 封装数据请求的方法
 * @see {@link https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html}
 * @params {object} options 额外选项
 */
export function request (options) {
  // 获取参数
  const { url, data, method } = options;
  // 加载动画 https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html
  wx.showLoading({
    title: '加载中',
  })
  // 返回Promise对象
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      data: data || {},
      method: method || 'GET',
      success: (res) => {
        // 异步操作成功调用resolve
        resolve(res)
      },
      fail: (err) => {
        // 异步操作失败调用reject
        reject(err)
      },
      complete: () => {
        // 成功or失败都是已完成，所以都会触发
        wx.hideLoading()
      }
    })
  })
}

/**
 * 封装tips提示
 * https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html
 */
export function tips (options) {
  const { title, icon, duration } = options
  wx.showToast({
    title,
    icon: icon || 'none', // success loading
    duration: duration || 2000
  })
}