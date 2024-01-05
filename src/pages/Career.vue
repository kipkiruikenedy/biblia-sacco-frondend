<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <h2 class="text-3xl font-semibold mb-6 text-center">Latest Job Vacancies</h2>

    <!-- Additional Content -->
    <div class="mt-8 text-gray-700">
      <p>
        Biblia Sacco Society Limited is a Savings & Credit Society based in Nairobi. With over 10,000 members, it draws its membership from Christian Organizations such as NGOs, Schools, Colleges, Universities, Churches, Christian Individuals, and Groups in Kenya.
      </p>

      <p>
        At Biblia Sacco, we believe in equality of job distribution all over the country and always look for qualified individuals for any job posting. Only qualified individuals are required to apply.
      </p>

      <h3 class="text-2xl font-semibold mt-4">Latest Vacancies</h3>
    </div>
      <p>
        Here are the latest job vacancies available for application. You can download the job details by clicking on the "Open PDF" link.

      </p>
    <p>
      <p>
All Applications are send before specified deadline
      </p>
    </p>


    <!-- Display Job Vacancies here -->
    <div v-if="pdfs.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="pdf in pdfs" :key="pdf.filename">
        <div class="border rounded-md shadow-md mb-4 p-4 transition duration-300 transform hover:scale-105">
          <!-- Display PDF name without extension -->
          <p class="text-lg font-semibold mb-2 text-center">{{ pdf.title }}</p>

          <!-- Display other job details if available -->
          <p v-if="pdf.description" class="mb-2">{{ pdf.description }}</p>
          <p v-if="pdf.posted_at" class="text-gray-600 mb-2">Posted on: {{ pdf.posted_at }}</p>

          <!-- Open PDF in a new page -->
          <a :href="getPdfUrl(pdf.filename)" target="_blank" class="flex items-center justify-center text-blue-500 cursor-pointer">
            <i class="fas fa-file-pdf mr-2"></i> Open PDF
          </a>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-gray-600">No job vacancies available.</div>


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
        const response = await axios.get('http://localhost:8000/api/jobs');
        console.log(response.data);

        // Check if the "jobs" array is not empty before updating the data
        if (response.data.jobs && response.data.jobs.length > 0) {
          // Adjust the assignment based on your backend response structure
          this.pdfs = response.data.jobs;
        }
      } catch (error) {
        console.error(error);
      }
    },
    getPdfUrl(filename) {
      // Assuming your Laravel application is running at http://localhost:8000
      return `http://localhost:8000/jobs/${filename}`;
    },
    redirectToApplyPage() {
      // Redirect to the apply page
      this.$router.push('/job/application');
    },
  },
};
</script>

<style>
/* You can further customize the styling based on your design preferences */
</style>
