import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function getCountNum(type) {
  return new Promise(resolve => {
    setTimeout(() => {
      let amount;
      switch (type) {
        case "one":
          amount = 1;
          break;
        case "two":
          amount = 2;
          break;
        case "ten":
          amount = 10;
          break;
        default:
          amount = 0;
      }
      resolve({ amount });
    }, 1000);
  });
}

const counter = {
  state: {
    count: 10
  },
  getters: {
    squared: state => state.count * state.count
  },
  mutations: {
    increment(state, amount) {
      state.count += amount;
    }
  },
  actions: {
    incrementAsync({ commit }, payload) {
      return getCountNum(payload.type).then(data => {
        commit("increment", {
          amount: data.amount
        });
      });
    }
  },
  modules: {
    childModule: {}
  }
};

const store = new Vuex.Store({
  modules: {
    counter
  }
});

console.log(store.state.counter.count);
console.log(store.getters.squared);
store.commit("increment", 5);
store.dispatch("incrementAsync", { type: "one" });
