import { TABLE_POST, USER_LIST_GET } from "./types";
import { ActionTree } from "vuex";
import ajax from "@/utils/api";
const actions: ActionTree<any, any> = {
  async [TABLE_POST]({ state, commit }, data) {
    const res = await ajax.post("/userv2/getUserByCondition", data);
    return new Promise((resolve, reject) => {
      if (res.status === 200 && res.data.code == 0) {
        resolve(res.data.datas.rows);
      } else {
        reject(res.data.message);
      }
    });
  },
  async [USER_LIST_GET]({ commit }, data) {
    const res = await ajax.get("/user");
    return new Promise(resolve => {
      if (res.status === 200) {
        resolve(res.data);
      }
    });
  },
  reduce({ commit }) {
    commit("reduce");
  }
};
export default actions;
