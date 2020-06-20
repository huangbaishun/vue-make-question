const initItem = "initItem";
const REMBER_ANSWER = "REMBER_ANSWER";
const addItemNum = "addItemNum";
const mutations = {
  [initItem](state) {
    state.itemNum = 1;
    state.allTime = 0;
    state.answerid = [];
  },
  [REMBER_ANSWER](state, uid) {
    state.answerid.push(uid);
  },
  [addItemNum](state, num) {
    state.itemNum += num;
  }
};
export default mutations;
