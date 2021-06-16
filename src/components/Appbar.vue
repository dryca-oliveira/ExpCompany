<template>
  <v-app-bar app color="#2A28B7" dark>
    <v-container style="max-width: 1110px">
      <v-row align="center">
        <v-col class="pa-0" cols="5" md="7" lg="7">
          <a href="/">
            <v-img
              alt="Logo"
              contain
              src="@/assets/ExpCompany.svg"
              height="24"
              max-width="113px"
            />
          </a>
        </v-col>

        <v-col class="pa-0">
          <nav>
            <ul class="d-none d-sm-flex justify-space-between">
              <li><a href="/">Página inicial</a></li>
              <li><a href=""> Quem somos</a></li>
              <li @click="show = !show" style="position: relative">
                <a>Serviços </a
                ><v-icon class="pl-3" x-small>
                  {{ show ? "fas fa-chevron-up" : "fas fa-chevron-down" }}
                </v-icon>
                <template>
                  <transition name="fadeInDown">
                    <menu v-if="show" class="menudrop">
                      <ul class="pl-0">
                        <li
                          class="px-1"
                          v-for="(item, index) in items"
                          :key="index"
                        >
                          <a :href="href"> {{ item }} </a>
                        </li>
                      </ul>
                    </menu>
                  </transition>
                </template>
              </li>
              <li><a href="">Contato</a></li>
            </ul>
          </nav>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    show: false,
    href: "/arte-para-rede-social",
    items: [
      "Artes para redes sociais",
      "Gestão de Anúncios",
      "Registro de Marcas",
    ],
  }),
};
</script>

<style scoped>
.fadeInDown-enter-active,
.fadeInDown-leave-active {
  transition: all 0.5s ease;
}
.fadeInDown-enter,
.fadeInDown-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
nav ul li {
  height: 24px;
  list-style: none;
}

.v-application a {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
}
.menudrop {
  margin-top: 30px;
  background-image: url("../assets/bg-menudrop.svg");
  background-size: contain;
  position: absolute;
  width: 234px;
  left: -60%;
  display: flex;
  justify-content: center;
  text-align: center;
}
.menudrop ul {
  width: 225px;
  height: 193px;
  margin-top: 20px;
}
.menudrop li {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
}
.menudrop li:not(:last-child) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.menudrop a:hover {
  opacity: 0.5;
}
</style>