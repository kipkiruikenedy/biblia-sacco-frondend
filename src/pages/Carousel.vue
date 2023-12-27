<template>
  <div class="flex items-center justify-center">
    <div class="image-slider relative h-90vh w-100vw overflow-hidden">
      <div class="slider-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-8 z-10 bg-black bg-opacity-30">
        <span class="font-normal text-sm md:font-bold md:text-5xl mb-4">SAVE | BORROW | INVEST</span>
        <span class="font-normal text-sm md:text-lg">
          SAVE WITH US AND PROSPER WITH YOUR SAVINGS AS YOU GROW TOWARDS YOUR FUTURE.
        </span>
      </div>
      <Splide :options="sliderOptions" aria-label="Image Slider">
        <SplideSlide>
          <div class="aspect-w-16 aspect-h-9">
            <img src="../assets/images/reception.jpg" alt="Reception" class="object-cover w-full h-full">
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="aspect-w-16 aspect-h-9">
            <img src="../assets/images/reception.jpg" alt="AGM" class="object-cover w-full h-full">
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="aspect-w-16 aspect-h-9">
            <img src="../assets/images/reception.jpg" alt="Members" class="object-cover w-full h-full">
          </div>
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
  interval: 3000, // Set the interval to 5 seconds
};
</script>

<style scoped>
.image-slider {
  @apply mx-auto relative;
  height: 90vh;
  width: 100vw;
}

.slider-text {
  @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-8 z-10;
  background-color: rgba(0, 0, 0, 0.3); /* Set the background to be more transparent */
  border-radius: 10px;
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
