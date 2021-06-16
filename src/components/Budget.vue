<template>
  <v-overlay :value="dialog2">
    <v-card light width="320">
      <v-card-title class="title">
         Orçamento
        <v-spacer></v-spacer>
        <v-icon @click="reset()" small class="icon">fas fa-times</v-icon>
      </v-card-title>
      <v-card-text>
     
        <v-row>
          <v-col cols="12" class="pb-6 bb">
            <div class="mt-6">
              <h4 class="subtitle">detalhes da campanha</h4>
              <div class="data mt-2 mb-6">Gestão de Anúncios</div>
            </div>
            <div class="mt-4">
              <h4 class="subtitle">detalhes da campanha</h4>
              <v-chip-group mandatory class="pb-1">
                <v-chip
                  :ripple="false"
                  small
                  active-class="data"
                  class="data px-0 mr-0"
                >
                  Plataforma(s):</v-chip
                >
                <v-chip v-for="(plataform, index) in form.plataform"  :key="index" :ripple="false" small class="tags ml-1 mr-0">
               {{plataform}}
                </v-chip>
                
              </v-chip-group>
              <div class="d-flex align-center pb-3">
                <div class="data">Período:</div>
                <v-chip small class="tags"> {{form.days}} dias </v-chip>
              </div>
              <div class="d-flex align-center">
                <div class="data">Artes inclusas:</div>
                <v-chip small class="tags"> {{form.art}} </v-chip>
              </div>
            </div>
          </v-col>
          <v-col cols="12" class="py-6">
            <div class="value mb-3">Valor</div>
            <div class="price mb-3">1.234,56</div>
            <div class="msg mb-3">
              Saldo para veiculação dos anúncios não incluso *
            </div>
            <v-btn href="tel:+5521968182012"  class="px-10 email" dark color="#2A28B7" rounded>             
              <div class="mr-2"><v-img  width="16" src="@/assets/white-telephone-icon.svg"></v-img></div>
               Ligue Agora
            </v-btn>
            <v-btn href="https://web.whatsapp.com/send?phone=5521985198791" target="__blank"  class="px-10 my-4 email" dark color="#2A28B7" rounded>
              <div class="mr-2"> <v-img    width="16"  src="@/assets/whatsapp-icon.svg"></v-img></div>
               Falar pelo Whatsapp
            </v-btn>
            <v-btn href="mailto:gestao@expcompany.com.br" class="px-10 email"  dark color="#2A28B7" rounded>
              <v-icon class="pr-2" small>far fa-envelope</v-icon>
              gestao@expcompany.com.br
            </v-btn>
          </v-col>
        </v-row> 
      
      </v-card-text>
    </v-card>
  </v-overlay>
</template>

<script>
export default {
  props: {
    dialog2: Boolean,
    form: Object,   
  },
  methods:{
    reset() {
      this.$emit('reset')      
    },
  }
 
};
</script>

<style scoped>
.v-card {
  border-radius: 16px;
}
.title {
  font-family: "Subjectivity" !important;
  font-weight: bold !important;
  font-size: 24px !important;
  letter-spacing: 0px !important;
  line-height: 25px;
  background-color: #2a28b7;
  color: #ffffff;
}
.icon {
  background-color: #ffffff;
  color: #2a28b7;
  box-shadow: 0px 2px 8px rgba(33, 32, 156, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.subtitle {
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #2a28b7;
}

.tags {
  color: #2a28b7 !important;
  margin-left: 4px;
  font-weight: bold;
  font-size: 10px !important;
  padding: 4px 8px;
  background: rgba(42, 40, 183, 0.1);
  border: 1px solid rgba(42, 40, 183, 0.2);
  border-radius: 100px;
}
.data,
.data::before {
  font-size: 16px !important;
  color: #0e0e0e !important;
  border: none !important;
  background: #fff !important;
}
.bb {
  border-bottom: 1px solid #e0e0e0;
}
.v-btn {
  text-transform: none;
  font-weight: bold;
  font-size: 12px;
  width: 100%;
  line-height: 72.27%;
  letter-spacing: 0 !important;
  height: 41px !important;
}
.value{
font-weight: bold;
font-size: 12px;
line-height: 12px;
text-transform: uppercase;
color: #8E8E8E;
}
.price{
font-size: 32px;
line-height: 33px;
color: #2A28B7;
}
.msg{
 font-style: italic;
font-weight: bold;
font-size: 12px;
line-height: 14px;
color: #DFBE48;
width: 200px;
}
</style>