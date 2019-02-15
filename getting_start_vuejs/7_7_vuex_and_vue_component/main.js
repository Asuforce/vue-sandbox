import Vue from "vue";
import App from "./App.vue";

Vue.use(Vuex);

const store = new Vuex.Store({});

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
