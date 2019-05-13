<template>
    <div class="departamento">
        <v-layout align-center justify-center column fill-height v-if="!mostrarForm" class="my-2">
            <v-btn @click="mostrarForm = true" color="info">Novo Departamento</v-btn>
        </v-layout>
        <v-container fluid>
            <v-layout align-center justify-center fill-height v-if="mostrarForm">
                <v-flex xs12>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field v-model="departamentoCorrente.nome" :counter="20" :rules="regrasNome" label="Nome"
                            required></v-text-field>

                        <v-text-field v-model="departamentoCorrente.descricao" label="Descrição" required>
                        </v-text-field>

                        <v-btn :disabled="valid == false" color="info" @click="salvar()">
                            Salvar
                        </v-btn>
                        <v-btn color="error" @click="limparDados()">
                            Limpar
                        </v-btn>
                        <v-btn color="warning" @click="mostrarForm = false">
                            Fechar
                        </v-btn>
                    </v-form>
                </v-flex>
            </v-layout>

            <v-layout row>
                <v-flex xs12 class="my-2">
                    <v-card>
                        <v-list>
                            <v-subheader>
                                {{ title }}
                            </v-subheader>
                            <template v-for="(departamento) in departamentos">

                                <v-list-tile :key="departamento.nome">

                                    <v-list-tile-content>
                                        <v-list-tile-title v-html="departamento.nome"></v-list-tile-title>
                                    </v-list-tile-content>

                                    <v-list-tile-action>
                                        <v-layout>
                                            <v-flex xs12 class="my-4">
                                                <v-btn icon ripple @click="editar(departamento)">
                                                    <v-icon>edit</v-icon>
                                                </v-btn>
                                            </v-flex>
                                            <v-flex xs12 class="my-4">
                                                <v-btn icon flat color="red" v-if="!departamento.ativo"
                                                    @click="inativar(departamento)">
                                                    <v-icon>not_interested</v-icon>
                                                </v-btn>
                                            </v-flex>
                                            <v-flex xs12 class="my-4">
                                                <v-btn icon flat color="green" v-if="departamento.ativo"
                                                    @click="inativar(departamento)">
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
    import HTTPRequestUtil from "@/utils/HTTPRequestUtil"
    export default {
        data: () => ({
            valid: false,
            mostrarForm: false,
            regrasNome: [
                v => !!v || 'Campo nome é obrigatório!',
                v => (v && v.length <= 20) || 'O nome do departamento deve ter no máximo 20 caracteres!',
                v => (v && v[0] == v[0].toUpperCase() || 'A primeira letra deve ser maiúscula!')
            ],
            departamentoCorrente: {},
            departamentoEdicao: {},
            departamentos: [],
            title: 'Lista de Departamentos'
        }),
        // created: function(){
        //     alert("Chamou o created")
        // },
        mounted: function () {
            // `this` aponta para a instância
            this.buscarDepartamentos()
        },
        // updated: function(){
        //     alert("Chamou o update")
        // },
        // destroyed: function(){
        //     alert("Chamou o destroy")
        // },

        methods: {
            salvar() {
                if (this.departamentoCorrente._id != undefined) {
                    //Edição
                    HTTPRequestUtil.editarDepartamento(this.departamentoCorrente).then(departamento => {
                        if (departamento == "Erro na edição: Objeto sem id" || departamento ==
                            "Impossivel editar o departamento") {
                            alert("Erro ao editar departamento!")
                        } else {
                            this.limparDados()
                            this.buscarDepartamentos()
                            alert("Departamento editado com sucesso!")
                        }
                    })
                } else {
                    //Adição
                    alert(this.departamentoCorrente)
                    HTTPRequestUtil.adicionarDepartamento(this.departamentoCorrente).then(departamento => {
                        if (departamento == "Impossivel adicionar o Departamento") {
                            alert("Erro ao adicionar departamento!")
                        } else {
                            this.limparDados()
                            this.buscarDepartamentos()
                            alert("Departamento salvo com sucesso!")
                        }
                    })
                }

            },

            editar(item) {
                this.departamentoEdicao = item
                this.departamentoCorrente = {}
                this.departamentoCorrente._id = item._id
                this.departamentoCorrente.nome = item.nome
                this.departamentoCorrente.descricao = item.descricao
            },

            inativar(item) {
                alert("Método Inativar clicado!" + JSON.stringify(item))
            },

            buscarDepartamentos() {
                HTTPRequestUtil.getDepartamentos()
                    .then(departamentos => {
                        this.departamentos = departamentos
                    })
            },

            limparDados() {
                this.departamentoCorrente = {}
            }
        }
    }
</script>

<style>

</style>