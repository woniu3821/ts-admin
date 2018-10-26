import request from "@/utils/api";
import { State } from "./interface";
import { TABLE_POST } from "../types";
import { ActionContextBasic } from "..";

interface GetTableListParam {
  pageNumber: number;
  pageSize: number;
}

const state: State = {
  count: 0,
  list: [],
  message: ""
};

const getters = {
  list: (state: State) => state.list
};

const mutations = {
  [TABLE_POST](state: State, data: []) {
    state.list = data;
  }
};

const actions = {
  async [TABLE_POST](context: ActionContextBasic, params: GetTableListParam) {
    const res = await request.post("/userv2/getUserByCondition", { ...params });
    return new Promise((reject, resolve) => {
      if (res.status === 200 && res.data.code == 0) {
        context.commit(TABLE_POST, res.data.datas.rows);
      } else {
        reject(res.data.message);
      }
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
