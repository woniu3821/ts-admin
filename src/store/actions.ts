import { TABLE_POST } from "./types";
import { ActionTree } from "vuex";
import request from "@/utils/api";
const actions: ActionTree<any, any> = {
  async [TABLE_POST]({ state, commit }, data) {
    const res = await request.post("/userv2/getUserByCondition", data);
    return new Promise((reject, resolve) => {
      if (res.status === 200 && res.data.code == 0) {
        resolve(res.data.datas.rows);
      } else {
        reject(res.data.message);
      }
    });
  },
  add({ commit }) {
    commit("add");
  },
  reduce({ commit }) {
    commit("reduce");
  }
};
export default actions;
