<template>
    <div class="departamento">
        <v-container fluid>
            <v-layout align-center justify-center fill-height>
                <v-flex xs12>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field v-model="nome" :counter="20" :rules="regrasNome" label="Nome" required></v-text-field>

                        <v-text-field v-model="descricao" label="Descrição" required></v-text-field>

                        <v-btn :disabled="valid == false" color="info" @click="salvar()">
                            Salvar
                        </v-btn>
                    </v-form>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        data: () => ({
            valid: false,
            nome: '',
            regrasNome: [
                v => !!v || 'Campo nome é obrigatório!',
                v => (v && v.length <= 20) || 'O nome do departamento deve ter no máximo 20 caracteres!',
                v => (v && v[0] == v[0].toUpperCase() || 'A primeira letra deve ser maiúscula!')
            ],
            descricao: ''
        }),

        methods: {
            salvar() {
              alert("Salvar Departamento na API!")
            }
        }
    }
</script>

<style>

</style>