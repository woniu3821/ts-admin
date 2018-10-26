import Vue from "vue";
import Vuex, { Commit, Dispatch } from "vuex";

import home from "./home/index";

Vue.use(Vuex);
export default new Vuex.Store({
  strict: true,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    home
  }
});

export interface ActionContextBasic {
  commit: Commit;
  dispatch: Dispatch;
}
