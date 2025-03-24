<template>
   <v-navigation-drawer
    v-model="drawer"
    color="teal-darken-1"

    dark
    app
  >
    <v-layout column align-center>
           MENU
    </v-layout>
    <v-list flat>
      <v-list-item
        v-for="path in paths"
        :key="path.text"
        router
        :to="path.route"
        active-class="border"
      >
        <v-list-item-content class="d-flex align-center">
          <v-icon>{{ path.icon }}</v-icon>
          <span class="ml-2">{{ path.text }}</span>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

    <v-toolbar color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>ONIX-HEALTHCARE</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon="mdi-magnify"></v-btn>


      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-tabs="title"
        >
          <v-tab
            v-for="item in items"
            :key="item"
            :text="item"
            :value="item"
          ></v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        v-for="item in items"
        :key="item"
        :value="item"
      >
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>



</template>

<script setup>
  import { ref } from 'vue'

  const tab = ref(null)
  const drawer = ref(true)

  const items = [
    'Find a Doctor',
    'Find a Pharmacy',
    'Symptom Checker',

  ];
  const Items = [
    'DoctorSignUp',
    'PatientSignUp',
    'Login',
    'Role',

  ]
  const paths = ref([
  {  text: 'HomePage', route: '/' },
  {  text: 'Login', route: '/LoginPage' },
  {  text: 'DoctorSignUp', route: '/DoctorSignUp' },
  {  text: 'PatientSignUp', route: '/PatientSignUp' },
  {  text: 'Role', route: '/RolePage' },

])




</script>
