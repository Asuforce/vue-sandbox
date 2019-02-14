var Sharable = {
  data() {
    return {
      _isProcessing: false
    };
  },
  created() {
    console.log("Call Sharable mixin");
  },
  methods: {
    share() {
      if (this._isProcessing) {
        return;
      }
      if (!window.confirm("Do you want to share?")) {
        return;
      }
      this._isProcessing = true;
      setTimeout(() => {
        window.alert("Shared");
        this._isProcessing = false;
      }, 300);
    }
  }
};

var IconShareButton = {
  mixins: [Sharable],
  created() {
    console.log("Call IconShareButton mixin");
  },
  template: `<button @click="share"><i class="fas fa-share-square"></i></button>`
};

var TextShareButton = {
  mixins: [Sharable],
  created() {
    console.log("Call TextShareButton mixin");
  },
  template: `<button @click="share">{{ buttonLabel }}</button>`,
  data() {
    return {
      buttonLabel: "To share"
    };
  }
};

new Vue({
  el: "#app",
  components: {
    IconShareButton,
    TextShareButton
  }
});
