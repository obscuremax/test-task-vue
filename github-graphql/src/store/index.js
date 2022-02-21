import Vue from "vue";
import Vuex from "vuex";
import repositories from "./modules/repositories";
import issues from "./modules/issues";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    repositories,
    issues,
  },
});
