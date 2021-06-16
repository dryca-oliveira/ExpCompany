<template>
  <v-row justify="center">
    <v-col
      class="pt-5 pb-0 d-flex flex-column align-center"
      cols="12"
      sm="8"
      md="6"
      xl="3"
    >
      <div class="d-flex justify-center pt-15">
        <v-img
          max-height="64"
          max-width="64"
          src="@/assets/whyInvesting-icon.png"
        ></v-img>
      </div>

      <h2 class="mt-10 mb-8">{{ title }}</h2>
      <slot></slot>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
h2 {
  color: #2a28b7;
}
p {
  letter-spacing: -0.05em;
  padding-bottom: 77px;
  width: 539px;
  text-align: center;
  margin-bottom: 0;
}
/* mobile */
@media screen and (max-width: 600px) {
  h2 {
    font-size: 20px;
    line-height: 26px;
  }
  p {
    margin: 0px;
  }
}
/* tablet */
@media screen and (min-width: 601px) and (max-width: 960px) {
}
/* leptop */
@media screen and (min-width: 961px) and (max-width: 1264px) {
}
/* desktop */
@media screen and (min-width: 1264px) and (max-width: 1904px) {
}
/* extra large */
@media screen and (min-width: 1905px) {
}
</style>