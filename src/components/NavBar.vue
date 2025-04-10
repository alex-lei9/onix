<template>
  <v-app-bar app color="#1604c0">
    <!-- Logo or Application Name -->
    <v-img
      src="/13.jpg"
      alt="Onix Logo"
      max-width="100"
      class="mr-4"
    ></v-img>
    <v-toolbar-title class="custom-navbar-title">
      <span class="font-weight-light">Onix-healthcare and Pharmacies</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <!-- Home button -->
    <v-btn color="white" outlined @click="Home" router-link to="/"  class="router-link">
      Home
    </v-btn>

    <!-- AboutUs button -->
    <v-btn color="white" outlined @click="AboutUs" router-link to="/AboutUs"  class="router-link">
      About Us
    </v-btn>

    <!-- Locations button -->
    <v-btn color="white" outlined @click="Loctions" router-link to="/LocationsPage"  class="router-link">
      Locations
    </v-btn>

    <!-- Find a Doctor Button with Dropdown and Arrow -->
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn color="white" v-bind="props">
          <v-icon left>mdi-chevron-down</v-icon>
          <span>Find a Doctor</span>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- Find a Pharmacy Button -->
    <v-btn color="white" outlined @click="findPharmacy">
      Find a Pharmacy
    </v-btn>

    <!--Login Button-->
    <v-btn color="white" outlined @click="SignUp" router-link to="/SignUp" class="router-link">
      SignUp
    </v-btn>

    <!-- Search Icon -->
    <v-btn icon @click="toggleSearchDialog">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>

  <!-- Search Dialog -->
  <v-dialog v-model="searchDialog" persistent max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">Search</span>
      </v-card-title>

      <v-card-text>
        <!-- Search Query Input -->
        <v-text-field
          v-model="searchQuery"
          label="Search for doctors or pharmacies"
          append-icon="mdi-magnify"
          dense
          outlined
          @input="searchItems"
        ></v-text-field>

        <!-- Display search results (mocked for now) -->
        <v-list v-if="searchResults.length">
          <v-list-item v-for="(result, index) in searchResults" :key="index">
            <v-list-item-title>{{ result.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ result.type }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
        <v-alert v-if="!searchResults.length" type="info" dense>No results found</v-alert>
      </v-card-text>

      <v-card-actions>
        <v-btn text @click="closeSearchDialog">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';

// Mock search results
const items = [
  { title: 'General Practitioner' },
  { title: 'Cardiologist' },
  { title: 'Dermatologist' },
  { title: 'Pediatrician' },
  { title: 'Orthopedic Surgeon' },
  { title: 'Neurologist' },
];

// Search dialog visibility state
const searchDialog = ref(false);

// Search query
const searchQuery = ref('');

// Search results
const searchResults = ref([]);

// Toggle the search dialog
function toggleSearchDialog() {
  searchDialog.value = !searchDialog.value;
}

// Close the search dialog
function closeSearchDialog() {
  searchDialog.value = false;
  searchQuery.value = ''; // Clear the search query when the dialog is closed
  searchResults.value = []; // Clear search results
}

// Handle the search input
function searchItems() {
  if (searchQuery.value.trim() === '') {
    searchResults.value = [];
  } else {
    // Perform the search logic (mocked here as filtering items)
    searchResults.value = items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
}
</script>

<style scoped>
.custom-navbar-title {
  font-family: "Times New Roman", Times, serif;
  text-transform: uppercase;
  font-size: 17px;
}

/* Optional styling for the search field */
.v-text-field {
  margin-top: 10px;
}
</style>
