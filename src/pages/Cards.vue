<template>
  <div class="image-slider">
    <Splide :options="sliderOptions" aria-label="Let's Solve Problems">
      <SplideSlide>
        <div class="slide-content bg-white text-black rounded-lg p-8">
          <i class="fas fa-piggy-bank text-6xl mb-4 text-yellow-300"></i>
          <h2 class="text-xl font-semibold mb-2">Save With Us</h2>
          <p class="text-sm">Save With Us and Earn a Reputable Dividend at the End of the year.</p>
          <div class="mt-8">
          <router-link to="/savings" class="btn-read-more">Read More</router-link>
          </div>

        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="slide-content bg-white text-black rounded-lg p-8">
          <i class="fas fa-hand-holding-usd text-6xl mb-4 text-orange-300"></i>
          <h2 class="text-xl font-semibold mb-2">Borrow Your Savings</h2>
          <p class="text-sm">Your Deposit Guarantees you to Borrow 3 times your Savings and even a top-up loan is added if the need arises.</p>
<div class="mt-8">
        <router-link to="/loan" class="btn-read-more">Read More</router-link>
        </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="slide-content bg-white text-black rounded-lg p-8">
          <i class="fas fa-chart-line text-6xl mb-4 text-pink-300"></i>
          <h2 class="text-xl font-semibold mb-2">Invest Wisely</h2>
          <p class="text-sm">The more you Invest, the more your future brightens each day as you borrow to build yourself in the society.</p>
          <div class="mt-8">
        <router-link to="/savings" class="btn-read-more">Read More</router-link>
       </div>
          </div>
      </SplideSlide>
      <!-- ... (other SplideSlides) ... -->
    </Splide>
  </div>
</template>

<script setup>
import '@splidejs/vue-splide/css';
const sliderOptions = {
  rewind: true,
  perPage: 1,
  arrows: true,
  autoplay: true,
  interval: 3000,
};
</script>

<style scoped>
.image-slider {
  @apply mx-auto max-w-lg;
  max-width: 100vw;
  max-height: 48vh;
  overflow: hidden;
}

.slide-content {
  @apply relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.slide-content i {
  font-size: 4em; /* Increased size */
}

.btn-read-more {
  @apply absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors duration-300;
}

.splide__arrow {
  @apply text-white bg-opacity-50 p-2 rounded-full text-xl;
  transition: background 0.3s, color 0.3s;
}

.splide__arrow:hover {
  @apply bg-gray-800; /* Change to a neutral color on hover */
}

.splide__arrow.prev {
  @apply left-4;
}

.splide__arrow.next {
  @apply right-4;
}

.splide__pagination {
  @apply mt-4;
}

.splide__pagination__page {
  @apply w-4 h-4 bg-gray-300 rounded-full m-2 cursor-pointer;
}

.splide__pagination__page.splide__pagination__page--active {
  @apply bg-gray-800; /* Change to a neutral color for the active page */
}
</style>
