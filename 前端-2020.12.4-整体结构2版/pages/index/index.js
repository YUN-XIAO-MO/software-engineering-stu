//index.js
//获取应用实例
const app = getApp();

App.Page({
  data: {
    iconList: [
      {
        icon: "cardboardfill",
        color: "red",
        badge: 120,
        name: "VR",
      },
      {
        icon: "recordfill",
        color: "orange",
        badge: 1,
        name: "录像",
      },
      {
        icon: "picfill",
        color: "yellow",
        badge: 0,
        name: "图像",
      },
      {
        icon: "noticefill",
        color: "olive",
        badge: 22,
        name: "通知",
      },
      {
        icon: "upstagefill",
        color: "cyan",
        badge: 0,
        name: "排行榜",
      },
      {
        icon: "clothesfill",
        color: "blue",
        badge: 0,
        name: "皮肤",
      },
      {
        icon: "discoverfill",
        color: "purple",
        badge: 0,
        name: "发现",
      },
      {
        icon: "questionfill",
        color: "mauve",
        badge: 0,
        name: "帮助",
      },
      {
        icon: "commandfill",
        color: "purple",
        badge: 0,
        name: "问答",
      },
      {
        icon: "brandfill",
        color: "mauve",
        badge: 0,
        name: "版权",
      },
    ],
    gridCol: 4,
    skin: false,
  },
  onLoad() {
    wx.getStorage({
      key: "uid",
      success(res) {
        wx.showToast({
          title: '小的记住您了',
        })
      },
      fail() {
        wx.navigateTo({
          url: '/pages/login/login',
        })
      },
    });
  },
  search(e) {
    let keyword = e.detail.value.keyword;
    console.log("关键字：" + keyword);
    app.setInfo(keyword);
    app.setName(keyword);
  },
});
