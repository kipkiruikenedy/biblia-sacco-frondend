<template>
  <div class="contact-us-section py-10 text-center">
    <div class="container mx-auto">
      <div class="text-3xl font-semibold mb-4 text-BLUE-800">
        <i class="fas fa-stopwatch"></i> DON’T WAIT
      </div>
      <p class="text-xl mb-6">Contact Us For A Free Consult</p>
      <button class="bg-yellow-300 text-blue-600 font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl">
        <i class="fas fa-check-circle"></i> I’m Ready
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUsSection",
};
</script>

<style scoped>
.contact-us-section {
  background-color: #f8f8f8; /* Background color */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Box shadow for the section */
  padding: 20px;
}

button {
  transition: all 0.2s; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

button:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Enlarge shadow on hover */
}
</style>
