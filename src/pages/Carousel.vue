<template>
  <div class="image-slider">
    <Splide :options="sliderOptions" aria-label="My Favorite Images">
      <SplideSlide>
        <img src="../assets/images/agm.jpg" alt="Sample 1">
      </SplideSlide>
      <SplideSlide>
        <img src="../assets/images/agm.jpg" alt="Sample 2">
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup>
import '@splidejs/vue-splide/css';

const sliderOptions = {
  rewind: true,
  perPage: 1, // Show one image at a time
  arrows: true, // Show navigation arrows
  autoplay: true, // Autoplay the slider
  interval: 3000, // Set the autoplay interval to 3 seconds
};
</script>

<style scoped>
.image-slider {
  @apply mx-auto max-w-lg; 
}

.image-slider img {
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
