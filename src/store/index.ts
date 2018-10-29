import Vue from "vue";
import Vuex, { Commit, Dispatch } from "vuex";

import home from "./home/index";
import state, { State } from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);
export default new Vuex.Store<State>({
  strict: true,
  state,
  mutations,
  actions,
  getters,
  modules: {
    home
  }
});

export interface ActionContextBasic {
  commit: Commit;
  dispatch: Dispatch;
}
