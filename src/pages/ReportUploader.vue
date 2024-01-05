<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Report Uploader</h2>
    <input type="file" @change="handleFileChange" accept=".pdf" class="mb-2">
    <button @click="uploadReport" class="btn-report">Upload Report</button>
  </div>
</template>

<script>
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
    async uploadReport() {
      const formData = new FormData();
      formData.append('report', this.selectedFile);

      try {
        // Use Axios or Fetch to make API call to Laravel backend
        const response = await axios.post('/api/reports', formData, {
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
.btn-report {
  @apply px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300;
}
</style>
