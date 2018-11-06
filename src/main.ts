import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import "iview/dist/styles/iview.css";
import "stylus/global.styl";
import iview from "iview";
// import "jquery";//引入jquery
Vue.use(iview);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
