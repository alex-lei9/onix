<template>
  <div>
    <!-- Hero Image Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Welcome to Onix Healthcare</h1>
        <p>Your trusted partner in healthcare and pharmacy solutions</p>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="about-section">
      <div class="content">
        <div class="text">
          <h2>Who We Are</h2>
          <p>
            Onix Healthcare is a leading provider of exceptional healthcare services and pharmacy solutions.
            Our team of dedicated professionals is committed to ensuring the best possible care for our patients.
            We strive to offer reliable and efficient services, focusing on quality, safety, and patient satisfaction.
          </p>
        </div>
        <div class="image">
          <img src="/national-cancer-institute-odggKTyA5o0-unsplash.jpg" alt="Healthcare Team" />
        </div>
      </div>
    </section>

    <!-- Our Mission Section -->
    <section class="mission-section">
      <div class="content">
        <div class="image">
          <img src="/national-cancer-institute-DK--4VWK1tw-unsplash.jpg" alt="Mission Image" />
        </div>
        <div class="text">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide accessible and high-quality healthcare services, combining cutting-edge technology with compassionate care.
            We aim to improve the well-being of our communities through comprehensive healthcare and pharmacy services.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Values Section -->
    <section class="values-section">
      <div class="content">
        <div class="text">
          <h2>Our Values</h2>
          <p>
            At Onix Healthcare, we value integrity, trust, and compassion. These principles are at the heart of everything we do.
            We are committed to providing exceptional care, offering support to our patients, and maintaining the highest standards of medical practice.
          </p>
        </div>
        <div class="image">
          <img src="/ordinary-busy-day-surgeon.jpg" alt="Values Image" />
        </div>
      </div>
    </section>

    <!-- Our Vision Section -->
    <section class="vision-section">
      <div class="content">
        <div class="image">
          <img src="/african-american-medic-pregnant-patient-meeting-appointment-coronavirus-pandemic-physician-talking-woman-with-pregnancy-belly-giving-medical-advice-checkup-visit.jpg" alt="Vision Image" />
        </div>
        <div class="text">
          <h2>Our Vision</h2>
          <p>
            Our vision is to be the healthcare provider of choice, delivering excellence in service, innovation, and patient care.
            We strive to become a trusted partner in promoting the health and well-being of individuals and families.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutUsPage',
};
</script>

<style scoped>
/* Hero Image Section */
.hero-section {
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url('/mieke-campbell-Q6DmZLEejkE-unsplash.jpg'); /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

.hero-content {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5); /* Dark overlay for text contrast */
  padding: 20px;
  border-radius: 10px;
}

.hero-content h1 {
  font-size: 48px;
  font-family: 'Times New Roman', Times, serif;
  margin-bottom: 10px;

}

.hero-content p {
  font-size: 24px;
  font-family: 'Times New Roman', Times, serif;
}

/* General Styling for About Us Page */
.about-section,
.mission-section,
.values-section,
.vision-section {
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;
}

.text {
  flex: 1;
  text-align: left;
  font-family: 'Times New Roman', Times, serif;
}

.text h2 {
  font-size: 36px;
  color: #070005;
  margin-bottom: 20px;
  font-weight: bold;
  font-style: italic;
}

.text p {
  font-size: 18px;
  color: #333;
  line-height: 1.6;
}

.image {
  flex: 1;
  text-align: center;
}

.image img {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    gap: 30px;
  }

  .image img {
    max-width: 100%;
  }

  .text {
    text-align: center;
  }
}
</style>
