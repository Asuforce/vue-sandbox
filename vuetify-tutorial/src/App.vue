<template>
  <v-app dark>
    <v-toolbar>
      <Avatar/>
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
import Avatar from "./components/Avatar";
import Carousel from "./components/Carousel";
import Gallary from "./components/Gallary";
import Message from "./components/Message";

export default {
  name: "App",
  components: {
    Avatar,
    Carousel,
    Gallary,
    Message
  }
};
</script>
