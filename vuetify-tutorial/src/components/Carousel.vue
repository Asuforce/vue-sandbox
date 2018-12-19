<template>
  <v-card class="pa-3">
    <v-carousel>
      <v-carousel-item v-for="(carousel,i) in carousels" v-bind:src="carousel.src" :key="i"></v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    carousels: [
      {
        src:
          "https://66.media.tumblr.com/279289931b059bfe6de4b3b0633f98c4/tumblr_pit2eodWug1v1tcqmo1_1280.jpg"
      },
      {
        src:
          "https://66.media.tumblr.com/c34d2c773e8ded4fa3d7736953a3c8e6/tumblr_pirao9wNoF1v1tcqmo1_1280.jpg"
      },
      {
        src:
          "https://66.media.tumblr.com/823cffb47bbfca3a221ea5f2102e1c76/tumblr_pinli3E5na1v1tcqmo1_1280.jpg"
      },
      {
        src:
          "https://66.media.tumblr.com/23b567c992122fb64d2c5ca0278f57a6/tumblr_pip5x7LOWU1v1tcqmo1_1280.jpg"
      },
      {
        src:
          "https://66.media.tumblr.com/484cd33f87a9cf59a071325e6e3883be/tumblr_pilsyn4pE81v1tcqmo1_1280.jpg"
      },
      {
        src:
          "https://66.media.tumblr.com/1dd66117c835787cff0974b9f19faabf/tumblr_picn4e5uCg1v1tcqmo1_1280.jpg"
      }
    ]
  })
};
</script>
