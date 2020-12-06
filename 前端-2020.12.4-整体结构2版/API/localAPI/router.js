//跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
export function toTab(url) {
  if (!url || typeof url !== "string") {
    console.log("toTab方法参数不合法");
    return;
  } else {
    return new Promise((resolve, reject) => {
      wx.switchTab({
        url: url,
        success() {
          resolve("OK");
        },
        fail(err) {
          reject(err);
        },
      });
    });
  }
}
