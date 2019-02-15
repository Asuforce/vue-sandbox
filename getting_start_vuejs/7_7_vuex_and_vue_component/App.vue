<template>
  <div>
    <p>{{ value }}</p>
    <button v-on:click="increment(1)">+1</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    double() {
      return this.count * 2;
    },
    ...mapState({
      value: "count"
    })
  },
  methods: mapMutations(["increment"])
};
</script>

