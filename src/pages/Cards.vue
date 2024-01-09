<template>
  <div class="flex flex-col md:flex-row md:justify-between">
    <div class="card mb-8 md:mb-0">
      <div class="card-content bg-gradient-to-br from-blue-300 to-blue-500 text-white p-6 rounded-lg shadow-lg">
        <i class="fas fa-piggy-bank text-4xl md:text-6xl mb-4"></i>
        <h2 class="text-xl md:text-2xl font-semibold mb-2">Save With Us</h2>
        <p class="text-sm">Save with us and earn a reputable dividend at the end of the year.</p>
        <div class="mt-6">
          <router-link to="/savings" class="btn-read-more">Read More</router-link>
        </div>
      </div>
    </div>

    <div class="card mb-8 md:mb-0">
      <div class="card-content bg-gradient-to-br from-blue-300 to-blue-500 text-white p-6 rounded-lg shadow-lg">
        <i class="fas fa-hand-holding-usd text-4xl md:text-6xl mb-4"></i>
        <h2 class="text-xl md:text-2xl font-semibold mb-2">Borrow Your Savings</h2>
        <p class="text-sm">Your deposit guarantees you to borrow 3 times your savings and even a top-up loan is added if the need arises.</p>
        <div class="mt-6">
          <router-link to="/loan" class="btn-read-more">Read More</router-link>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-content bg-gradient-to-br from-blue-300 to-blue-500 text-white p-6 rounded-lg shadow-lg">
        <i class="fas fa-chart-line text-4xl md:text-6xl mb-4"></i>
        <h2 class="text-xl md:text-2xl font-semibold mb-2">Invest Wisely</h2>
        <p class="text-sm">The more you invest, the more your future brightens each day as you borrow to build yourself in society.</p>
        <div class="mt-6">
          <router-link to="/savings" class="btn-read-more">Read More</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply mb-4 md:mb-0; /* Add margin-bottom for better spacing on mobile */
  max-width: 100%; /* Make sure the cards take the full width on small screens */
}

.card-content {
  @apply relative flex flex-col items-center text-center p-8 rounded-lg shadow-lg transition-transform duration-300 transform scale-100 hover:scale-105;
}

.card i {
  font-size: 4em; /* Decreased size for better mobile experience */
}

.btn-read-more {
  @apply mt-6 px-4 py-2 bg-white text-blue-500 rounded-full text-sm font-semibold hover:bg-blue-100 transition-colors duration-300;
}
</style>
