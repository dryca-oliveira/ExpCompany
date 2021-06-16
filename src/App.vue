<template>
  <v-app>
    <Appbar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Appbar from "./components/Appbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Appbar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style >
@font-face {
  font-family: "Subjectivity";
  src: local(Subjectivity), url("./fonts/SubjectivitySerif-Bold.otf");
  font-weight: bold;
}

@font-face {
  font-family: "Objectivity";
  src: local(Objectivity), url("./fonts/Objectivity-Regular.otf");
}

@font-face {
  font-family: "Objectivity";
  src: local(Objectivity), url("./fonts/Objectivity-Bold.otf");
  font-weight: bold;
}

.v-application {
  font-family: "Objectivity" !important;
}
h1 {
  font-family: "Subjectivity" !important;
  font-weight: bold;
  font-size: 64px;
  line-height: 66px;
}
h2 {
  font-family: "Subjectivity";
  font-weight: bold;
  font-size: 48px;
  line-height: 49px;
  text-align: center;
  align-self: stretch;
}

h3 {
  font-family: "Subjectivity";
  font-weight: bold;
  font-size: 36px;
  line-height: 28px;
  text-align: center;
}
p {
  font-size: 16px;
  line-height: 18px;
  text-align: center;
}
a {
  text-decoration: none;
  
}
</style>
