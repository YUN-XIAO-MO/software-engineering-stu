import { config } from "../config.js";
export function getCode() {
  return new Promise((resolve, reject) => {
    //展示loading
    wx.showLoading({
      title: "登录中...",
    });
    //获取登录凭证
    wx.login({
      //成功回调
      success(res) {
        if (res.code) {
          resolve(res.code);
        } else {
          console.log("凭证code返回异常");
          reject(res.errMsg);
        }
      },
      //失败回调
      fail(err) {
        console.log("wx.login接口调用失败");
        reject(err.errMsg);
      },
      complete() {},
      timeout: 5000,
    });
  });
}
export function login(code) {
  if (!code || typeof code !== "string") {
    console.log("参数code不合规范");
    return;
  } else {
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.url,
        data: {
          code: code,
        },
        success(res) {
          resolve(res.data);
        },
        fail(err) {
          reject(err.errMsg);
        },
        complete() {
          wx.hideLoading();
        },
        timeout:5000
      });
    });
  }
}
