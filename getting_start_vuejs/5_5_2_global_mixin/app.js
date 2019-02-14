Vue.mixin({
  data() {
    return {
      loggedInUser: null
    };
  },
  created() {
    var auth = this.$options.auth;
    this.loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (auth && !this.loggedInUser) {
      window.alert("This page requires login");
    }
  }
});

var LoginRequiredPage = {
  auth: true,
  template: `
    <div>
      <p v-if="!loggedInUser">
        This page requires login
      </p>
      <p v-else>
        You are logged in as {{ loggedInUser.name }}
      </p>
    </div>
  `
};

new Vue({
  el: "#app",
  components: {
    LoginRequiredPage
  }
});
