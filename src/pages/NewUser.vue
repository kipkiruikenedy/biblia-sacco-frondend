<template>
  <form @submit.prevent="submitForm">
    <!-- Your form fields go here -->
    <label for="name">Name:</label>
    <input type="text" v-model="name" required />

    <!-- Other form fields... -->

    <button type="submit">Submit</button>
  </form>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      name: '',
      // Add other form fields here...
    };
  },
  methods: {
    submitForm() {
      // Use EmailJS to send the form data to your email
      emailjs
        .send('service_nc98e1t', 'YOUR_TEMPLATE_ID', {
          name: this.name,
          // Add other form fields...
        }, 'YOUR_USER_ID')
        .then(
          response => {
            // Handle the response, e.g., show a success message
            console.log('Email sent:', response);
          },
          error => {
            // Handle errors, e.g., show an error message
            console.error('Email failed to send:', error);
          }
        );
    },
  },
};
</script>

<style scoped>
/* Add your styling here if needed */
</style>
