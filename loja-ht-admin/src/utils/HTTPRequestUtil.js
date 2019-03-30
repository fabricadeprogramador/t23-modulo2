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
    //////////USUARIOS////////////
    async buscarUsuarios(){
        return axios.get(API_URL + 'usuarios')
        .then(response => response.data)
    },

    async salvarUsuario(usuario){
        return axios.post(API_URL + 'usuarios', usuario)
        .then(response => response.data)
    },

    async editarUsuario(usuario){
        return axios.put(API_URL + 'usuarios', usuario)
        .then(response => response.data)
    },    
};

