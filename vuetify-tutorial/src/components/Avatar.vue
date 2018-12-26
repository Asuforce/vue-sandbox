<template>
  <v-avatar class="move">
    <img class="spin" v-bind:src="icon">
  </v-avatar>
</template>

<script>
export default {
  data() {
    return {
      icon: "https://66.media.tumblr.com/avatar_c2c38a8099b4_128.pnj"
    };
  }
};
</script>

<style>
.spin {
  animation: spin 1.5s linear infinite;
}

.move {
  animation: move 10s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes move {
  0% {
    transform: translateX(0%);
  }
  to {
    transform: translateX(4000%);
  }
}
</style>
