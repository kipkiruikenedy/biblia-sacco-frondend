<template>
  <div class="container mx-auto flex justify-center items-center py-6">
    <!-- Quick Links Section -->
    <div class="quick-links w-1/2">
      <h4 class="text-2xl font-semibold mb-4 text-blue-500">Quick Links</h4>
      <div class="grid grid-cols-3 gap-4">
        <router-link to="/loans" class="quick-link-item hover:bg-gray-200 p-4 rounded-md text-center">
          <div class="icon-container bg-green-500 rounded-full p-2">
            <i class="fas fa-hand-holding-usd text-white"></i>
          </div>
          <p>Loans</p>
        </router-link>
        <router-link to="/savings" class="quick-link-item hover:bg-gray-200 p-4 rounded-md text-center">
          <div class="icon-container bg-yellow-500 rounded-full p-2">
            <i class="fas fa-piggy-bank text-white"></i>
          </div>
          <p>Savings</p>
        </router-link>
        <router-link to="/housing" class="quick-link-item hover:bg-gray-200 p-4 rounded-md text-center">
          <div class="icon-container bg-purple-500 rounded-full p-2">
            <i class="fas fa-home text-white"></i>
          </div>
          <p>Housing</p>
        </router-link>
        <router-link to="/register" class="quick-link-item hover:bg-gray-200 p-4 rounded-md text-center">
          <div class="icon-container bg-blue-500 rounded-full p-2">
            <i class="fas fa-clipboard-check text-white"></i>
          </div>
          <p>Register</p>
        </router-link>
        <router-link to="/faqs" class="quick-link-item hover:bg-gray-200 p-4 rounded-md text-center">
          <div class="icon-container bg-red-500 rounded-full p-2">
            <i class="fas fa-question text-white"></i>
          </div>
          <p>FAQs</p>
        </router-link>
        <router-link to="/support" class="quick-link-item hover:bg-gray-200 p-4 rounded-md text-center">
          <div class="icon-container bg-orange-500 rounded-full p-2">
            <i class="fas fa-headset text-white"></i>
          </div>
          <p>Support</p>
        </router-link>
      </div>
    </div>

    <!-- Vertical Line -->
    <div class="vertical-line border-l border-gray-300 h-full mx-8"></div>

    <!-- Who We Are Section -->
    <div class="who-we-are w-1/2 p-8 bg-white rounded-lg shadow-md">
      <h4 class="text-3xl font-semibold mb-4 text-blue-500">Who We Are</h4>
      <p class="text-gray-700 leading-relaxed">
        Biblia Sacco is a leading Evangelical Christian Savings and Credit Co-operative Society in Kenya for workers of churches, NGOs, Schools including Universities, Hospitals, Media houses, and others.
      </p>
      <p class="text-gray-700 leading-relaxed mt-4">
        Biblia Sacco gives you a vehicle for savings and an opportunity to access competitive credit for growing your money with nothing but your regular savings and attractive interest rates.
      </p>
      <router-link to="/about">
        <button class="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md">Read More</button>
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
  border-left: 2px solid #ccc; /* Vertical line color */
}

/* Additional styles for Who We Are section */
.who-we-are {
  background-color: #fff; /* White background color */
}

.who-we-are p {
  font-size: 1.2rem; /* Increase font size for better readability */
}
</style>
