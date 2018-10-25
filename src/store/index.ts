import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import home from "./home/index";
export default new Vuex.Store({
  strict: true,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    home
  }
});
