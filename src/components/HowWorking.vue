<template>
  <v-row class="bg-blue white--text" justify="center">
    <v-col cols="12" class="pb-0 pt-5">
      <div class="d-flex justify-center pt-15 pb-6">
        <v-img
          max-height="64"
          max-width="64"
          src="@/assets/howWorking-icon.png"
        ></v-img>
      </div>
      <h2>Como trabalhamos</h2>
      <p class="subtitle">Nosso processo de trabalho</p>
    </v-col>
    <v-col
      cols="12"
      v-for="(card, index) in cards"
      :key="index"
      class="d-flex flex-column align-center py-0"
    >
      <v-card
        dark
        rounded="0"
        elevation="0"
        class="d-flex flex-column align-center text-center"
        width="540"
      >
        <div class="icon">{{ index + 1 }}</div>
        <v-card-title class="pb-0"> {{ card.title }} </v-card-title>
        <v-card-subtitle class="pa-0 mt-4"
          >{{ card.subtitle }}
        </v-card-subtitle>
      </v-card>
      <v-icon small dark>{{ card.icon }} </v-icon>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    cards: Array,
  },
};
</script>

<style scoped>
.bg-blue {
  background-color: #2a28b7;
}
h1 {
  color: #f2f2f2;
  height: 49px;
}
.subtitle {
  font-size: 18px;
  margin-top: 14px;
  margin-bottom: 39px;
}
.icon {
  font-family: "Subjectivity";
  font-weight: bold;
  font-size: 12px;
  color: #2a28b7;
  background-color: #fff;
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50% !important;
}

.v-card {
  padding-top: 42px;
  padding-bottom: 40px;
}
.theme--light .v-card {
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
}
.v-card__title {
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
}
.v-card__subtitle {
  width: 348px;
  font-size: 16px;
  line-height: 18px;
}
.v-icon {
  margin: 29px 0px;
}
</style>>
