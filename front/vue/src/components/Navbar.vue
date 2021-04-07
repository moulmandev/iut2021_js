<template>
  <v-app-bar app color="#131921" dark>
      <div class="d-flex align-center">
        <v-img v-on:click="goToMenu"
          alt="Amazon logo"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn v-on:click="loginBtn"
      depressed
      color="#131921"
      >
      {{ textBtn }}
      </v-btn>

      <v-btn
        class="mx-2"
        fab
        color="#131921"
        >
        <v-icon dark>
            fa-shopping-cart
        </v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
import router from '../router'
export default {
  data(){
    return {
      textBtn: ( sessionStorage.getItem('isConnected') == false )? "Déconnexion" : "Connexion",
    }
  },
  methods: {
    loginBtn: function (){
      if (sessionStorage.getItem('isConnected') == true){
        sessionStorage.setItem('isConnected', false);
      }
      router.push({name: "Login"});
    },
    goToMenu: function (){
      router.push({name: "Home"});
    },
  }
}
</script>