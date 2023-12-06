<template>
  <div class="flex space-x-2">
    <!-- Logo or Site Name (Add your own logo or site name here) -->
    <div class="text-center p-2">
      <a href="/">
        <img src="../assets/images/log.jpg" alt="Bibilia Sacco Logo" class="w-10 rounded text-center" />
      </a>
    </div>

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
