import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: "Buy milk",
        labels: [1, 2],
        done: false
      },
      {
        id: 2,
        name: "Buy Vue's book",
        labels: [1, 3],
        done: false
      }
    ],
    labels: [
      {
        id: 1,
        text: "Shopping"
      },
      {
        id: 2,
        text: "Foods"
      },
      {
        id: 3,
        text: "Books"
      }
    ],
    nextTaskId: 3,
    nextLabelId: 4
  },
  mutations: {
    addTask(state, { name, labelIds }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        labelIds,
        done: false
      });

      state.nextTaskId++;
    },
    toggleTaskStatus(state, { id }) {
      const filtered = state.tasks.filter(task => {
        return task.id === id;
      });

      filtered.forEach(task => {
        task.done = !task.done;
      });
    },
    addLabel(state, { text }) {
      state.labels.push({
        id: state.nextLavelId,
        text
      });

      state.nextLavelId++;
    }
  }
});

export default store;
