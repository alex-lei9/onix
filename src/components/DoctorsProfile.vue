<template>
  <div>
    <h2>{{ doctor.name }}'s Profile</h2>
    <p>Hospital: {{ doctor.hospital }}</p>
    <p>Phone: {{ doctor.phone }}</p>
    <p>Years of Experience: {{ doctor.years_of_experience }}</p>
    <p>Working Hours: {{ doctor.working_hours }}</p>
    <p>Rating: {{ doctor.rating }} / 5</p>

    <h3>Leave a Rating</h3>
    <input type="number" v-model="rating" min="1" max="5" />
    <textarea v-model="comment" placeholder="Leave a comment"></textarea>
    <button @click="submitRating">Submit Rating</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      doctor: {},
      rating: 5,
      comment: ""
    };
  },
  created() {
    const doctorId = this.$route.params.id;
    axios.get(`http://localhost:8000/api/condition/${doctorId}`)
      .then(response => {
        this.doctor = response.data;
      })
      .catch(error => {
        console.error("Error fetching doctor profile:", error);
      });
  },
  methods: {
    submitRating() {
      axios.post("http://localhost:8000/api/rate-doctor", {
        doctor_id: this.doctor.id,
        rating: this.rating,
        comment: this.comment
      })
      .then(response => {
        alert('Rating submitted');
      })
      .catch(error => {
        console.error("Error submitting rating:", error);
      });
    }
  }
};
</script>
