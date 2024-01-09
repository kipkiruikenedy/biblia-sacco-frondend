<template>
  <div class="card-container">
    <div class="card">
      <div class="card-content bg-gradient-to-br from-blue-300 to-blue-500 text-white p-6 rounded-lg shadow-lg">
        <i class="fas fa-piggy-bank text-6xl mb-4"></i>
        <h2 class="text-2xl font-semibold mb-2">Save With Us</h2>
        <p class="text-sm">Save with us and earn a reputable dividend at the end of the year.</p>
        <div class="mt-6">
          <router-link to="/savings" class="btn-read-more">Read More</router-link>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-content bg-gradient-to-br from-blue-300 to-blue-500 text-white p-6 rounded-lg shadow-lg">
        <i class="fas fa-hand-holding-usd text-6xl mb-4"></i>
        <h2 class="text-2xl font-semibold mb-2">Borrow Your Savings</h2>
        <p class="text-sm">Your deposit guarantees you to borrow 3 times your savings and even a top-up loan is added if the need arises.</p>
        <div class="mt-6">
          <router-link to="/loan" class="btn-read-more">Read More</router-link>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-content bg-gradient-to-br from-blue-300 to-blue-500 text-white p-6 rounded-lg shadow-lg">
        <i class="fas fa-chart-line text-6xl mb-4"></i>
        <h2 class="text-2xl font-semibold mb-2">Invest Wisely</h2>
        <p class="text-sm">The more you invest, the more your future brightens each day as you borrow to build yourself in society.</p>
        <div class="mt-6">
          <router-link to="/savings" class="btn-read-more">Read More</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  @apply flex justify-between;
  max-width: 100vw;
}

.card {
  @apply flex-1;
  max-width: 30%;
}

.card-content {
  @apply relative flex flex-col items-center text-center p-8 rounded-lg shadow-lg transition-transform duration-300 transform scale-100 hover:scale-105;
}

.card i {
  font-size: 4em; /* Increased size */
}

.btn-read-more {
  @apply mt-6 px-4 py-2 bg-white text-blue-500 rounded-full text-sm font-semibold hover:bg-blue-100 transition-colors duration-300;
}
</style>
