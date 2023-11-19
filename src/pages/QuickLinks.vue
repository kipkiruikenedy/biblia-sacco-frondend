<template>
  <div class="container flex flex-col md:flex-row mx-auto  justify-center items-center py-0 md:py-6">
    <!-- Quick Links Section -->
    <div class="quick-links md:w-1/2">
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
        <router-link to="/housing" class="quick-link-item hover:bg-gray-200 p-4 rounded-md text-center transition duration-300 transform hover:scale-105">
          <div class="icon-container bg-blue-500 rounded-full p-1">
            <i class="fas fa-home text-white text-xl"></i>
          </div>
          <p class="text-xl font-semibold text-black">Housing</p>
        </router-link>
        <router-link to="/register" class="quick-link-item hover:bg-gray-200 p-4 rounded-md text-center transition duration-300 transform hover:scale-105">
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
        <router-link to="/support" class="quick-link-item hover:bg-gray-200 p-4 rounded-md text-center transition duration-300 transform hover:scale-105">
          <div class="icon-container bg-blue-500 rounded-full p-1">
            <i class="fas fa-headset text-white text-xl"></i>
          </div>
          <p class="text-xl font-semibold text-black">Member Support</p>
        </router-link>
      </div>
    </div>

    <!-- Vertical Line -->
    <div class="vertical-line border-l border-blue-500 h-full mx-8"></div>

    <!-- Who We Are Section -->
    <div class="who-we-are md:w-1/2 p-8 bg-white rounded-lg shadow-md">
      <h4 class="text-3xl font-semibold mb-4 text-blue-500 text-center ">Who We Are</h4>
      <p class="text-gray-700 leading-relaxed flex-wrap">
        Biblia Sacco is a leading Evangelical Christian Savings and Credit Co-operative Society in Kenya for workers of churches, NGOs, Schools including Universities, Hospitals, Media houses, and others.
      </p>
      <p class="text-gray-700 leading-relaxed mt-4">
        Biblia Sacco gives you a vehicle for savings and an opportunity to access competitive credit for growing your money with nothing but your regular savings and attractive interest rates.
      </p>
      <router-link to="/about">
        <button class=" bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded-md transition duration-300 transform hover:scale-105 focus:outline-none">
          Read More
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  // Add your component logic here
}
</script>

<style scoped>
/* Add any additional styles if needed */
.vertical-line {
  border-left: 2px solid #3498db; /* Blue color for the vertical line */
}

/* Additional styles for Who We Are section */
.who-we-are {
  background-color: #fff; /* White background color */
}

.who-we-are p {
  font-size: 1.2rem; /* Increase font size for better readability */
}

/* Enhanced styles for Quick Links */
.quick-link-item {
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.quick-link-item:hover {
  background-color: #f3f3f3; /* Light gray on hover */
}
</style>
