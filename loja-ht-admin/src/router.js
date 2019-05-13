import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Usuarios from "./views/Usuarios.vue";
import Clientes from "./views/Clientes.vue";
import Departamentos from "./views/Departamentos.vue";
import Produtos from "./views/Produtos.vue";
import Compras from "./views/Compras.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/usuarios",
      name: "Usuarios",
      component: Usuarios
    },
    {
      path: "/clientes",
      name: "Clientes",
      component: Clientes
    },
    {
      path: "/departamentos",
      name: "Departamentos",
      component: Departamentos
    },
    {
      path: "/produtos",
      name: "Produtos",
      component: Produtos
    },
    {
      path: "/compras",
      name: "Compras",
      component: Compras
    },
    {
      path: "/logout",
      name: "Logout",
      component: Logout
    },
  ]
});
