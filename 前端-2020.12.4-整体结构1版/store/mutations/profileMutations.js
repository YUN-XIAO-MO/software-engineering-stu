const Mutations = {
  setInfo(val) {
    let { profileState } = getApp().store.getState();
    getApp().store.setState({
      "profileState.info": val,
    });
  },
  setName(val) {
    let { profileState } = getApp().store.getState();
    getApp().store.setState({
      "profileState.name": val,
    });
  },
};

module.exports = Mutations;
