<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-md shadow-md w-full ">
      <div class="font-semibold text-center">
  <h1 class="text-3xl">Individual Membership</h1>
  <p class="text-2xl">Apply for individual membership Now !</p>
  </div>
      

      <p class="text-gray-600 mb-6">
        Apply for individual membership by providing the following information:
      </p>

      <!-- File input for Membership Form -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Membership Form<span class="text-red-700 font-semibold">*</span></label>
        <input type="file" ref="membershipFormInput" accept=".pdf" @change="handleFileUpload('membershipForm', $event)" class="mt-1 p-2 border rounded-md w-full required">
      </div>
      
      <!-- File input for Passport Photo -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Passport Photo<span class="text-red-700 font-semibold">*</span></label>
        <input type="file" ref="passportPhotoInput" accept="image/*,.pdf" @change="handleFileUpload('passportPhoto', $event)" class="mt-1 p-2 border rounded-md w-full required">
      </div>
      
      <!-- File input for ID Copy -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">ID Copy<span class="text-red-700 font-semibold">*</span></label>
        <input type="file" ref="idCopyInput" accept=".pdf" @change="handleFileUpload('idCopy', $event)" class="mt-1 p-2 border rounded-md w-full required">
      </div>
      
      <!-- File input for KRA Pin Copy -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">KRA Pin Copy<span class="text-red-700 font-semibold">*</span></label>
        <input type="file" ref="kraPinCopyInput" accept=".pdf" @change="handleFileUpload('kraPinCopy', $event)" class="mt-1 p-2 border rounded-md w-full required">
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
      passportPhoto: null,
      idCopy: null,
      kraPinCopy: null
    }
  },
  methods: {
    /**
     * Uploads file to server.
     * @param {string} fileType The type of the file (membershipForm, passportPhoto, idCopy, kraPinCopy).
     * @param {Event} event The form change event with the file to be uploaded.
     */
    handleFileUpload(fileType, event) {
      this[fileType] = event.target.files[0];
    },
    /**
     * Uploads the files to the server.
     */
    submitFiles() {
      // Check if any of the files is missing
      if (!this.membershipForm || !this.passportPhoto || !this.idCopy || !this.kraPinCopy) {
        return;
      }

      console.log("Submitting files for upload...");
      let formData = new FormData();
      formData.append('membershipForm', this.membershipForm);
      formData.append('passportPhoto', this.passportPhoto);
      formData.append('idCopy', this.idCopy);
      formData.append('kraPinCopy', this.kraPinCopy);

      axios.post(`http://localhost:8000/api/individual-membership-registration`, formData, {
        headers: { 
          'Content-Type': 'multipart/form-data' 
        },
        timeout: 5000
      })
        .then(response => {
          console.log("Files upload successful!");
          // Clear file inputs
          this.$refs.membershipFormInput.value = "";
          this.$refs.passportPhotoInput.value = "";
          this.$refs.idCopyInput.value = "";
          this.$refs.kraPinCopyInput.value = "";
          console.log(response);
        }).catch(error => {
          console.log("Files upload failed.");
          console.error(error);
        });
    }
  }
}
</script>
