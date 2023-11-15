<template>
  <div class="flex items-center justify-center h-screen">
    <div class="image-slider relative h-90vh w-100vw">
      <div class="slider-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-6 z-10">
        <span class="font-bold text-5xl mb-4 hover-effect">SAVE | BORROW | INVEST</span>
        <span class="text-lg hover-effect">
          SAVE WITH US AND PROSPER WITH YOUR SAVINGS AS YOU GROW TOWARDS YOUR FUTURE.
        </span>
      </div>
      <Splide :options="sliderOptions" aria-label="My Favorite Images">
        <SplideSlide>
          <img src="../assets/images/home2.jpg" alt="Sample 1">
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/images/reception.jpg" alt="Sample 2">
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/images/home1.jpg" alt="Sample 3">
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script setup>
import '@splidejs/vue-splide/css';
const sliderOptions = {
  rewind: true,
  perPage: 1,
  arrows: true,
  autoplay: true,
  interval: 1000,
};
</script>

<style scoped>
.image-slider {
  @apply mx-auto relative;
  height: 90vh; /* Set the height to 90% of the viewport height */
  width: 100vw; /* Set the width to 100% of the viewport width */
  overflow: hidden;
}

.slider-text {
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black background */
  padding: 30px; /* Adjust padding as needed */
  border-radius: 10px;
  z-index: 10; /* Ensure the text is on top of the image */
  animation: dance 5s infinite alternate; /* Add continuous animation */
}

@keyframes dance {
  0% {
    transform: scale(1) translateX(0) rotate(0);
  }
  100% {
    transform: scale(1.1) translateX(2px) rotate(2deg);
  }
}

.hover-effect {
  display: inline-block;
  transition: transform 0.3s ease-in-out, font-size 0.3s ease-in-out;
}

.hover-effect:hover {
  transform: scale(1.1) translateX(2px) rotate(2deg);
  font-size: 1.1em;
}

.image-slider img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
