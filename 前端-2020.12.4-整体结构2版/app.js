//app.js
const store = require("./store/state/index");
const {
  profileMutations,
  teamMutations,
  postsMutations,
} = require("./store/mutations/index");
App({
  //挂载全局状态
  store,
  //挂载状态变更函数
  ...profileMutations,
  ...teamMutations,
  ...postsMutations,
  onLaunch: function () {
    let _this = this;
    console.info("启动中...");
 
  },
  onShow: function () {
    console.info("前台显示...");
  },
  onHide: function () {
    console.info("隐藏后台...");
  },
  onError: function (err) {
    console.error("发生错误" + err);
  },
});
