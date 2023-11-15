<template>
  <div class="image-slider">
    <Splide :options="sliderOptions" aria-label="Let's Solve Problems">
      <SplideSlide>
        <div class="slide-content bg-blue-500 text-white rounded-lg p-8">
          <i class="fas fa-piggy-bank text-5xl mb-4"></i>
          <h2 class="text-xl font-semibold mb-2">Save With Us</h2>
          <p class="text-sm">Save With Us and Earn a Reputable Dividend at the End of the year.</p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="slide-content bg-green-500 text-white rounded-lg p-8">
          <i class="fas fa-hand-holding-usd text-5xl mb-4"></i>
          <h2 class="text-xl font-semibold mb-2">Borrow Your Savings</h2>
          <p class="text-sm">Your Deposit Guarantees you to Borrow 3 times your Savings and even a top-up loan is added if the need arises.</p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="slide-content bg-purple-500 text-white rounded-lg p-8">
          <i class="fas fa-chart-line text-5xl mb-4"></i>
          <h2 class="text-xl font-semibold mb-2">Invest Wisely</h2>
          <p class="text-sm">The more you Invest, the more your future brightens each day as you borrow to build yourself in the society.</p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="slide-content bg-orange-500 text-white rounded-lg p-8">
          <i class="fas fa-graduation-cap text-5xl mb-4"></i>
          <h2 class="text-xl font-semibold mb-2">Education Made Easy</h2>
          <p class="text-sm">In this generation, Education is mandatory to all people. The Sacco gives you a loan to ease your struggle.</p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="slide-content bg-indigo-500 text-white rounded-lg p-8">
          <i class="fas fa-home text-5xl mb-4"></i>
          <h2 class="text-xl font-semibold mb-2">Housing For You</h2>
          <p class="text-sm">Housing Projects are done within the Sacco. Lands are bought and displayed to members.</p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="slide-content bg-red-500 text-white rounded-lg p-8">
          <i class="fas fa-plane text-5xl mb-4"></i>
          <h2 class="text-xl font-semibold mb-2">Holiday Plan Loan</h2>
          <p class="text-sm">Do you want to go somewhere? This is the best loan for you.</p>
        </div>
      </SplideSlide>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.slide-content i {
  font-size: 3em; /* Increased size */
}

.splide__arrow {
  @apply text-white bg-opacity-50 p-2 rounded-full text-xl;
  transition: background 0.3s, color 0.3s;
}

.splide__arrow:hover {
  @apply bg-red-500;
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
  @apply bg-red-500;
}
</style>
