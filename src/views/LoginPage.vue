<template>
  <div class="login-page">
    <h2>Login</h2>

    <!-- Selection of Patient or Doctor -->
    <div class="user-selection">
      <button @click="selectUser('patient')" :class="{'active': selectedUser === 'patient'}">Patient</button>
      <button @click="selectUser('doctor')" :class="{'active': selectedUser === 'doctor'}">Doctor</button>
    </div>

    <!-- Patient Login Form -->
    <div v-if="selectedUser === 'patient'" class="login-form">
      <h3>Patient Login</h3>
      <form @submit.prevent="patientLogin">
        <div class="form-group">
          <label for="patient-name">Name</label>
          <input type="text" id="patient-name" v-model="patientForm.name" required placeholder="Enter your name" />
        </div>

        <div class="form-group">
          <label for="patient-email">Email</label>
          <input type="email" id="patient-email" v-model="patientForm.email" required placeholder="Enter your email" />
        </div>

        <div class="form-group">
          <label for="patient-password">Password</label>
          <input type="password" id="patient-password" v-model="patientForm.password" required placeholder="Enter your password" />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>

    <!-- Doctor Login Form -->
    <div v-if="selectedUser === 'doctor'" class="login-form">
      <h3>Doctor Login</h3>
      <form @submit.prevent="doctorLogin">
        <div class="form-group">
          <label for="doctor-name">Name</label>
          <input type="text" id="doctor-name" v-model="doctorForm.name" required placeholder="Enter your name" />
        </div>

        <div class="form-group">
          <label for="doctor-email">Email</label>
          <input type="email" id="doctor-email" v-model="doctorForm.email" required placeholder="Enter your email" />
        </div>

        <div class="form-group">
          <label for="doctor-password">Password</label>
          <input type="password" id="doctor-password" v-model="doctorForm.password" required placeholder="Enter your password" />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedUser: null, // Tracks the selected user type (patient or doctor)
      patientForm: {
        name: "",
        email: "",
        password: "",
      },
      doctorForm: {
        name: "",
        email: "",
        password: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    selectUser(userType) {
      this.selectedUser = userType;
      // Reset the forms when switching user types
      if (userType === "patient") {
        this.patientForm = { name: "", email: "", password: "" };
      } else if (userType === "doctor") {
        this.doctorForm = { name: "", email: "", password: "" };
      }
    },
    // Handle patient login
    patientLogin() {
      axios
        .post("http://localhost:8000/api/patient/login", this.patientForm)
        .then((response) => {
          // Handle successful login (e.g., redirect, store token, etc.)
          console.log("Patient logged in:", response.data);
          this.$router.push("/patient-dashboard"); // Redirect to patient dashboard
        })
        .catch((error) => {
          this.errorMessage = error.response.data.message || "Login failed. Please try again.";
        });
    },
    // Handle doctor login
    doctorLogin() {
      axios
        .post("http://localhost:8000/api/doctor/login", this.doctorForm)
        .then((response) => {
          // Handle successful login (e.g., redirect, store token, etc.)
          console.log("Doctor logged in:", response.data);
          this.$router.push("/doctor-dashboard"); // Redirect to doctor dashboard
        })
        .catch((error) => {
          this.errorMessage = error.response.data.message || "Login failed. Please try again.";
        });
    },
  },
};
</script>

<style scoped>
.login-page {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.login-page h2 {
  text-align: center;
  margin-bottom: 20px;
}

.user-selection {
  text-align: center;
  margin-bottom: 20px;
}

.user-selection button {
  padding: 10px 20px;
  margin: 5px;
  background-color: #2980b9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.user-selection button.active {
  background-color: #3498db;
}

.login-form {
  margin-top: 20px;
}

.login-form h3 {
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
