<template>
  <div class="signup-page">
    <h2>Doctor Sign Up</h2>
    <form @submit.prevent="registerDoctor">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          placeholder="Enter your full name"
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          placeholder="Enter your email"
        />
      </div>

      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          v-model="form.phone"
          required
          placeholder="Enter your phone number"
        />
      </div>

      <div class="form-group">
        <label for="hospital">Hospital Name</label>
        <input
          type="text"
          id="hospital"
          v-model="form.hospital"
          required
          placeholder="Enter the hospital name"
        />
      </div>

      <div class="form-group">
        <label for="address">Hospital Address</label>
        <input
          type="text"
          id="address"
          v-model="form.address"
          required
          placeholder="Enter the address of the hospital"
        />
      </div>

      <div class="form-group">
        <label for="years_of_experience">Years of Experience</label>
        <input
          type="number"
          id="years_of_experience"
          v-model="form.years_of_experience"
          required
          placeholder="Enter your years of experience"
        />
      </div>

      <button type="submit">Sign Up</button>
    </form>

    <div v-if="error" class="error-message">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        hospital: '',
        address: '',
        years_of_experience: '',
      },
      error: null,
    };
  },
  methods: {
    registerDoctor() {
      // Clear any previous error messages
      this.error = null;

      // Perform form validation (optional)
      if (!this.form.name || !this.form.email || !this.form.phone || !this.form.hospital || !this.form.address || !this.form.years_of_experience) {
        this.error = 'Please fill in all the fields.';
        return;
      }

      // Send a POST request to register the doctor
      axios
        .post('http://localhost:8000/api/doctors/signup', this.form)
        .then((response) => {
          // Handle successful registration (redirect, show message, etc.)
          this.$router.push('/login'); // Redirect to login page after successful sign-up
        })
        .catch((error) => {
          // Handle any errors (e.g., validation errors from the server)
          this.error = error.response.data.message || 'An error occurred. Please try again.';
        });
    },
  },
};
</script>

<style scoped>
.signup-page {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.signup-page h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #2980b9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3498db;
}

.error-message {
  margin-top: 20px;
  color: red;
  font-weight: bold;
}
</style>
