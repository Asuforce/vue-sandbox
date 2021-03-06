import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: "Buy milk",
        labelIds: [1, 2],
        done: false
      },
      {
        id: 2,
        name: "Buy Vue's book",
        labelIds: [1, 3],
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
    nextLabelId: 4,
    filter: null
  },
  getters: {
    filteredTasks(state) {
      if (!state.filter) {
        return state.tasks;
      }

      return state.tasks.filter(task => {
        return task.labelIds.indexOf(state.filter) >= 0;
      });
    }
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
    },
    changeFilter(state, { filter }) {
      state.filter = filter;
    },
    restore(state, { tasks, labels, nextTaskId, nextLabelId }) {
      state.tasks = tasks;
      state.labels = labels;
      state.nextTaskId = nextTaskId;
      state.nextLabelId = nextLabelId;
    }
  },
  actions: {
    save({ state }) {
      const data = {
        tasks: state.tasks,
        labels: state.labels,
        nextTaskId: state.nextTaskId,
        nextLabelId: state.nextLabelId
      };
      localStorage.setItem("task-app-data", JSON.stringify(data));
    },
    restore({ commit }) {
      const data = localStorage.getItem("task-app-data");
      if (data) {
        console.log(data);
        commit("restore", JSON.parse(data));
      }
    }
  }
});

export default store;
