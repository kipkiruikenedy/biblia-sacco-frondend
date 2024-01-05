<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <h2 class="text-3xl font-semibold mb-6 text-center">Messages and reports from the Sacco chairman</h2>

    <div v-if="pdfs.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Display PDFs here -->
      <div v-for="pdf in pdfs" :key="pdf.id">
        <div class="border rounded-md shadow-md mb-4 p-4">
          <!-- Display PDF name without extension -->
          <p class="text-lg font-semibold mb-2 text-center">{{ getFileNameWithoutExtension(pdf.filename) }}</p>

          <!-- Open PDF in a new page -->
          <a :href="getPdfUrl(pdf.filename)" target="_blank" class="flex items-center justify-center text-blue-500 cursor-pointer">
            <i class="fas fa-external-link-alt mr-2"></i> Open PDF
          </a>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-gray-600">No PDFs available.</div>
  </div>
</template>



<script>
import axios from 'axios';

export default {
  data() {
    return {
      pdfs: [], // Store the fetched PDFs here
    };
  },
  mounted() {
    // Fetch PDFs from the Laravel backend
    this.fetchPDFs();
  },
  methods: {
    async fetchPDFs() {
      try {
        // Replace '/api/gallery/pdfs' with the actual endpoint for fetching PDFs
        const response = await axios.get('http://localhost:8000/api/reports');
        console.log(response.data);

        // Check if the "reports" array is not empty before updating the data
        if (response.data.reports && response.data.reports.length > 0) {
          // Adjust the assignment based on your backend response structure
          this.pdfs = response.data.reports.map(filename => ({ filename }));
        }
      } catch (error) {
        console.error(error);
      }
    },
    getPdfUrl(filename) {
      // Assuming your Laravel application is running at http://localhost:8000
      return `http://localhost:8000/reports/${filename}`;
    },
    getFileNameWithoutExtension(filename) {
      // Remove the file extension (assuming the extension is always ".pdf")
      return filename.replace(/\.[^/.]+$/, "");
    },
  },
};
</script>

<style>
/* You can customize the styling further based on your design preferences */
</style>
