<template>
    <div class="produtos">
        <v-container grid-list-md text-xs-center fluid>
            <!-- inicio dos campos -->

            <!-- inicio da primeira linha com os campos descrição e valor -->
            <v-layout row wrap align-space-between justify-center>
                <v-flex xs5 sm5>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field label="Descrição" v-model="produtoCorrente.descricao" :counter="20"
                            :rules="regrasDescricao" required="">

                        </v-text-field>
                    </v-form>
                </v-flex>

                <v-flex xs5 sm5>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field type="number" label="Valor" v-model="produtoCorrente.valor" :counter="20"
                            required="">

                        </v-text-field>
                    </v-form>
                </v-flex>

            </v-layout>


            <!-- segunda linha com os campos Quantidade e Marca -->
            <v-layout align-center justify-center fill-height>
                <v-flex xs5>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field type="number" label="Quantidade" v-model="produtoCorrente.qtdeDisponivel"
                            :counter="20" required="">

                        </v-text-field>
                    </v-form>
                </v-flex>

                <v-flex xs5>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field label="Marca" v-model="produtoCorrente.marca" :counter="20" :rules="regrasMarca"
                            required="">

                        </v-text-field>
                    </v-form>
                </v-flex>
            </v-layout>

            <v-layout align-center justify-center fill-height>
                <v-flex xs12 sm5 d-flex class="mt-4">
                    <v-text-field label="URL da imagem do Produto" v-model="produtoCorrente.imagem">
                    
                    </v-text-field>
                </v-flex>
            </v-layout>



            <!-- Lista de departamentos -->
            <v-layout align-center justify-center fill-height>
                <v-flex xs12 sm5 d-flex class="mt-4">
                    <v-select :items="departamentos" item-text="nome" label="Departamentos" outline return-object
                        v-model="produtoCorrente.departamento" item-value="produtoCorrente.departamento">
                    </v-select>
                </v-flex>
            </v-layout>
            <!-- /Lista de departamentos -->


            <!-- botões -->
            <v-btn :disabled="valid == false" color="info" @click="salvar()">
                Salvar
            </v-btn>

            <v-btn color="error" @click="limparDados()">
                Limpar
            </v-btn>
            <!-- /botões -->

            <!-- tela de apresentação de todos os produtos cadastrados -->
            <template>

                <v-data-table :headers="cabecalho" :items="listaDosProdutos" class="elevation-1">
                    <template v-slot:items="props">
                        <td>{{ props.item.marca }}</td>
                        <td class="text-xs-left">{{props.item.descricao}}</td>
                        <td class="text-xs-left">{{props.item.valor}}</td>
                        <td class="text-xs-left">{{props.item.qtdeDisponivel}}</td>
                        <td class="text-xs-left">{{props.item.imagem}}</td>
                        <td class="text-xs-center">
                            <v-layout>
                                <v-flex xs6>
                                    <v-btn icon ripple @click="editar(props.item)">
                                        <v-icon>edit</v-icon>
                                    </v-btn>
                                </v-flex>
                                <v-flex xs6>
                                    <v-btn icon ripple @click="inativar(props.item)">
                                        <v-icon>not_interested</v-icon>
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </td>
                    </template>
                </v-data-table>
            </template>
            <!-- tela de apresentação de todos os produtos cadastrados -->

            <!-- fim dos campos -->
        </v-container>
    </div>
</template>


<script>
    import HTTPRequestUtil from "@/utils/HTTPRequestUtil"

    export default {

        data: () => ({
            valid: false,
            regrasDescricao: [
                v => !!v || 'Campo descrição é obrigatório!',
                v => (v && v.length <= 40) || 'A descrição do produto deve ter no máximo 40 caracteres!',
                v => (v && v[0] == v[0].toUpperCase() || 'A primeira letra deve ser maiúscula!')

            ],

            regrasMarca: [
                v => !!v || 'Campo Marca é obrigatório!',
                v => (v && v.length <= 40) || 'A marca do produto deve ter no máximo 40 caracteres!',
                v => (v && v[0] == v[0].toUpperCase() || 'A primeira letra deve ser maiúscula!')

            ],

            departamentos: [],
            produtoCorrente: {},
            produtoEdicao: {},
            produtos: [],
            title: 'Lista de Produtos',

            cabecalho: [{
                    text: 'Marca',
                    align: 'left',
                    sortable: false,
                    value: 'marca'
                },
                {
                    text: 'Descrição',
                    align: 'left',
                    sortable: false,
                    value: 'descricao'
                },
                {
                    text: 'Valor',
                    align: 'left',
                    sortable: false,
                    value: 'valor'
                },
                {
                    text: 'Qtde Disponível',
                    align: 'left',
                    sortable: false,
                    value: 'qtdeDisponivel'
                },
                {
                    text: 'URL da Imagem',
                    align: 'left',
                    sortable: false,
                    value: 'imagem'
                },
                {
                    text: 'Ações',
                    sortable: false,
                    align: 'center',
                }

            ],

            listaDosProdutos: []

        }),

        mounted: function () {
            //chamar o método de buscar produtos
            this.buscarProdutos()
            this.buscarDepartamentos()
        },


        methods: {
            salvar() {
                if (this.produtoCorrente._id != undefined) {

                    //Edição
                    HTTPRequestUtil.editarProduto(this.produtoCorrente).then(produto => {
                        alert("Resposta do SERVIDOR: " + JSON.stringify(produto))
                        if (produto == "Erro ao editar o Produto!") {
                            alert("Erro ao editar produto!")
                        } else {
                            this.limparDados()
                            this.buscarProdutos()
                            alert("Produto editado com sucesso!")
                        }
                    })
                } else {

                    //Adição
                    HTTPRequestUtil.adicionarProduto(this.produtoCorrente).then(produto => {
                        if (produto == "Erro ao adicionar o Produto!") {
                            alert("Erro ao adicionar Produto!")

                        } else {
                            this.limparDados()
                            this.buscarProdutos()
                            alert("Produto salvo com sucesso!")
                        }
                    })
                }
            },

            editar(produto) {
                alert("PRODUTO PARA EDIÇÂO: " + JSON.stringify(produto))
                this.produtoEdicao = produto
                this.produtoCorrente = {}
                this.produtoCorrente._id = produto._id
                this.produtoCorrente.nome = produto.nome
                this.produtoCorrente.descricao = produto.descricao
                this.produtoCorrente.marca = produto.marca
                this.produtoCorrente.qtdeDisponivel = produto.qtdeDisponivel
                this.produtoCorrente.valor = produto.valor
                this.produtoCorrente.departamento = produto.departamento
            },

            inativar(item) {
                alert("Método Inativar clicado!" + JSON.stringify(item))
            },

            buscarProdutos() {
                HTTPRequestUtil.getProdutos()
                    .then(produtos => {
                        this.listaDosProdutos = produtos
                    })

            },

            limparDados() {
                this.produtoCorrente = {}
            },

            buscarDepartamentos() {
                HTTPRequestUtil.getDepartamentos()
                    .then(departamentos => {
                        this.departamentos = departamentos
                    })
            },

        }
    }
</script>






<style>

</style>