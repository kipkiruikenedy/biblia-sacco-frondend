<template>
  <div class="contact-us-section py-10 text-center">
    <div class="container mx-auto">
      <div class="text-4xl font-bold mb-4 text-blue-800">
        <i class="fas fa-stopwatch"></i> Don't Wait
      </div>
      <p class="text-lg mb-6">Reach out to us for a free consultation</p>
      <!-- Use router-link to navigate to the contact page -->
      <router-link to="/contact" class="btn-ready">
        <i class="fas fa-check-circle"></i> I'm Ready
      </router-link>
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Lighter box shadow */
  padding: 50px; /* Increased padding for more space */
}

.btn-ready {
  display: inline-block;
  background-color: #3498db; /* Blue background color */
  color: #fff; /* White text color */
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.btn-ready:hover {
  background-color: #2980b9; /* Darker shade of blue on hover */
}
</style>
