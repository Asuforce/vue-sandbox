<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>Asuforce gallery</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <Message/>
        <Gallary/>
        <Carousel/>
        <router-view></router-view>
      </v-container>
    </main>
    <v-footer>Design by Asuforce.</v-footer>
  </v-app>
</template>

<script>
import Gallary from "./components/Gallary";
import Carousel from "./components/Carousel";
import Message from "./components/Message";

export default {
  name: "App",
  components: {
    Gallary,
    Carousel,
    Message
  },
  data() {
    return {
      //
    };
  }
};
</script>
