<template>
  <v-container class="login-container">
    <v-row>
      <v-col cols="12" md="6" offset-md="3">
        <v-card>
          <v-card-title>
            <span class="headline">Login</span>
          </v-card-title>

          <v-card-text>
            <v-form @submit.prevent="handleLogin">
              <!-- Role Selection -->
              <v-select
                v-model="role"
                :items="roles"
                label="Select your role"
                required
              ></v-select>

              <!-- Username input -->
              <v-text-field
                v-model="username"
                label="Username"
                required
              ></v-text-field>

              <!-- Email input -->
              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                required
              ></v-text-field>

              <!-- Password input -->
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
              ></v-text-field>

              <!-- Login button -->
              <v-btn color="primary" type="submit">Login</v-btn>
            </v-form>
          </v-card-text>
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

      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      // Handle the login logic here
      console.log('Login attempt:', {
        role: this.role,
        username: this.username,
        email: this.email,
        password: this.password,
      });
      // You can send this data to your backend for authentication
    }
  },
};
</script>

<style scoped>
/* Add margin-top to the container to prevent content from being covered by the navbar */
.login-container {
  margin-top: 120px; /* Adjust this value based on your navbar height */
}
</style>
