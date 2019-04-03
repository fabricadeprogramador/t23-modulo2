const API_URL = "https://loja-ht-api-t23.herokuapp.com/"
import axios from 'axios'

export default{
    // DEPARTAMENTOS
    ////////////////////////////////
    async getDepartamentos(){
        return axios.get(API_URL + 'departamentos')
        .then(response => response.data)
    },

    async adicionarDepartamento(departamento){
        return axios.post(API_URL + 'departamentos', departamento)
        .then(response => response.data)
    },

    async editarDepartamento(departamento){
        return axios.put(API_URL + 'departamentos', departamento)
        .then(response => response.data)
    },
    
    // PRODUTOS
    ////////////////////////////////
    async getProdutos(){
        return axios.get(API_URL + 'produtos')
        .then(response => response.data)
    },

    async adicionarProduto(produto){
        return axios.post(API_URL + 'produtos', produto)
        .then(response => response.data)
    },

    async editarDepartamento(produto){
        return axios.put(API_URL + 'produtos', produto)
        .then(response => response.data)
    }

};