import Store from "wxministore";
const profileState = require("profileState");
const postsState = require("postsState");
const teamState = require("teamState");
let store = new Store({
  state: {
    profileState,
    teamState,
    postsState,
  },
});

module.exports = store;
