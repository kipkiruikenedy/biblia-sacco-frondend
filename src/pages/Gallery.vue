<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <h2 class="text-3xl font-semibold mb-6 text-center">Biblia Sacco Gallery</h2>

    <!-- Input field for choosing the year -->
    <input
      v-model="selectedYear"
      type="number"
      placeholder="filter by year"
      class="w-full p-2 mb-4 border rounded-md"
      @input="fetchImages"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Display images with descriptions and category -->
      <div v-for="image in images" :key="image.id">
        <img :src="getImageUrl(image.filename)" :alt="image.filename" class="w-full h-auto rounded-md shadow-md mb-2">
        <p class="text-sm font-semibold mb-1">{{ image.description }}</p>
        <p class="text-xs text-gray-500">{{ image.category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      images: [], // Store the fetched images here
      selectedYear: null, // Selected year
    };
  },
  watch: {
    selectedYear: 'fetchImages',
  },
  mounted() {
    // Fetch images initially without specifying a year
    this.fetchImages();
  },
  methods: {
    async fetchImages() {
      try {
        // Build the API endpoint based on the selected year
        const endpoint = this.selectedYear
          ? `http://localhost:8000/api/gallery/images/${this.selectedYear}`
          : 'http://localhost:8000/api/gallery/images';

        const response = await axios.get(endpoint);
        console.log(response.data);
        // Adjust the assignment based on your backend response structure
        this.images = response.data.images || response.data;
      } catch (error) {
        console.error(error);
      }
    },
    getImageUrl(filename) {
      // Replace 'storage/images/' with the actual path where images are stored on the Laravel backend
      return `http://localhost:8000/gallery/${filename}`;
    },
  },
};
</script>

<style>
/* You can customize the styling further based on your design preferences */
</style>
