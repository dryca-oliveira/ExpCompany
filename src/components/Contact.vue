<template>
  <v-row class="bg-dark" justify="center">
    <v-col cols="12" class="d-flex flex-column align-center pt-5 pb-0">
      <div class="pt-15 pb-6">
        <v-img
          max-height="64"
          max-width="64"
          src="@/assets/contact-icon.png"
        ></v-img>
      </div>
      <h2>Entre em Contato</h2>
      <p class="subtitle mb-0 mt-1">
        Fale conosco pelo nosso WhatsApp ou nos envie um email.
      </p>
      <v-btn href="https://web.whatsapp.com/send?phone=5521985198791" target="__blank" class="px-8 whatsapp mb-6" dark color="#2A28B7" rounded>
        <v-icon class="pr-2" small>fab fa-whatsapp</v-icon>
        WhatsApp
      </v-btn>
      <v-btn href="mailto:gestao@expcompany.com.br" class="px-8 email" dark color="#2A28B7" rounded>
        <v-icon class="pr-2" small>far fa-envelope</v-icon>
        gestao@expcompany.com.br
      </v-btn>
    </v-col>
    <v-container class="contact">
      <v-row>
        <v-col cols="12" class="d-flex flex-column align-center pb-16">
          <div class="pt-15 pb-6">
            <v-img
              max-height="64"
              max-width="64"
              src="@/assets/address-icon.png"
            ></v-img>
          </div>
          <h3>Endereço</h3>
          <p class="subtitle mb-0 mt-6">
            Av. Pres. Wilson, 165 - 5º andar - Sala 9 Centro - Rio de Janeiro -
            RJ
          </p>
        </v-col>
        <v-col
          v-for="(item, index) in setores"
          :key="index"
          class="d-flex flex-column align-center py-16"
          cols="4"
        >
          <div>
            <v-img width="16" height="14" :src="src"></v-img>
          </div>
          <div class="telephone"><a :href="item.href"> {{ item.text }} </a> </div>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    setores: [
      {text: "Setor de Criação  +55 21 97009-4007", href:'tel:+5521970094007'} ,
     {text:"Setor Comercial +55 21 96818-2012", href:'tel:+5521968182012'} ,
     {text:"Setor Financeiro +55 21 97184-9769", href:"tel:+5521971849769" } ,
    ],
    src: require("../assets/telephone-icon.svg"),
  }),
};
</script>

<style  scoped>
.container {
  margin-top: 80px;
  max-width: 1110px;
}
.bg-dark {
  background-color: #0e0e0e;
  color: #fff;
}
.subtitle {
  width: 351px;
  font-size: 18px;
  line-height: 117%;
}
.v-btn {
  text-transform: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  line-height: 72.27%;
  letter-spacing: 0 !important;
}
.whatsapp {
  height: 50px !important;
  margin-top: 61px;
}
.email {
  height: 47px !important;
}
.contact .col {
  border: 1px solid #333333;
}
.telephone  {  
  width: 128px;
  margin-top: 16px;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
}
.telephone a{  
  color: #828282;
}
</style>>
