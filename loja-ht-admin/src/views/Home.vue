<template>

<v-container grid-list-md>
<v-layout row wrap>
  <v-flex xs12>
  <v-card-text>
    <div class="text-xs-center">
          <h1>Bem vindo</h1>
        </div>
  </v-card-text>
  </v-flex>
</v-layout>

<v-layout align-center justify-space-around row fill-height>
  <v-flex>
  <v-img :src="require('@/assets/img1.jpg')" aspect-ratio="1"></v-img>
  </v-flex>  
  <v-flex>
    <v-img :src="require('@/assets/img2.jpg')" aspect-ratio="1"></v-img>
  </v-flex>
  <v-flex>
    <v-img :src="require('@/assets/img3.jpg')"></v-img>
  </v-flex>
</v-layout>
</v-container>
</template>

<script>
  export default {

  }
</script>




