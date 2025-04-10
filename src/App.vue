<template>
 <v-app>
    <NavBar />
    <v-content>
      <Router-View />
    </v-content>
    
  </v-app>
</template>

<script setup>
import {RouterView} from 'vue-router'
import NavBar from './components/NavBar.vue'

</script>

<style>
.main-content{
  padding-top: 20px;
  min-height: 90vh;
  flex-grow: 1;
}
</style>
