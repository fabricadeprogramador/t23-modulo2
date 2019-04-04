const API_URL = "https://loja-ht-api-t23.herokuapp.com/";
import axios from "axios";

export default {
  // DEPARTAMENTOS
  ////////////////////////////////
  async getDepartamentos() {
    return axios.get(API_URL + "departamentos").then(response => response.data);
  },

  async adicionarDepartamento(departamento) {
    return axios
      .post(API_URL + "departamentos", departamento)
      .then(response => response.data);
  },

<<<<<<< HEAD
  async editarDepartamento(departamento) {
    return axios
      .put(API_URL + "departamentos", departamento)
      .then(response => response.data);
  },
  //////////USUARIOS////////////
  async buscarUsuarios() {
    return axios.get(API_URL + "usuarios").then(response => response.data);
  },
=======
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
    },

    //////////USUARIOS////////////
    async buscarUsuarios(){
        return axios.get(API_URL + 'usuarios')
        .then(response => response.data)
    },
>>>>>>> cf56de2c9482a8754bbc1610a90c9537faeae1ca

  async salvarUsuario(usuario) {
    return axios
      .post(API_URL + "usuarios", usuario)
      .then(response => response.data);
  },

<<<<<<< HEAD
  async editarUsuario(usuario) {
    return axios
      .put(API_URL + "usuarios", usuario)
      .then(response => response.data);
  },

  ///CLIENTES
=======
    async editarUsuario(usuario){
        return axios.put(API_URL + 'usuarios', usuario)
        .then(response => response.data)
    },
};
>>>>>>> cf56de2c9482a8754bbc1610a90c9537faeae1ca

  async getClientes() {
    return axios.get(API_URL + "clientes").then(response => response.data);
  },
  async adicionarCliente(cliente) {
    return axios
      .post(API_URL + "clientes", cliente)
      .then(response => response.data);
  }
};
