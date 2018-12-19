<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img class="white--text" height="200px" v-bind:src="main">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Asuforce Garally</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">November 11</span>
            <br>
            <span>Basta</span>
            <br>
            <span>Bus terminal at Shinjuku South Exit.</span>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    main:
      "https://66.media.tumblr.com/5c13dbb6b5275eedce4cd21a762b31de/tumblr_pi4twh9GNl1v1tcqmo1_1280.jpg"
  }),
};
</script>
