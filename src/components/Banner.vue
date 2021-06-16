<template>
  <v-img
    class="d-flex align-center text-center bg-dark"
    :src="info.banner"
    :alt="info.alt"
    :lazy-src="info.banner"
  >
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
      </v-row>
    </template>
    <v-container class="white--text">
      <v-row justify="center" align="center">
        <v-col class="d-flex flex-column align-center" cols="6" xl="4">
          <v-img
            class="banner-icon"
            contain
            max-width="62"
            :alt="info.alt"
            :src="info.icon"
          >
          </v-img>
          <h1 class="pt-3 pt-sm-10">{{ info.title }}</h1>
          <v-btn
            class="px-sm-8 mt-sm-10"
            dark
            color="#2A28B7"
            to="#orcamento"
            rounded
          >
            <v-img class="mr-2" src="@/assets/bolt-icon.svg"></v-img> Orçamento
            Instantâneo</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
export default {
  props: {
    info: Object,
  },
};
</script>

<style scoped>
.bg-dark {
  background-color: #000;
  opacity: 0.99;
}
.banner-icon {
  width: 62px;
  height: 64px;
}
.v-btn {
  font-weight: bold;
  font-size: 15px;
  height: 51px !important;
  line-height: 72.27%;
  letter-spacing: 0;
}
</style>