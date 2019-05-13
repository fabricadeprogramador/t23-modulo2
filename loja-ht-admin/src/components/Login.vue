<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="grey darken-2 white--text-">
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tooltip bottom></v-tooltip>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="usuario.username">
                </v-text-field>
                <v-text-field prepend-icon="lock" name="senha" label="Senha" id="password" type="password"
                  v-model="usuario.senha"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="autenticar()">Entrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  import HTTPRequest from '@/utils/HTTPRequestUtil'

  export default {
    data() {
      return {
        usuario: {},
        usuarioRetornado: [],
        reload: 0
      };
    },
    mounted: function () {},

    methods: {
      // trocarDeRota() {
      //   this.$router.push("/");
      // }
      autenticar() {

        HTTPRequest.autenticar(this.usuario)
          .then(usuario => {

            if (usuario == "Usuário inativado!") {
              alert("Usuário Inativado pelo Admin!!")
            } else if (usuario == "Usuário não informado!") {
              alert("Usuário não informado!")
            } else if(usuario == "Usuário ou senha inválidos!"){
              alert("Usuário ou senha inválidos!")
            } else {
              this.usuarioRetornado = usuario

              if (this.usuarioRetornado.length == 0) {
                alert("Usuário ou senha inválido!")
              } else {
                let userStr = JSON.stringify(this.usuarioRetornado[0])
                localStorage.setItem("usuarioLogado", userStr)
                alert("Login Efetuado com sucesso!")
                location.reload()
              }
            }
          })
      }
    }
  };
</script>

<style>
</style>