<template>
  <div class="clientes">
    <v-flex xs13 sm7 offset-sm3>
      <v-card>
        <v-text-field
          class="mx-3"
          flat
          label="Buscar"
          prepend-inner-icon="search"
          v-model="buscar"
          clearable
          @click:clear="clearSearch"
        ></v-text-field>
        <v-spacer></v-spacer>
      </v-card>
    </v-flex>
    <v-list three-line>
      <v-subheader>{{ title }}</v-subheader>
      <template v-for="(cliente) in filteredItems">
        <v-list-tile :key="cliente.nome">
          <v-list-tile-content>
            <v-list-tile-title v-html="cliente.nome"></v-list-tile-title>

            <v-list-tile-title v-html="cliente.cpf"></v-list-tile-title>

            <v-list-tile-title v-html="cliente.dataNascimento"></v-list-tile-title>
            <v-list-tile-title v-html="cliente.usurname"></v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-layout>
              <v-flex xs12 class="my-4">
                <v-btn icon ripple @click="inativar(cliente)">
                  <v-icon>not_interested</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-list-tile-action>
        </v-list-tile>
      </template>
    </v-list>
  </div>
</template>

<script>
import HTTPRequestUtil from "@/utils/HTTPRequestUtil";
export default {
  data: () => ({
    selected: [2],
    buscar: "",
    clientes: [],
    title: "Lista de Clientes"
  }),

  mounted: function() {
    this.getClientes();
  },
  methods: {
    inativar(pessoa) {
      alert("Método Inativar clicado!" + JSON.stringify(pessoa));
    },
    toggle(index) {
      const i = this.selected.indexOf(index);

      if (i > -1) {
        this.selected.splice(i, 1);
      } else {
        this.selected.push(index);
      }
    },

    getClientes() {
      HTTPRequestUtil.getClientes().then(clientes => {
        this.clientes = clientes;
      });
    },

    limparDados() {
      this.buscar = "";
    }
  },
  computed: {
    filteredItems() {
      return _.orderBy(
        this.clientes.filter(cliente => {
          if (!this.buscar) return this.clientes;
          return (
            cliente.nome.toLowerCase().includes(this.buscar.toLowerCase()) ||
            cliente.cpf.toLowerCase().includes(this.buscar.toLowerCase()) ||
            cliente.datadeNascimento
              .toLowerCase()
              .includes(this.buscar.toLowerCase()) ||
            cliente.usuario.toLowerCase().includes(this.buscar.toLowerCase())
          );
        })
      );
    }
  }
};
</script>

<style>
</style>
