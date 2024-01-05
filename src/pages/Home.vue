<template>
  <div class="z-100">
<Carousel />
  <QuickLinks />
  <Cards />
   <div class="flex flex-col md:flex-row">
    <Partners class="w-full md:w-3/5" /> <!-- 60% width -->
    <Contact class="block md:w-2/5" />  <!-- 40% width -->
  </div>
<ChartBot />
  </div>
</template>

<script setup>
import ChartBot from "../components/ChartBot.vue";

import QuickLinks from "./QuickLinks.vue";
import Cards from "./Cards.vue"
import Partners from "./Partners.vue"
import Contact from "./Contact.vue"
import Carousel from './Carousel.vue';

</script>
