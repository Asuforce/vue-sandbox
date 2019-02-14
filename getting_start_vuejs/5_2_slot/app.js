var TodoList = {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  template: "#todo-list"
};

new Vue({
  el: "#app",
  data: function() {
    return {
      todos: [
        { id: 1, text: "C++", isCompleted: true },
        { id: 2, text: "JavaScript", isCompleted: false },
        { id: 3, text: "Java", isCompleted: true },
        { id: 4, text: "Perl", isCompleted: false }
      ]
    };
  },
  components: {
    TodoList: TodoList
  }
});
