<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <h2 class="text-3xl font-semibold mb-6 text-center">Gallery</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Display images here -->
      <div v-for="image in images" :key="image.id">
        <img :src="getImageUrl(image.filename)" alt="Gallery Image" class="w-full h-auto rounded-md shadow-md mb-4">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [], // Store the fetched images here
    };
  },
  mounted() {
    // Fetch images from the Laravel backend
    this.fetchImages();
  },
  methods: {
    async fetchImages() {
      try {
        // Replace '/api/galary' with the actual endpoint for fetching gallery images
        const response = await axios.get('/api/galary');
        this.images = response.data; // Assume the response is an array of image objects
      } catch (error) {
        console.error(error);
      }
    },
    getImageUrl(filename) {
      // Replace 'storage/images/' with the actual path where images are stored on the Laravel backend
      return `/storage/images/${filename}`;
    },
  },
};
</script>

<style>
/* You can customize the styling further based on your design preferences */
</style>
