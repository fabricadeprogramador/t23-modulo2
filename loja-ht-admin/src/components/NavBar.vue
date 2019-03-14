<template>
    <nav>
        <v-toolbar app class="primary white--text">
            <v-toolbar-side-icon @click="drawer = ! drawer" class="white--text"></v-toolbar-side-icon>
            <v-toolbar-title>Loja HT - Admin</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn icon>
                    <v-icon class="white--text">person</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <div class="px-2">
                        <v-icon>{{ link.icon }}</v-icon>
                    </div>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
                links: [{
                        icon: 'home',
                        text: 'Home',
                        route: '/'
                    },
                    {
                        icon: 'person',
                        text: 'Usuários',
                        route: '/usuarios'
                    },
                    {
                        icon: 'group',
                        text: 'Clientes',
                        route: '/clientes'
                    },
                    {
                        icon: 'store_mall_directory',
                        text: 'Departamentos',
                        route: '/departamentos'
                    },
                    {
                        icon: 'watch',
                        text: 'Produtos',
                        route: '/produtos'
                    },
                    {
                        icon: 'shopping_cart',
                        text: 'Compras',
                        route: '/compras'
                    },
                    {
                        icon: 'directions_run',
                        text: 'Sair',
                        route: '/logout'
                    }
                ]
            }
        },
    }
</script>

<style>

</style>