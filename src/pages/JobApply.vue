<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-md shadow-md w-full">
      <div class="font-semibold text-center">
        <h1 class="text-3xl">Job application Form Submission page</h1>
        <p class="text-2xl">Ensure that the form is fully filled before trying to submit</p>
      </div>

      <!-- File input for Membership Form -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Form application letter<span class="text-red-700 font-semibold">*</span></label>
        <input type="file" @change="handleFileUpload('membershipForm', $event)" class="mt-1 p-2 border rounded-md w-full required">
      </div>

      <div class="mt-8">
        <button v-on:click="submitFiles()" class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 w-full">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  data () {
    return {
      membershipForm: null,
    }
  },
  methods: {
    handleFileUpload(fileType, event) {
      this[fileType] = event.target.files[0];
    },
    submitFiles() {
      if (!this.membershipForm) {
        return;
      }

      console.log("Submitting file for upload...");
      let formData = new FormData();
      formData.append('membershipForm', this.membershipForm);

      axios.post(`http://localhost:8000/api/individual-membership-registration`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        timeout: 5000
      })
          .then(response => {
            console.log("File upload successful!");
            // Clear file input
            this.$refs.membershipFormInput.value = "";
            console.log(response);
          }).catch(error => {
        console.log("File upload failed.");
        console.error(error);
      });
    }
  }
}
</script>
