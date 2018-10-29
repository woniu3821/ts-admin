import { GetterTree } from "vuex";
const getters: GetterTree<any, any> = {
  result(state) {
    return state.num + "oooo";
  }
};
export default getters;
