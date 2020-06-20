const Actions = {
  // 初始化信息
  init({ commit }) {
    commit("initItem");
  },
  //保持当前题目，跳转下一题
  saveItem({ commit, state }, uid) {
    commit("REMBER_ANSWER", uid); // 记录ID

    if (state.itemNum < state.itemDetail.length) {
      commit("addItemNum", 1);
    }
  }
};

export default Actions;
