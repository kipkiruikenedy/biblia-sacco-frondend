<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white p-6 rounded-md shadow-md w-full ">
      <!-- File input for Application/Introduction Letter -->
      <div class="font-semibold text-center">
  <h1 class="text-3xl">Unit Affiliation</h1>
  <p class="text-2xl">Apply for unit affiliation Now !</p>
  </div>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Application / Introduction Letter<span class="text-red-700 font-semibold">*</span></label>
        <input type="file" ref="applicationLetterInput" accept=".pdf" @change="handleFileUpload('applicationLetter', $event)" class="mt-1 p-2 border rounded-md w-full">
      </div>

      <!-- File input for Audited Accounts -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Attach a copy of your latest audited accounts</label>
        <input type="file" ref="auditedAccountsInput" accept=".pdf" @change="handleFileUpload('auditedAccounts', $event)" class="mt-1 p-2 border rounded-md w-full">
      </div>

      <!-- File input for Certificate of Registration -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">A copy of the certificate of registration</label>
        <input type="file" ref="certificateOfRegistrationInput" accept=".pdf" @change="handleFileUpload('certificateOfRegistration', $event)" class="mt-1 p-2 border rounded-md w-full">
      </div>

      <!-- File input for Mission/Faith Statement -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">A copy of the Mission/Faith statement</label>
        <input type="file" ref="missionStatementInput" accept=".pdf" @change="handleFileUpload('missionStatement', $event)" class="mt-1 p-2 border rounded-md w-full">
      </div>

      <!-- File input for Interested Members List -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">List of at least 4 permanently employed interested members</label>
        <input type="file" ref="interestedMembersInput" accept=".pdf" @change="handleFileUpload('interestedMembers', $event)" class="mt-1 p-2 border rounded-md w-full">
      </div>

      <div class="mt-8">
        <button @click="submitFiles" class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 w-full">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      applicationLetter: '',
      auditedAccounts: null,
      certificateOfRegistration: null,
      missionStatement: '',
      interestedMembers: '',
    };
  },
  methods: {
    handleFileUpload(fileType, event) {
      this[fileType] = event.target.files[0];
    },
    submitFiles() {
      // Check if any of the files is missing
      if (!this.auditedAccounts || !this.certificateOfRegistration) {
        console.error("Files are missing. Please upload all required files.");
        return;
      }

      console.log("Submitting files for upload...");
      let formData = new FormData();
      formData.append('applicationLetter', this.applicationLetter);
      formData.append('auditedAccounts', this.auditedAccounts);
      formData.append('certificateOfRegistration', this.certificateOfRegistration);
      formData.append('missionStatement', this.missionStatement);
      formData.append('interestedMembers', this.interestedMembers);

      axios.post(`http://localhost:8000/api/unit-affiliation-registration`, formData, {
        headers: { 
          'Content-Type': 'multipart/form-data' 
        },
        timeout: 5000
      })
        .then(response => {
          console.log("Files upload successful!");
          // Clear file inputs
          this.$refs.auditedAccountsInput.value = "";
          this.$refs.certificateOfRegistrationInput.value = "";
          console.log(response);
        })
        .catch(error => {
          console.error("Files upload failed.");
          console.error(error);
        });
    }
  }
};
</script>
