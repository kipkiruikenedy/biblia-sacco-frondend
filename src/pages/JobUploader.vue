<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Job Uploader</h2>
    <input type="file" @change="handleFileChange" accept=".pdf" class="mb-2">
    <button @click="uploadJob" class="btn-job">Upload Job</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    async uploadJob() {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      try {
        // Use Axios or Fetch to make API call to Laravel backend
        const response = await axios.post('http://localhost:8000/api/jobs', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
.btn-job {
  @apply px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300;
}
</style>
