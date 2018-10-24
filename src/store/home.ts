import * as types from "./types";
import axios from "@/utils/axios";
import { Message } from "iview";
const state = {
  table: []
};
const mutations = {
  [types.GET_TABLE](state, data) {
    console.log(data);
    state.table = data;
  }
};
const actions = {
  [types.GET_TABLE]({ commit }, payload: Object) {
    axios.post("/userv2/getUserByCondition", payload).then(res => {
      return new Promise((resolve, reject) => {
        if (res.code == 0) {
          resolve(res.datas);
          commit("GET_TABLE", res.datas);
        } else {
          Message.error({
            content: res.message || "请求错误！"
          });
          reject(res.message);
        }
      });
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
