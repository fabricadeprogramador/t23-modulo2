<template>
  <div class="compras">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <div class="text-xs-center">
            <v-btn color="grey darken-2" dark @click="escolherComponente(1)">Exibir Todos</v-btn>
            <v-btn color="grey darken-2" dark @click="escolherComponente(2)">Buscar por Cliente</v-btn>
            <v-btn color="grey darken-2" dark @click="escolherComponente(3)">Buscar por Produto</v-btn>
            <v-btn color="grey darken-2" dark @click="escolherComponente(4)">Buscar por Departamento</v-btn>
          </div>
        </v-flex>
      </v-layout>

      <!-- Componente de Exibir Todos -->
      <v-layout row wrap v-if="chaveExibicao == 1">
        <v-flex xs12>
          <div class="text-xs-center">
            <v-card class="elevation-0 mt-3">
              <v-card-title>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="search"
                  label="Buscar"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>

              <v-data-table :headers="headers" :items="compras" :search="search">
                <template v-slot:items="props">
                  <td class="text-xs-left">{{ props.item.valorTotal }}</td>
                  <td class="text-xs-left">{{ props.item.data }}</td>
                  <td class="text-xs-left">{{ props.item.pagamento }}</td>
                </template>

                <v-alert
                  v-slot:no-results
                  :value="true"
                  color="error"
                  icon="warning"
                >Your search for "{{ search }}" found no results.</v-alert>
              </v-data-table>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
      <!-- Componente de Exibir Clientes -->
      <v-layout row wrap v-if="chaveExibicao == 2">
        <v-flex xs12>
          <v-layout align-center justify-center fill-height>
            <v-flex xs12 sm5 d-flex>
              <v-select
                :items="clientes"
                item-text="nome"
                label="Clientes"
                outline
                return-object
                v-model="clienteSelecionado"
                item-value="clienteSelecionado"
              ></v-select>
            </v-flex>
            <v-flex>
              <v-btn color="grey darken-2" dark @click="buscarPorCliente()">Buscar</v-btn>
            </v-flex>
          </v-layout>
          <div class="text-xs-center">
            <v-card class="elevation-0 mt-3">
              <v-card-title>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="search"
                  label="Buscar"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>

              <v-data-table :headers="headers" :items="compras" :search="search">
                <template v-slot:items="props">
                  <td class="text-xs-left">{{ props.item.valorTotal }}</td>
                  <td class="text-xs-left">{{ props.item.data }}</td>
                  <td class="text-xs-left">{{ props.item.pagamento }}</td>
                </template>

                <v-alert
                  v-slot:no-results
                  :value="true"
                  color="error"
                  icon="warning"
                >Your search for "{{ search }}" found no results.</v-alert>
              </v-data-table>
            </v-card>
          </div>
        </v-flex>
      </v-layout>

      <v-layout row wrap v-if="chaveExibicao == 3">
        <v-flex xs12>
          <div class="text-xs-center">
            <v-flex xs12>
              <v-layout align-center justify-center fill-height>
                <v-flex xs12 sm5 d-flex>
                  <v-select
                    :items="produtos"
                    item-text="descricao"
                    label="Produtos"
                    outline
                    return-object
                    v-model="produtoSelecionado"
                    item-value="produtoSelecionado"
                  ></v-select>
                </v-flex>
                <v-flex>
                  <v-btn color="grey darken-2" dark @click="buscarProdutos()">Buscar</v-btn>
                </v-flex>
              </v-layout>
              <div class="text-xs-center">
                <v-card class="elevation-0 mt-3">
                  <v-card-title>
                    <v-spacer></v-spacer>
                    <v-text-field
                      v-model="search"
                      append-icon="search"
                      label="Buscar"
                      single-line
                      hide-details
                    ></v-text-field>
                  </v-card-title>

                  <v-data-table :headers="headers" :items="compras" :search="search">
                    <template v-slot:items="props">
                      <td class="text-xs-left">{{ props.item.valorTotal }}</td>
                      <td class="text-xs-left">{{ props.item.data }}</td>
                      <td class="text-xs-left">{{ props.item.pagamento }}</td>
                    </template>

                    <v-alert
                      v-slot:no-results
                      :value="true"
                      color="error"
                      icon="warning"
                    >Your search for "{{ search }}" found no results.</v-alert>
                  </v-data-table>
                </v-card>
              </div>
            </v-flex>
          </div>
        </v-flex>
      </v-layout>

      <v-layout row wrap v-if="chaveExibicao == 4">
        <v-flex xs12>
          <div class="text-xs-center">COMPONENTE 4</div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import HTTPRequestUtil from "@/utils/HTTPRequestUtil";
export default {
  data() {
    return {
      chaveExibicao: 0,
      search: "",
      headers: [
        {
          text: "Valor Total",
          align: "left",
          sortable: true,
          value: "valorTotal"
        },
        {
          text: "Data",
          value: "data"
        },
        {
          text: "Forma de Pagamento",
          value: "pagamento"
        }
      ],
      compras: [],
      clientes: [],
      clienteSelecionado: {},
      produtos: [],

      produtoSelecionado: {}
    };
    console.log(produtos);
  },
  mounted() {
    this.buscarCompras();
    this.buscarClientes();
  },
  methods: {
    escolherComponente(valor) {
      if (valor == 2) {
        this.buscarPorClientes();
      }
      this.chaveExibicao = valor;
    },
    escolherComponente(valor) {
      if (valor == 3) {
        this.buscarProdutos();
      }
      this.chaveExibicao = valor;
    },
    buscarCompras() {
      HTTPRequestUtil.getCompras().then(compras => {
        this.compras = compras;
      });
    },
    buscarClientes() {
      HTTPRequestUtil.getClientes().then(clientes => {
        this.clientes = clientes;
      });
    },
    buscarProdutos() {
      HTTPRequestUtil.getProdutos().then(produtos => {
        this.produtos = produtos;
      });
    },
    buscarPorCliente(){
      HTTPRequestUtil.getComprasPorCliente(this.clienteSelecionado._id).then(compras =>{
        
      })
    }
  }
};
</script>

<style>
</style>