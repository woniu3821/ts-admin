import request from "@/utils/api";
import { State } from "./interface";
import { Commit } from "vuex";
// import { GET_TABLE } from "../types";

interface GetTableListParam {
  pageNumber: number;
  pageSize: number;
  //   city: string;
}

const state: State = {
  count: 0,
  test1: [],
  message: ""
};

const getters = {
  count: (state: State) => state.count,
  message: (state: State) => state.message
};

const mutations = {
  INCREMENT(state: State, num: number) {
    state.count += num;
  }
};

const actions = {
  async getTodayWeather(
    context: { commit: Commit },
    params: GetTableListParam
  ) {
    return request.post("/userv2/getUserByCondition", { ...params });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
