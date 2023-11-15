<template>
  <div>
  <Carousel />
  <QuickLinks />
  <Social />
  <Cards />
   <div class="flex">
    <Partners class="w-3/5" /> <!-- 60% width -->
    <Contact class="w-2/5" />  <!-- 40% width -->
  </div>
<ChartBot />
  </div>
</template>

<script setup>
import ChartBot from "../components/ChartBot.vue"
import Social from "../components/Social.vue"
import QuickLinks from "./QuickLinks.vue";
import Cards from "./Cards.vue"
import Partners from "./Partners.vue"
import Contact from "./Contact.vue"
import Carousel from './Carousel.vue';

</script>
