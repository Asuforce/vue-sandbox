<template>
  <p clss="message">Message: {{ msg }}</p>
</template>

<script>
export default {
  data() {
    return { msg: "Hello, world!" };
  }
};
</script>

<style>
.message {
  color: #42b983;
}
</style>
