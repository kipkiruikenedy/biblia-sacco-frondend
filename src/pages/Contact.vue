<template>
  <div class="contact-us-section py-10 text-center">
    <!-- Quick Links Section -->
    <div class="quick-links">
      <h4 class="text-2xl font-semibold mb-4 text-blue-500 text-center">Quick Links</h4>
      <div class="flex flex-wrap  md:grid grid-cols-3 gap-4 ">
        <router-link to="/loan" class="quick-link-item hover:bg-gray-200 p-4 rounded-md text-center transition duration-300 transform hover:scale-105">
          <div class="icon-container bg-blue-500 rounded-full p-1">
            <i class="fas fa-hand-holding-usd text-white text-xl"></i>
          </div>
          <p class="text-xl font-semibold text-black">Loans</p>
        </router-link>
        <router-link to="/savings" class="quick-link-item hover:bg-gray-200 p-4 rounded-md text-center transition duration-300 transform hover:scale-105">
          <div class="icon-container bg-blue-500 rounded-full p-1">
            <i class="fas fa-piggy-bank text-white text-xl"></i>
          </div>
          <p class="text-xl font-semibold text-black">Savings</p>
        </router-link>
        <router-link to="/housing-scheme" class="quick-link-item hover:bg-gray-200 p-4 rounded-md text-center transition duration-300 transform hover:scale-105">
          <div class="icon-container bg-blue-500 rounded-full p-1">
            <i class="fas fa-home text-white text-xl"></i>
          </div>
          <p class="text-xl font-semibold text-black">Housing</p>
        </router-link>
        <router-link to="membership-registration" class="quick-link-item hover:bg-gray-200 p-4 rounded-md text-center transition duration-300 transform hover:scale-105">
          <div class="icon-container bg-blue-500 rounded-full p-1">
            <i class="fas fa-clipboard-check text-white text-xl"></i>
          </div>
          <p class="text-xl font-semibold text-black">Member Registration</p>
        </router-link>
        <router-link to="/faqs" class="quick-link-item hover:bg-gray-200 p-4 rounded-md text-center transition duration-300 transform hover:scale-105">
          <div class="icon-container bg-blue-500 rounded-full p-1">
            <i class="fas fa-question text-white text-xl"></i>
          </div>
          <p class="text-xl font-semibold text-black">FAQs</p>
        </router-link>
        <router-link to="/member-support" class="quick-link-item hover:bg-gray-200 p-4 rounded-md text-center transition duration-300 transform hover:scale-105">
          <div class="icon-container bg-blue-500 rounded-full p-1">
            <i class="fas fa-headset text-white text-xl"></i>
          </div>
          <p class="text-xl font-semibold text-black">Member Support</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import QuickLinks from "./QuickLinks.vue";

export default {
  name: "ContactUsSection",
    components: {QuickLinks},
};
</script>

<style scoped>
.contact-us-section {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Lighter box shadow */
  padding: 50px; /* Increased padding for more space */
}

.btn-ready {
  display: inline-block;

  color: #fff; /* White text color */
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-ready:hover {
  background-color: #2980b9; /* Darker shade of blue on hover */
  transform: scale(1.05); /* Increase size on hover */
}
</style>
