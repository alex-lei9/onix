<template>
  <div>
    <!-- Filter Section with margin-top to avoid overlap with navbar -->
    <div class="filter-section">
      <v-select
        v-model="selectedFilter"
        :items="filterOptions"
        label="Select Location Type"
        outlined
        dense
        @change="filterLocations"
      />
    </div>

    <!-- Locations Section -->
    <section class="locations-section">
      <div class="content">
        <!-- Hospital Section -->
        <div v-if="selectedFilter === 'All' || selectedFilter === 'Hospitals'" class="location-item" v-for="hospital in hospitals" :key="hospital.name">
          <img class="location-img" :src="hospital.image" :alt="hospital.name" />
          <div class="location-details">
            <h3>{{ hospital.name }}</h3>
            <p><strong>Location:</strong> {{ hospital.location }}</p>
            <p><strong>Contact:</strong> {{ hospital.contact }}</p>
          </div>
        </div>

        <!-- Pharmacy Section -->
        <div v-if="selectedFilter === 'All' || selectedFilter === 'Pharmacies'" class="location-item" v-for="pharmacy in pharmacies" :key="pharmacy.name">
          <img class="location-img" :src="pharmacy.image" :alt="pharmacy.name" />
          <div class="location-details">
            <h3>{{ pharmacy.name }}</h3>
            <p><strong>Location:</strong> {{ pharmacy.location }}</p>
            <p><strong>Contact:</strong> {{ pharmacy.contact }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LocationsPage',
  data() {
    return {
      selectedFilter: 'All', // Default filter to show all locations
      filterOptions: ['All', 'Hospitals', 'Pharmacies'], // Options for filter
      // Sample hospital data with images and contact information
      hospitals: [
        {
          name: 'Hospital 1',
          location: 'Nairobi',
          contact: '+254 701 234 567',
          image: '/path-to-hospital1-image.jpg', // Replace with actual image path
        },
        {
          name: 'Hospital 2',
          location: 'Mombasa',
          contact: '+254 701 345 678',
          image: '/path-to-hospital2-image.jpg', // Replace with actual image path
        },
      ],
      // Sample pharmacy data with images and contact information
      pharmacies: [
        {
          name: 'Pharmacy 1',
          location: 'Kisumu',
          contact: '+254 701 456 789',
          image: '/path-to-pharmacy1-image.jpg', // Replace with actual image path
        },
        {
          name: 'Pharmacy 2',
          location: 'Eldoret',
          contact: '+254 701 567 890',
          image: '/path-to-pharmacy2-image.jpg', // Replace with actual image path
        },
      ],
    };
  },
  methods: {
    filterLocations() {
      // Logic for filtering content based on the selected filter
      console.log('Selected Filter:', this.selectedFilter);
    },
  },
};
</script>

<style scoped>
/* Style for the Locations Page */
.filter-section {
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 80px; /* Adjust this to ensure it is not hidden behind the navbar */
}

.locations-section {
  padding: 20px;
}

.location-item {
  padding: 20px;
  border: 1px solid #ddd;
  margin: 10px 0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.location-img {
  width: 200px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.location-details {
  flex: 1;
}

.location-details h3 {
  font-size: 18px;
  color: #333;
}

.location-details p {
  font-size: 14px;
  color: #666;
}

@media (max-width: 768px) {
  .location-item {
    flex-direction: column;
    text-align: center;
  }

  .location-img {
    width: 100%;
    max-width: 250px;
    margin-bottom: 20px;
  }

  .location-details h3 {
    font-size: 16px;
  }

  .location-details p {
    font-size: 12px;
  }
}
</style>
