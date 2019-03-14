import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Usuarios from './views/Usuarios.vue'
import Clientes from './views/Clientes.vue'
import Departamentos from './views/Departamentos.vue'
import Produtos from './views/Produtos.vue'
import Compras from './views/Compras.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: Usuarios
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: Clientes
    },
    {
      path: '/departamentos',
      name: 'departamentos',
      component: Departamentos
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: Produtos
    },
    {
      path: '/compras',
      name: 'compras',
      component: Compras
    }
  ]
})
