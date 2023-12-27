<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
 
    <div class="bg-white p-6 rounded-md shadow-md w-full ">
     <div class="font-semibold text-center">
  <h1 class="text-3xl">Group/Church/Chama Membership</h1>
  <p class="text-2xl">Apply for group/church/chama membership Now !</p>
  </div>
      <!-- File input for Introduction Letter -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Introduction letter stating interest to join Sacco</label>
       
    <input type="file" ref="introductionLetterInput" accept=".pdf" @change="handleFileUpload('introductionLetter', $event)" class="mt-1 p-2 border rounded-md w-full">

      </div>
      
      <!-- File input for 6 months bank statement / latest audited accounts -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">6 months bank statement / latest audited accounts</label>
        <input type="file" ref="bankStatementInput" accept=".pdf" @change="handleFileUpload('bankStatement', $event)" class="mt-1 p-2 border rounded-md w-full">
      </div>
      
      <!-- File input for Interested Members -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">At least four members interested in joining</label>
        <input type="file" ref="membersInput" accept=".pdf" @change="handleFileUpload('interestedMembers', $event)" class="mt-1 p-2 border rounded-md w-full">
      </div>
      
      <!-- File input for Faith / mission statement -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Faith / mission statement</label>
       <input type="file" ref="faithStatementInput" accept=".pdf" @change="handleFileUpload('faithStatement', $event)" class="mt-1 p-2 border rounded-md w-full">
      </div>
      
      <!-- File input for Certificate of Registration -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Certificate of Registration</label>
        <input type="file" ref="certificateCopyInput" accept=".pdf" @change="handleFileUpload('certificateCopy', $event)" class="mt-1 p-2 border rounded-md w-full">
      </div>
      
      <!-- File input for Minutes Copy -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">A copy of minutes stating that they have resolved to join the Sacco</label>
        <input type="file" ref="minutesCopyInput" accept=".pdf" @change="handleFileUpload('minutesCopy', $event)" class="mt-1 p-2 border rounded-md w-full">
      </div>
      
      <!-- Registration Fee and Minimum Contribution input fields -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Registration fee: KES 3,000</label>
        <input v-model="registrationFee" type="text" class="mt-1 p-2 border rounded-md w-full">
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Minimum contribution of KES 5,000 per month</label>
        <input v-model="minimumContribution" type="text" class="mt-1 p-2 border rounded-md w-full">
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
import axios from 'axios';
import html2pdf from 'html2pdf.js';

export default {
  data() {
    return {
      introductionLetter: null,
      bankStatement: null,
      interestedMembers: '',
      faithStatement: '',
      certificateCopy: null,
      minutesCopy: null,
      registrationFee: '',
      minimumContribution: '',
    };
  },
  methods: {
    handleFileUpload(fileType, event) {
      this[fileType] = event.target.files[0];
    },
    submitFiles() {
      // Check if any of the files is missing
      if (!this.bankStatement || !this.certificateCopy || !this.minutesCopy) {
        console.error("Files are missing. Please upload all required files.");
        return;
      }

      console.log("Submitting files for upload...");
      let formData = new FormData();
      formData.append('introductionLetter', this.introductionLetter);
      formData.append('bankStatement', this.bankStatement);
      formData.append('interestedMembers', this.interestedMembers);
      formData.append('faithStatement', this.faithStatement);
      formData.append('certificateCopy', this.certificateCopy);
      formData.append('minutesCopy', this.minutesCopy);
      formData.append('registrationFee', this.registrationFee);
      formData.append('minimumContribution', this.minimumContribution);

      axios.post(`http://localhost:8000/api/group-membership-registration`, formData, {
        headers: { 
          'Content-Type': 'multipart/form-data' 
        },
        timeout: 5000
      })
        .then(response => {
          console.log("Files upload successful!");
          // Reset form or provide other feedback as needed
          this.resetForm();
          console.log(response);
        })
        .catch(error => {
          console.error("Files upload failed.");
          console.error(error);
          // Provide error feedback to the user
        });
    },
    resetForm() {
      // Reset form or clear file input values as needed
      this.introductionLetter = null;
      this.bankStatement = null;
      this.interestedMembers = '';
      this.faithStatement = '';
      this.certificateCopy = null;
      this.minutesCopy = null;
      this.registrationFee = '';
      this.minimumContribution = '';
    },
  },
};
</script>

