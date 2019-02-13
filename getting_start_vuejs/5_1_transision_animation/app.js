var PullDownMenu = {
  data: function() {
    return {
      isShown: false,
      name: "Menu",
      items: ["1-1", "1-2", "1-3"]
    };
  },
  template: "#pull-down-menu",
  methods: {
    beforeEnter: function(el) {
      el.style.height = "0px";
      el.style.opacity = "0";
    },
    enter: function(el, done) {
      anime({
        targets: el,
        opacity: 1,
        height: el.scrollHeight + "px",
        duration: 3000,
        complete: done
      });
    },
    leave: function(el, done) {
      anime({
        targets: el,
        opacity: 0,
        height: "0px",
        duration: 300,
        complete: done
      });
    }
  }
};

new Vue({
  el: "#app",
  components: {
    PullDownMenu: PullDownMenu
  }
});
