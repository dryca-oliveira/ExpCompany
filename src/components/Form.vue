<template>
  <v-row id="orcamento" class="flex-column" align="center">
    <v-col
      class="pt-5 pb-0 d-flex flex-column align-center"
      cols="12"
      lg="4"
      xl="3"
    >
      <div class="d-flex justify-center pt-15">
        <v-img
          max-height="64"
          max-width="64"
          src="@/assets/whyInvesting-icon.png"
        ></v-img>
      </div>

      <h2 class="mt-10">Faça um orçamento instantâneo</h2>
      <p>
        Tenha acesso ao seu orçamento <strong>instantaneamente</strong> em
        apenas 4 passos!
      </p>
    </v-col>
    <v-container style="max-width: 1110px">
      <form action="" method="post">
        <v-row>
          <v-col
            id="plataforma"
            cols="12"
            class="d-flex flex-column align-center"
          >
            <h1>1</h1>
            <p>
              <strong> Para quais plataformas</strong> você deseja anunciar?
            </p>

            <ul class="input-checkbox">
              <li>
                <input
                  v-model="form.plataform"
                  type="checkbox"
                  id="Google Ads"
                  value="Google Ads"
                /><label for="Google Ads">Google Ads</label>
              </li>

              <li>
                <input
                  v-model="form.plataform"
                  type="checkbox"
                  id="Instagram"
                  value="Instagram"
                /><label for="Instagram">Instagram</label>
              </li>
              <li>
                <input
                  v-model="form.plataform"
                  type="checkbox"
                  id="Facebook"
                  value="Facebook"
                /><label for="Facebook">Facebook</label>
              </li>
            </ul>
          </v-col>

          <v-col cols="12" class="d-flex flex-column align-center">
            <h1>2</h1>

            <p>Por <strong> quantos dias</strong>?</p>
            <div class="input-quant">
              <input
                class="pr-4"
                type="button"
                id="plus"
                value="-"
                @click="process(-1)"
              />
              <input              
                disabled
                id="quant"
                name="quant"
                class="text"
                size="1"
                type="text"
                value="1"
              />
              <input type="button" id="minus" value="+" @click="process(1)" />
            </div>
          </v-col>
          <v-col id="arte" cols="12" class="d-flex flex-column align-center">
            <h1>3</h1>
            <p>Já <strong> possui as artes</strong> para os anúncios??</p>
            <ul class="input-radio">
              <li>
                <input
                  v-model="form.art"
                  type="radio"
                  value="Sim"
                  name="art"
                  id="yes"
                /><label for="yes">Sim</label>
              </li>
              <li>
                <input
                  v-model="form.art"
                  type="radio"
                  value="Não"
                  name="art"
                  id="no"
                /><label for="no">Não</label>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" class="d-flex flex-column align-center">
            <h1 id="#dados">4</h1>
            <p>Suas informações de <strong> contato</strong> :</p>

            <input
              v-model.trim="form.name"
              type="text"
              name="text"
              id="name"
              placeholder="Name"
            />
            <input
              v-model="form.telephone"
              v-mask="'(##)#####-####'"
              type="tel"
              name="text"
              id="telephone"
              placeholder="Telefone"
            />

            <input
              type="text"
              v-model.trim="form.email"
              name="text"
              id="email"
              placeholder="Email"
            />
            <input
            class="mb-4"
              type="text"
              v-model.trim="form.area"
              name="text"
              id="text"
              placeholder="Área de Atuação*"
            />
          </v-col>
          <v-col cols="12" class="text-center">
            <v-btn
            class="px-sm-8 send "
            dark
            color="#2A28B7"
            @click="send()"
            rounded
          >
            <v-img class="mr-2" src="@/assets/bolt-icon.svg"></v-img> Orçamento
            Instantâneo</v-btn
          >
          </v-col>       
        </v-row>      
      </form>
    </v-container>

    <v-dialog v-model="dialog" width="320">
      <v-card>
        <v-card-title class="title py-4" >
         Atenção
        </v-card-title>
        <v-card-text class="text-h5 py-4"> 
        {{ msg }}
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions >
          <v-spacer></v-spacer>
          <v-btn fab small text  color="#2a28b7" class="font-weight-bold"  @click="redirect()"> ok </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <template>   
      <Budget @reset="reset($event)" :form="form" :dialog2="dialog2" />
    </template>

    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-row>
</template>

<script>
import Budget from "../components/Budget.vue";
export default {
  components: {
    Budget,
  },
  data: () => ({
    form: {
      plataform: [],
      days: 1,
      art: "",
      name: "",
      email: "",
      telephone: "",
      area: "",
    },

    dialog: false,
    dialog2: false,
    msg: "",
    title: "Atenção",
    id: "",
    valid: false,
    overlay: false,
 
  }),
  methods: {
    process(quant) {
      let value = parseInt(document.getElementById("quant").value);
      value += quant;
      if (value < 1) {
        document.getElementById("quant").value = 1;
      } else {
        document.getElementById("quant").value = value;
      }
      this.form.days = value;
    },
    reset() {
      this.form.plataform = [];
      this.form.days = 1;
      document.getElementById("quant").value = 1;
      this.form.art = "";
      (this.form.name = ""), (this.form.telephone = "");
      this.form.email = "";
      this.form.area = "";
      this.dialog2 = false;
      this.valid = false;      
      this.$router.push("/");
      
    },

    redirect() {
      if (this.$route.hash != this.id) {
        this.$router.push(this.id);
      }
      this.dialog = false;
    },
    validate() {   
        this.dialog = true;        
        if (this.form.plataform.length == 0) {
          this.msg = "Selecione pelo menos uma plataforma";
          this.id = "#plataforma";
        } else if (this.form.art == "") {
          this.msg = "Selecione uma opção";
          this.id = "#arte";
        } else if (this.form.name == "") {
          this.msg = "Digite seu nome";
          document.querySelector("#name").focus();
        } else if (this.form.telephone == "") {
          this.msg = "Digite seu telefone";
          document.querySelector("#telephone").focus();
        } else if (
          this.form.email == "" ||
          this.form.email.indexOf("@") == -1 ||
          this.form.email.indexOf(".") == -1
        ) {
          document.querySelector("#email").focus();
          this.msg = "Email não é válido";
        } else {        
          this.valid = true;         
        }   
  
    },
   
    send() {
     this.validate()
      if (this.valid) {
        this.dialog = false;
        this.overlay = true;
        setTimeout(() => {
          this.overlay = false;
          this.dialog2 = true;
         
        }, 3000);
      } 
      
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  color: #2a28b7;
  text-align: center;
}
p {
  margin-top: 17px;
  margin-bottom: 39px;
  width: 351px;
  text-align: center;
  font-size: 18px;
}
form p {
  font-family: "Objectivity";
  font-size: 40px;
  line-height: 41px;
  width: 539px;
  margin-top: 24px;
}
form .col {
  padding: 64px 0px;
  border-top: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
}

ul {
  list-style: none;
}
ul.input-checkbox li {
  display: inline;
  margin-right: 40px;
}

ul.input-checkbox li label {
  display: inline-block;
  border: 2px solid rgba(42, 40, 183, 0.1);
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  color: #2a28b7;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
}
ul.input-checkbox li label::before {
  margin-right: 8px;
  display: inline-block;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 10px;
  text-align: center;
  padding: 0px 2px;
  content: "\f00c";
  color: white;
  border: 2px solid #2a28b7;
  border-radius: 4px;
}

ul.input-checkbox li input[type="checkbox"]:checked + label::before {
  color: white;
  background-color: #2a28b7;
}

ul.input-checkbox li input[type="checkbox"]:checked + label {
  border: 2px solid #2a28b7;
  background: rgba(42, 40, 183, 0.1);
}

ul.input-radio li {
  display: inline;
  margin-right: 22px;
}
ul.input-radio li label {
  display: inline-block;
  border: 2px solid rgba(42, 40, 183, 0.1);
  border-radius: 200px;
  padding: 12px 32px;
  cursor: pointer;
  color: #2a28b7;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
}

ul.input-radio li input[type="radio"]:checked + label {
  color: #fff;
  background: #2a28b7;
}

ul.input-checkbox li input[type="checkbox"],
input[type="radio"] {
  display: absolute;
  position: absolute;
  opacity: 0;
}

.input-quant {
  border: 2px solid #2a28b7;
  display: flex;
  justify-content: center;
  width: 122px;
  height: 38px;
  border-radius: 26px;
}
.input-quant input {
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #2a28b7;
}

input[name="text"] {
  margin-top: 24px;
  border: 2px solid #333333;
  width: 350px;
  height: 50px;
  border-radius: 200px;
  padding-left: 24px;
  text-transform: capitalize;
}
input[id="email"]{
  text-transform: none;
}
input[id="email"]::placeholder{
  text-transform: capitalize;
}

input[name="text"]:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
  color: #2a28b7;
  border: 2px solid #2a28b7;
}
input[name="text"]::placeholder {
  font-size: 18px;
  line-height: 18px;
  color: #bdbdbd;
}
.v-btn.send{
  height: 51px;
  letter-spacing: 0;
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
</style>