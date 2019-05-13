<template>
  <v-app>
    <Login v-if="isLogged == false" />
    <NavBar v-if="isLogged == true" />
    <v-content v-if="isLogged == true">
      <router-view></router-view>
    </v-content>
    <v-footer class="pa-2 primary white--text" v-if="isLogged == true">
      <v-spacer></v-spacer>
      <div>Fábrica de Programador - T23 &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
  import NavBar from '@/components/NavBar'
  import Login from '@/components/Login'

  export default {
    name: 'App',
    components: {
      NavBar,
      Login
    },
    data() {
      return {
        isLogged: false
      }
    },

    mounted() {
      this.verificarLogin()
    },
    methods: {
      verificarLogin() {
        let usuarioStr = localStorage.getItem("usuarioLogado")

        if (usuarioStr != "") {
          let usuarioLogado = JSON.parse(usuarioStr)

          if (usuarioLogado == null) {
            //USUARIO NÂO EXISTENTE EM LOCALSTORAGE
            this.isLogged = false
          } else {
            this.isLogged = true
          }
        } else {
          this.isLogged = false
        }

      }
    },
  }
</script>