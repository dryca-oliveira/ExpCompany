<template>
  <v-container fluid>
    <v-row>
      <v-col class="pa-0">
        <Banner :info="bannerInfo" />
      </v-col>
    </v-row>
    <WhyInvesting :title="investingTitle">
      <p class="text-center">
        Desenvolvemos uma forma <strong>rápida</strong>, prática e com
        <strong>baixo custo</strong> para você postar um material de
        <strong>qualidade</strong>
        em suas redes sociais.
      </p>
    </WhyInvesting>

    <HowWorking :cards="cards"> </HowWorking>

    <Contact />
  </v-container>
</template>

<script>
import Banner from "../components/Banner.vue";
import WhyInvesting from "../components/WhyInvesting.vue";
import HowWorking from "../components/HowWorking.vue";
import Contact from "../components/Contact.vue";
export default {
  name: "SocialMedia",
  components: {
    Banner,
    WhyInvesting,
    HowWorking,
    Contact,
  },
  data: () => ({
    bannerInfo: {
      title: "Artes para Redes Sociais",
      alt: "Artes para Redes Sociais",
      banner: require("../assets/banner-rede-social.png"),
      icon: require("../assets/like-icon.svg"),
    },
    investingTitle: "Por que investir em artes profissionais conosco?",
    cards: [
      {
        title: "BRIEFING E DEFINIÇÃO DE TEMAS",
        subtitle: "Definimos todos os temas das artes junto com você.",
        icon: "fas fa-chevron-down",
      },
      {
        title: "PRAZO",
        subtitle: "No prazo de 7 dias você recebe suas artes.",
        icon: "fas fa-chevron-down",
      },
      {
        title: "APROVAÇÃO",
        subtitle: "Se você aprová-las, pode começar a postar!",
        icon: "fas fa-chevron-down",
      },
      {
        title: "Alterações",
        subtitle: "Caso contrário, corrigimos e voltamos a enviar :)",
      },
    ],
  }),
};
</script>