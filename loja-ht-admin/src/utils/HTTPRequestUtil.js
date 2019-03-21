const API_URL = "http://localhost:3000/"
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
};