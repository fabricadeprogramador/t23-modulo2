<template>
  <div class="usuarios">
    <v-container>
      <v-layout align-center justify-space-around row fill-height>
        <v-flex xs5>
          <v-text-field label="Username" :counter="15" :rules="regrasUsername" v-model="usuarioCorrente.username"
            required></v-text-field>
        </v-flex>
        <v-flex xs5>
          <v-text-field label="Senha" :type="'password'" :counter="10" :rules="regrasSenha"
            v-model="usuarioCorrente.senha" required></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center row fill-height>
        <div>
          <v-btn color="success" @click="salvarUsuario()">Salvar</v-btn>
          <v-btn color="error" @click="limparDados()">Limpar</v-btn>
        </div>
      </v-layout>
      <v-layout row>
        <v-flex xs12 class="my-4">
          <v-card>
            <v-list>
              <v-subheader>{{ title }}</v-subheader>
              <template v-for="(usuario) in usuarios">
                <v-list-tile :key="usuario.username">
                  <v-list-tile-content>
                    <v-list-tile-title v-html="usuario.username"></v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-content>
                    <v-list-tile-title v-html="usuario.tipo"></v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-layout>
                      <v-flex xs12 class="my-4">
                        <v-btn icon ripple @click="editarUsuario(usuario)">
                          <v-icon>edit</v-icon>
                        </v-btn>
                      </v-flex>
                      <v-flex xs12 class="my-4">
                        <v-btn icon flat color="red" @click="inativar(usuario)" v-if="usuario.ativo == false">
                          <v-icon>not_interested</v-icon>
                        </v-btn>
                        <v-btn icon flat color="green" @click="inativar(usuario)" v-if="usuario.ativo == true">
                          <v-icon>check</v-icon>
                        </v-btn>
                      </v-flex>
                    </v-layout>
                  </v-list-tile-action>
                </v-list-tile>
              </template>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import HTTPRequestUtil from "@/utils/HTTPRequestUtil";
  export default {
    data: () => ({
      return: {
        show1: false,
        password: "Senha",
        valid: false
      },
      regrasUsername: [
        v => !!v || "Campo Usuário é obrigatório!",
        v =>
        (v && v.length <= 15) ||
        "O nome do Usuario deve ter no máximo 15 caracteres!"
      ],
      regrasSenha: [
        v => !!v || "Campo Senha é obrigatório!",
        v =>
        (v && v.length <= 10) ||
        "O nome do Senha deve ter no máximo 10 caracteres!"
      ],

      usuarioCorrente: {},
      usuarioEdicao: {},
      usuarios: [],
      title: "Lista de Usuarios"
    }),

    mounted: function () {
      this.buscarUsuarios();
    },

    methods: {
      salvarUsuario() {
        if (this.usuarioCorrente._id != undefined) {
          //edição
          HTTPRequestUtil.editarUsuario(this.usuarioCorrente).then(usuario => {
            if (
              usuario == "Erro na edição: Objeto sem ID" ||
              usuario == "Impossivel editar o Usuario"
            ) {
              alert("Erro ao editar Usuário");
            } else {
              this.limparDados();
              this.buscarUsuarios();
              alert("Usuario editado com sucesso!");
            }
          });
        } else {
          //ADição
          this.usuarioCorrente.tipo = "ADMIN"
          this.usuarioCorrente.ativo = true
          HTTPRequestUtil.salvarUsuario(this.usuarioCorrente).then(usuario => {
            if (usuario == "Impossivel adicionar o Usuario") {
              alert("Erro ao adicionar Usuário!");
            } else {
              this.limparDados();
              this.buscarUsuarios();
              alert("Usuario salvo com sucesso!");
            }
          });
        }
      },
      editarUsuario(item) {
        this.usuarioEdicao = item;
        this.usuarioCorrente = {};
        this.usuarioCorrente._id = item._id;
        this.usuarioCorrente.username = item.username;
        this.usuarioCorrente.senha = item.senha;
      },

      buscarUsuarios() {
        HTTPRequestUtil.buscarUsuarios().then(usuarios => {
          this.usuarios = usuarios;
        });
      },

      limparDados() {
        this.usuarioCorrente = {};
      },

      inativar(usuario) {
        usuario.ativo = !usuario.ativo
        this.usuarioCorrente = usuario
        this.salvarUsuario()
      }
    }


  };
</script>

<style>
</style>