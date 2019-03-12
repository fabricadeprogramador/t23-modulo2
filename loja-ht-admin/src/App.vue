<template>
  <v-app>
     <v-toolbar color="primary" dark app>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Loja HT</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>A</v-btn>
        <v-btn flat>B</v-btn>
        <v-icon>alarm</v-icon>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <!-- <HelloWorld /> -->
      <TesteComponent/>
    </v-content>
  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import TesteComponent from './components/TesteComponent'

  export default {
    name: 'App',
    components: {
      HelloWorld,
      TesteComponent
    },
    data() {
      return {
        //
      }
    }
  }
</script>