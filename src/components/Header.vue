<template>
  <header class="py-4 sticky top-0 bg-black text-white">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Contact Information -->
      <div class="text-blue-500 flex items-center">
        <div class="mr-4">
          <i class="fas fa-phone text-yellow-500"></i>
        </div>
        <div>
          <p class="text-sm font-bold">0721 393 609, 0111 030 700</p>
        </div>
      </div>

      <!-- Logo or Site Name (Add your own logo or site name here) -->
      <div class="text-2xl font-bold">
        <a href="/" class="text-2xl">Logo</a>
      </div>

      <!-- Email -->
      <div class="text-blue-500 flex items-center">
        <div class="mr-4">
          <i class="fas fa-envelope text-yellow-500"></i>
        </div>
        <div>
          <p class="text-sm font-bold">info@bibliasacco.com</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// No need for the export default in the script setup
</script>

<style scoped>
/* Add your custom styles here */


header a {
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;
}

header a:hover {
  color: #ffd700; /* Change link color on hover */
}
</style>
