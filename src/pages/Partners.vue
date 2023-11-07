<template>
  <div class="image-slider">
    <Splide :options="sliderOptions" aria-label="My Favorite Images">
      <SplideSlide>
        <div class="splide1">
          <img src="../assets/images/cooperative ministry.png" alt="Sample 1">
        <img src="../assets/images/KRA.png" alt="Sample 2">
        <img src="../assets/images/nssf.png" alt="Sample 3">
        <img src="../assets/images/NHIF.png" alt="Sample 4">
      </div>
        
      </SplideSlide>
      <SplideSlide>
        <div class="splide1">
        <img src="../assets/images/cooperative ministry.png" alt="Sample 2">
        <img src="../assets/images/nssf.png" alt="Sample 3">
        <img src="../assets/images/NHIF.png" alt="Sample 4">
        <img src="../assets/images/KRA.png" alt="Sample 2">
        </div>
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
  /* background-color: red; */
  max-width: 100vw;
  max-height: 48vh;
  overflow: hidden;
}

/* .image-slider img {
  display: flex;
  flex-direction: row;
  width: 30;
  height: auto;
  object-fit: cover;
  background-color: blue;
} */
.splide1{
  display: flex;

}
.splide1>*{
  display: block;
  max-width: 20%;
  height:auto;
  margin-inline: 2%;
  margin-top: 2%;
  margin-bottom: 2%;

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
