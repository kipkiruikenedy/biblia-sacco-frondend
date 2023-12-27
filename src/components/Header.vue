<template>
  <header class=" py-4  bg-black text-white">
    <div class="container md:mx-auto md:flex justify-between items-center">
      <!-- Logo or Site Name (Add your own logo or site name here) -->
    <div class="flex justify-center  p-2">
      <a href="/">
        <img src="../assets/images/log.jpg" alt="Bibilia Sacco Logo" class="w-10 rounded text-center" />
      </a>
    </div>
      <!-- Contact Information -->
      <div class="text-blue-500 flex items-center flex flex-col md:flex-row">
        <div class="mr-4 hidden md:block">
          <i class="fas fa-phone text-yellow-500"></i>
        </div>
        <div>
          <p class="text-sm font-bold text-white flex flex-col md:flex-row">
          <span>+254721 393 609 </span><span class="font-extrabold px-1 text-yellow-500"></span><span> +254111 030 700</span></p>
        </div>

  <div class="text-blue-500 flex items-center ml-2">
        <div class="mr-4 hidden md:block">
          <i class="fas fa-envelope text-yellow-500"></i>
        </div>
        <div>
          <p class="text-sm font-bold text-white">info@bibliasacco.com</p>
        </div>
      </div>

      </div>


      <Social />
    
    </div>
  </header>
</template>

<script setup>
import Social from "./Social.vue";
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
