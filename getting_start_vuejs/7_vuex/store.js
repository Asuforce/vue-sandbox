import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: "Buy milk",
        done: false
      },
      {
        id: 2,
        name: "Buy Vue's book",
        done: false
      }
    ]
  }
});

export default store;
