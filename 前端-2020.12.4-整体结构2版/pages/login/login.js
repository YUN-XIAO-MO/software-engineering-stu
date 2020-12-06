const app = getApp();
import { getCode, login, toTab } from "../../API/localAPI/index";
App.Page({
  mylogin() {
    getCode()
      .then((code) => {
        return code;
      })
      .then((code) => {
        login(code)
          .then((res) => {
            wx.showToast({
              title: "登录成功!",
              duration: 1500,
            });
            console.log(res);
            setTimeout(() => {
              toTab("/pages/index/index");
            }, 1500);
          })
          .catch((err) => {
            wx.showToast({
              title: "登录失败!",
              icon: "fail",
              duration: 1500,
            });
            console.log("登录出错：" + err);
          });
      })
      .catch((err) => {
        console.log("获取凭证出错：" + err);
      });
  },
});
