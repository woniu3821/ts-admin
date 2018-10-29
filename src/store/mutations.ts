import { TABLE_POST } from "./types";
import { MutationTree } from "vuex";

const mutations: MutationTree<any> = {
  [TABLE_POST](state, data) {
    state.list = data;
  },
  add(state) {
    state.num++;
  },
  reduce(state) {
    state.num--;
  }
};

export default mutations;
