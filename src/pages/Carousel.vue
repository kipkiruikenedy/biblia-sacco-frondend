<template>
  <div class="flex items-center justify-center">
    <div class="image-slider relative h-90vh w-100vw overflow-hidden">

      <Splide :options="sliderOptions" aria-label="Image Slider">
        <SplideSlide>
          <div class="slide-content">
            <div class="aspect-w-16 aspect-h-9">
              <img src="../images/imagea.jpg" alt="Reception" class="object-cover w-full h-[85vh]">
            </div>
            <div class="slider-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-8 z-10 bg-black bg-opacity-30 flex flex-col">
              <span class="font-normal text-sm md:font-bold md:text-4xl mb-4">SAVE </span>
              <span class="font-normal text-sm md:text-lg">
               Save with us and earn a reputable dividend at the end of the year.
              </span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="slide-content">
            <div class="aspect-w-16 aspect-h-9">
              <img src="../images/reception.jpg" alt="AGM" class="object-cover w-full h-[85vh]">
            </div>
            <div class="slider-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-8 z-10 bg-black bg-opacity-30 flex flex-col">
              <span class="font-normal text-sm md:font-bold md:text-4xl mb-4">BORROW </span>
              <span class="font-normal text-sm md:text-lg">
               Your deposit guarantees you to borrow 3 times your savings and even a top-up loan is added if the need arises.
              </span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="slide-content">
            <div class="aspect-w-16 aspect-h-9">
              <img src="../images/reception.jpg" alt="Members" class="object-cover w-full h-[85vh]">
            </div>
            <div class="slider-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-8 z-10 bg-black bg-opacity-30 flex flex-col">
              <span class="font-normal text-sm md:font-bold md:text-4xl mb-4"> INVEST</span>
              <span class="font-normal text-sm md:text-lg">
              The more you invest, the more your future brightens each day as you borrow to build yourself in society.
              </span>
            </div>
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
  interval: 7000,
};
</script>

<style scoped>
.image-slider {
  @apply mx-auto relative;
  height: 90vh;
  width: 100vw;
  z-index: -50;
}

.slider-text {
  @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-8 z-10;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.slide-content {
  @apply relative;
  height: 100%; /* Ensure the container takes the full height of the parent */
}

.aspect-w-16 {
  width: 100%; /* Ensure all images have the same width */
}

.aspect-h-9 {
  height: 100%; /* Ensure all images have the same height */
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
