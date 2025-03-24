<template>
  <div>
    <h2>Search for Doctors</h2>
    <input type="text" v-model="area" placeholder="Enter area" />
    <button @click="searchDoctors">Search</button>

    <div v-if="doctors.length > 0">
      <div v-for="doctor in doctors" :key="doctor.id">
        <p>{{ doctor.name }} - {{ doctor.hospital }}</p>
        <p>Rating: {{ doctor.rating }} / 5</p>
        <button @click="viewDoctorProfile(doctor.id)">View Profile</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      area: '',
      doctors: []
    };
  },
  methods: {
    searchDoctors() {
      axios.get(`http://localhost:8000/api/doctors`, { params: { area: this.area } })
        .then(response => {
          this.doctors = response.data;
        })
        .catch(error => {
          console.error("Error searching doctors:", error);
        });
    },
    viewDoctorProfile(id) {
      this.$router.push(`/doctor-profile/${id}`);
    }
  }
};
</script>
