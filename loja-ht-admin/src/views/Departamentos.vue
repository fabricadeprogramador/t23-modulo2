<template>
    <div class="departamento">
        <v-container fluid>
            <v-layout align-center justify-center fill-height>
                <v-flex xs12>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field v-model="departamentoCorrente.nome" :counter="20" :rules="regrasNome" label="Nome" required></v-text-field>

                        <v-text-field v-model="departamentoCorrente.descricao" label="Descrição" required></v-text-field>

                        <v-btn :disabled="valid == false" color="info" @click="salvar()">
                            Salvar
                        </v-btn>
                    </v-form>
                </v-flex>
            </v-layout>

            <v-layout row>
                <v-flex xs12 class="my-4">
                    <v-card>
                        <!-- <v-toolbar color="cyan" dark>
                            <v-toolbar-side-icon></v-toolbar-side-icon>

                            <v-toolbar-title>Inbox</v-toolbar-title>

                            <v-spacer></v-spacer>

                            <v-btn icon>
                                <v-icon>search</v-icon>
                            </v-btn>
                        </v-toolbar> -->

                        <v-list>
                            <v-subheader>
                                {{ title }}
                            </v-subheader>
                            <template v-for="(departamento) in departamentos">


                                <!-- <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider> -->

                                <v-list-tile :key="departamento.nome">

                                    <v-list-tile-content>
                                        <v-list-tile-title v-html="departamento.nome"></v-list-tile-title>
                                    </v-list-tile-content>

                                    <v-list-tile-action>
                                        <v-btn icon ripple @click="editar(departamento)">
                                            <v-icon>edit</v-icon>
                                        </v-btn>
                                        <v-btn icon ripple @click="inativar(departamento)">
                                            <v-icon>not_interested</v-icon>
                                        </v-btn>
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
            regrasNome: [
                v => !!v || 'Campo nome é obrigatório!',
                v => (v && v.length <= 20) || 'O nome do departamento deve ter no máximo 20 caracteres!',
                v => (v && v[0] == v[0].toUpperCase() || 'A primeira letra deve ser maiúscula!')
            ],
            departamentoCorrente: {},
            departamentos: [],
            title: 'Lista de Departamentos',
            items: [
                {
                    title: 'Brunch this weekend?'
                },
                {
                    title: 'Summer BBQ'
                },
                {
                    title: 'Oui oui'
                }
            ]
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
                // let departamento = {}
                // departamento.nome = this.nome
                // departamento.descricao = this.descricao

              
                if(this.departamentoCorrente._id != undefined){
                    //TODO: Fazer Requisição PUT para /departamentos
                    alert("EDIÇÃO")
                } else{
                    //TODO: Fazer requisição POST para /departamentos
                    alert("ADIÇÃO")
                }
                

                // HTTPRequestUtil.getDepartamentos()
                //     .then(departamentos => {
                //         this.departamentos = departamentos
                //     })
                // alert(JSON.stringify(this.departamentos))
            },

            editar(item) {
                this.departamentoCorrente = item
                alert("Método Editar clicado!" + JSON.stringify(item))
            },
            inativar(item) {
                alert("Método Inativar clicado!" + JSON.stringify(item))
            },

            buscarDepartamentos(){
                HTTPRequestUtil.getDepartamentos()
                .then(departamentos => {
                    this.departamentos = departamentos
                })
            }
        }
    }
</script>

<style>

</style>