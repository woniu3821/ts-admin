import * as types from "./types";
import axios from "@/utils/axios";
const state = {
  table: []
};
const mutations = {
  [types.GET_TABLE](state, data) {
    state.table = data;
  }
};
const actions = {
  [types.GET_TABLE]({ commit }, payload: Object) {
    axios.post("/userv2/getUserByCondition", payload).then(res => {
      console.log(res);
    });
  }
};
const getters = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
