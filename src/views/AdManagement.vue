<template>
  <v-container fluid>
    <v-row>
      <v-col class="pa-0">
        <Banner :info="bannerInfo" />
      </v-col>
    </v-row>
    <WhyInvesting :title="investingTitle">
      <p class="text-center">
        Você já tem o produto/serviço ideal e
        <strong>quer mostrar ao público</strong> ? Através da nossa gestão de
        anúncios, tornamos seu negócio <strong>conhecido</strong> , gerando
        leads qualificados, tráfego no seu site/perfil e, consequentemente, mais
        <strong>receita.</strong>
      </p>
    </WhyInvesting>

    <HowWorking :cards="cards"> </HowWorking>

    <Form> </Form>

    <Contact />
  </v-container>
</template>

<script>
import Banner from "../components/Banner.vue";
import WhyInvesting from "../components/WhyInvesting.vue";
import HowWorking from "../components/HowWorking.vue";
import Form from "../components/Form.vue";
import Contact from "../components/Contact.vue";
export default {
  name: "AdManagement",
  components: {
    Banner,
    WhyInvesting,
    HowWorking,
    Form,
    Contact,
  },
  data: () => ({
    bannerInfo: {
      title: "Gestão de Anúnicos",
      alt: "Gestão de Anuncios",
      banner: require("../assets/banner-anuncios.png"),
      icon: require("../assets/megaphone-icon.svg"),
    },
    investingTitle: "Por que investir em anúncios conosco?",
    cards: [
      {
        title: "Definição de público alvo ",
        subtitle: "Através de uma curta reunião, definimos seu público alvo.",
        icon: "fas fa-chevron-down",
      },
      {
        title: "Desenvolvimento de Estratégia",
        subtitle: "Traçamos a estratégia ideal para o seu objetivo.",
        icon: "fas fa-chevron-down",
      },
      {
        title: "No ar",
        subtitle:
          "Começamos a veicular seus anúncios dentro do perfil que definimos",
        icon: "fas fa-chevron-down",
      },
      {
        title: "Acompanhamento",
        subtitle:
          "Cuidamos de perto! Realizamos acompanhamento diário para fazer os ajustes necessários.",
        icon: "fas fa-chevron-down",
      },
      {
        title: "Leads!",
        subtitle: "Seus leads começam a aparecer :)",
      },
    ],
  }),
};
</script>
