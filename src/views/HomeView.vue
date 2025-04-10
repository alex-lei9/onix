<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Your Health, Our Priority</h1>
        <p>Access top-tier healthcare and pharmacies at your convenience.</p>
        <button @click="bookAppointment">Book an Appointment</button>
        <button @click="orderMedicine">Order your Medication</button>
      </div>
    </section>

    <!-- About Section -->


    <!-- Featured Services Section -->
    <section class="services">
      <h2>Our Services</h2>
      <div class="service-cards">
        <div class="service-card">
          <h3>General Medicine</h3>
          <p>Comprehensive care for general health and wellness.</p>
        </div>
        <div class="service-card">
          <h3>Specialist Care</h3>
          <p>Access to expert specialists across a wide range of disciplines.</p>
        </div>
        <div class="service-card">
          <h3>Pharmacy</h3>
          <p>Convenient online pharmacy services for prescriptions and over-the-counter medications.</p>
        </div>
      </div>
    </section>

    <!-- Image-Text Section -->
    <section class="section-container">
      <div class="image-text-row">
        <div class="image-container">
          <img src="/national-cancer-institute-701-FJcjLAQ-unsplash.jpg" alt="Health Image" />
        </div>
        <div class="text-container">
          <h2>Our Healthcare Services</h2>
          <p>
            At Onix Healthcare, we offer a variety of services tailored to meet your
            healthcare needs. From general medicine to specialized care, our team of
            professionals is committed to providing the best possible medical attention
            for you and your family.
          </p>
          <p>
            We also offer pharmacy services, where you can conveniently get your
            medications prescribed by our expert doctors or pharmacists.
          </p>
        </div>
      </div>
      <div class="image-text-row">
        <div class="image-container">
          <img src="/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" alt="Doctor Image" />
        </div>
        <div class="text-container">
          <h2>Experienced Medical Professionals</h2>
          <p>
            Our medical professionals are highly skilled and experienced in their
            respective fields. Whether you need a consultation, treatment, or
            specialized care, we ensure that you are in safe hands.
          </p>
          <p>
            We are dedicated to providing you with quality healthcare and improving your
            well-being.
          </p>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="testimonials">
      <h2>What Our Patients Say</h2>
      <div class="testimonial-cards">
        <div class="testimonial-card">
          <p>"The team at Onix Healthcare made me feel at ease during my visit. The doctor was thorough, and I received my medication promptly." - John D.</p>
        </div>
        <div class="testimonial-card">
          <p>"Great experience overall. Fast and professional pharmacy service with an easy-to-use online platform." - Emma W.</p>
        </div>
        <div class="testimonial-card">
          <p>"I highly recommend Onix Healthcare for anyone looking for reliable and compassionate care." - Sarah L.</p>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2025 Onix Healthcare. All Rights Reserved.</p>
        <div class="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    // Button action for booking an appointment
    bookAppointment() {
      alert("Redirecting to appointment page...");
      // Replace this with actual navigation logic
    },
  },
};
</script>

<style scoped>
/* Basic reset and layout styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:"Times New Roman", Times, serif;
  background-color: #f4f7fa;
  color: #333;
}

/* Hero Section */
.hero {
  background-image: url('/jc-gellidon-uhXlRnt9dTw-unsplash.jpg'); /* Replace with your hero image */
  background-size: cover;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

.hero-content {
  max-width: 700px;
  padding: 20px;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
  font-family:"Times New Roman", Times, serif;
}

.hero p {
  font-size: 18px;
  margin-bottom: 30px;
  font-family:"Times New Roman", Times, serif;
}

.hero button {
  padding: 12px 24px;
  background-color: #1021ef;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
  border-radius: 100px;
  transition: background-color 0.3s;
}

.hero button:hover {
  background-color: #003366;
}

/* About Section */
.about {
  padding: 40px 20px;
  text-align: center;
  background-color: #ffffff;

}

.about h2 {
  font-size: 32px;
  margin-bottom: 20px;
  font-family:"Times New Roman", Times, serif;
}

.about p {
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto;
  font-family:"Times New Roman", Times, serif;
}

.about-image {
  width: 100%;
  height: 100px;
}

/* Services Section */
.services {
  background-color: #e7e7e7;
  padding: 60px 20px;
  text-align: center;
}

.services h2 {
  font-size: 32px;
  margin-bottom: 30px;
  font-family:"Times New Roman", Times, serif;
}

.service-cards {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.service-card {
  width: 250px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.service-card h3 {
  font-size: 22px;
  margin-bottom: 10px;
  font-family:"Times New Roman", Times, serif;
}

.service-card p {
  font-size: 16px;
}

/* Image and Text Section */
.section-container {
  padding: 40px 20px;
  background-color: #f8f9fa;
}

.image-text-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
}

.image-container {
  flex: 1;
  max-width: 40%;
}

.image-container img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.text-container {
  flex: 1;
  max-width: 55%;
}

.text-container h2 {
  font-size: 28px;
  margin-bottom: 20px;
  font-family:"Times New Roman", Times, serif;
}

.text-container p {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  font-family:"Times New Roman", Times, serif;
}

@media (max-width: 768px) {
  .image-text-row {
    flex-direction: column;
    text-align: center;
  }

  .image-container {
    max-width: 100%;
    margin-bottom: 20px;
  }

  .text-container {
    max-width: 100%;
  }
}

/* Testimonial Section */
.testimonials {
  padding: 40px 20px;
  background-color: #f9f9f9;
  text-align: center;
}

.testimonials h2 {
  font-size: 32px;
  margin-bottom: 30px;
  font-family:"Times New Roman", Times, serif;
}

.testimonial-cards {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.testimonial-card {
  width: 300px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.testimonial-card p {
  font-size: 16px;
  font-style: italic;
  color: #555;
  font-family:"Times New Roman", Times, serif;
}

/* Footer Section */
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 20px 0;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-links a {
  color: white;
  text-decoration: none;
  margin: 10px;
  font-size: 16px;
}

.social-links a:hover {
  text-decoration: underline;
}
</style>
