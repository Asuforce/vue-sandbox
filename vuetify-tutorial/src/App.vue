<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>Asuforce gallery</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <Gallary/>
        <router-view></router-view>
      </v-container>
    </main>
    <v-footer>Design by Asuforce.</v-footer>
  </v-app>
</template>

<script>
import Gallary from "./components/Gallary";

export default {
  name: "App",
  components: {
    Gallary
  },
  data() {
    return {
      //
    };
  }
};
</script>
