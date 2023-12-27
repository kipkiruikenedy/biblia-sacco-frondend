<template>
  <div class="flex space-x-2">
  

    <!-- Container for the rest of the content -->
    <div class="flex-grow">
      <Header />
      <NavBar />
    </div>
  </div>
</template>

<script setup>
import NavBar from "./NavBar.vue";
import Header from "./Header.vue";
</script>
