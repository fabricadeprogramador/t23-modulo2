<template>
  <div class="clientes">
    <v-card class="elevation-0 pa-2">

      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Buscar por nome" single-line hide-details>
        </v-text-field>
      </v-card-title>

      <v-data-table :headers="headers" :items="clientes" :search="search">

        <template v-slot:items="props">
          <td>{{ props.item.nome }}</td>
          <td class="text-xs-left">{{ props.item.dataNascimento }}</td>
          <td class="text-xs-left">{{ props.item.cpf }}</td>
        </template>

        <v-alert v-slot:no-results :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>

      </v-data-table>

    </v-card>
  </div>
</template>

<script>
  import HTTPRequestUtil from "@/utils/HTTPRequestUtil";
  export default {
    data() {
      return {
        search: '',
        headers: [{
            text: 'Nome',
            align: 'left',
            sortable: true,
            value: 'nome'
          },
          {
            text: 'Data Nascimento',
            value: 'datanasc'
          },
          {
            text: 'CPF',
            value: 'cpf'
          }
        ],
        clientes: []
      }
    },
    mounted: function () {
      this.buscarClientes()
    },
    methods: {
      buscarClientes() {
        HTTPRequestUtil.getClientes()
          .then(clientes => {
            this.clientes = clientes
          })
      }
    },
  };
</script>

<style>
</style>