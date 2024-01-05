<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Image Uploader</h2>
    <input type="file" @change="handleFileChange" accept="image/*" multiple>
    <button @click="uploadImage" class="btn mt-4">Upload Images</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      selectedFiles: null,
    };
  },
  methods: {
    handleFileChange(event) {
      // Use FileList to handle multiple file selection
      this.selectedFiles = event.target.files;
    },
    async uploadImage() {
      if (!this.selectedFiles) {
        return;
      }

      const formData = new FormData();

      // Append each selected file to the FormData with the correct field name
      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append('file', this.selectedFiles[i]);
      }

      try {
        // Use Axios or Fetch to make API call to Laravel backend
        const response = await axios.post('http://localhost:8000/api/gallery', formData, {
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
.btn {
  @apply px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300;
}
</style>
