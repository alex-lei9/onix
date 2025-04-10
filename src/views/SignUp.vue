<template>
  <v-container class="signup-container">
    <v-row>
      <v-col cols="12" md="6" offset-md="3">
        <v-card>
          <v-card-title>
            <span class="headline">Sign Up</span>
          </v-card-title>

          <v-card-text>
            <v-form @submit.prevent="handleSubmit">
              <!-- Role Selection -->
              <v-select
                v-model="role"
                :items="roles"
                label="Select your role"
                required
              ></v-select>

              <!-- Form fields based on the selected role -->
              <v-text-field
                v-if="role === 'Patient'"
                v-model="name"
                label="Full Name"
                required
              ></v-text-field>
              <v-text-field
                v-if="role === 'Patient'"
                v-model="email"
                label="Email"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                v-if="role === 'Patient'"
                v-model="phone"
                label="Phone Number"
                required
              ></v-text-field>
              <v-text-field
                v-if="role === 'Patient'"
                v-model="location"
                label="Location"
                required
              ></v-text-field>
              <v-text-field
                v-if="role === 'Patient'"
                v-model="age"
                label="Age"
                type="number"
                required
              ></v-text-field>

              <v-text-field
                v-if="role === 'Doctor'"
                v-model="name"
                label="Full Name"
                required
              ></v-text-field>
              <v-text-field
                v-if="role === 'Doctor'"
                v-model="specialty"
                label="Specialty"
                required
              ></v-text-field>
              <v-text-field
                v-if="role === 'Doctor'"
                v-model="hospital"
                label="Hospital"
                required
              ></v-text-field>
              <v-text-field
                v-if="role === 'Doctor'"
                v-model="yearsExperience"
                label="Years of Experience"
                type="number"
                required
              ></v-text-field>
              <v-text-field
                v-if="role === 'Doctor'"
                v-model="phone"
                label="Phone Number"
                required
              ></v-text-field>

              <v-text-field
                v-if="role === 'Pharmacist'"
                v-model="name"
                label="Full Name"
                required
              ></v-text-field>
              <v-text-field
                v-if="role === 'Pharmacist'"
                v-model="pharmacyName"
                label="Pharmacy Name"
                required
              ></v-text-field>
              <v-text-field
                v-if="role === 'Pharmacist'"
                v-model="yearsExperience"
                label="Years of Experience"
                type="number"
                required
              ></v-text-field>
              <v-text-field
                v-if="role === 'Pharmacist'"
                v-model="phone"
                label="Phone Number"
                required
              ></v-text-field>

              <v-btn color="primary" type="submit">Sign Up</v-btn>
            </v-form>
          </v-card-text>

          <!-- Login redirect button (styled as a link) -->
          <v-card-actions>
            <v-btn text @click="goToLoginPage" class="login-link">
              Already have an account? Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      role: null, // Selected role
      roles: ['Patient', 'Doctor', 'Pharmacist'], // Available roles

      // Patient fields
      name: '',
      email: '',
      phone: '',
      location: '',
      age: '',

      // Doctor fields
      specialty: '',
      hospital: '',
      yearsExperience: '',

      // Pharmacist fields
      pharmacyName: '',
    };
  },
  methods: {
    handleSubmit() {
      // Handle the form submission based on the selected role
      if (this.role === 'Patient') {
        this.submitPatient();
      } else if (this.role === 'Doctor') {
        this.submitDoctor();
      } else if (this.role === 'Pharmacist') {
        this.submitPharmacist();
      }
    },
    submitPatient() {
      // Code to submit the patient form
      console.log('Patient form submitted', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        location: this.location,
        age: this.age,
      });
      // You can send this data to the backend (e.g., via an API call)
    },
    submitDoctor() {
      // Code to submit the doctor form
      console.log('Doctor form submitted', {
        name: this.name,
        specialty: this.specialty,
        hospital: this.hospital,
        yearsExperience: this.yearsExperience,
        phone: this.phone,
      });
      // You can send this data to the backend (e.g., via an API call)
    },
    submitPharmacist() {
      // Code to submit the pharmacist form
      console.log('Pharmacist form submitted', {
        name: this.name,
        pharmacyName: this.pharmacyName,
        yearsExperience: this.yearsExperience,
        phone: this.phone,
      });
      // You can send this data to the backend (e.g., via an API call)
    },
    goToLoginPage() {
      // Redirect to the login page
      this.$router.push('/LoginPage');
    },
  },
};
</script>

<style scoped>
/* Style for the "Login" link button */
.login-link {
  color: #1976d2; /* Blue color */
  text-decoration: underline;
  font-size: 14px; /* Slightly smaller font */
  text-transform: none; /* Remove uppercase transformation */
}

.login-link:hover {
  text-decoration: none; /* No underline on hover */
}

/* Add margin top to the container to prevent content from being covered by the navbar */
.signup-container {
  margin-top: 80px; /* Adjust this value based on your navbar height */
}
</style>  
