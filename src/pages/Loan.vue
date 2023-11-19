<template>
  <div>
    <!-- Header Section with Background Image -->
    <div class="relative h-60">
      <img class="w-full h-full object-cover" src="../assets/images/agm.jpg" alt="Header Background Image" />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h2 class="text-4xl font-extrabold">Loan Services</h2>
      </div>
    </div>

    <!-- Main Content Section -->
    <div class="container mx-auto p-6 mt-6">
      <!-- Loan Terms Section -->
      <section class="mb-8">
        <h2 class="text-3xl font-bold text-indigo-500 mb-2">
          <i class="fas fa-file-contract mr-2"></i> Loan Terms
        </h2>
        <p class="text-gray-600 mb-4">Explore our loan terms and policies to make informed decisions.</p>
       <ul class="pl-6 text-gray-800 list-disc">
  <li class="mb-2">A member qualifies for a loan after saving for 6 months continuously.</li>
  <li class="mb-2">A loan must be fully guaranteed.</li>
  <li class="mb-2">A member who withdraws from the Society and rejoins later shall be treated as a new member for the purposes of the loan policy.</li>
  <li class="mb-2">All required attachments on the loan form must be attached.</li>
</ul>

      </section>

      <!-- Loan Features Section -->
      <section>
        <h2 class="text-3xl font-bold text-yellow-500 mb-2">
          <i class="fas fa-star mr-2"></i> Loan Features
        </h2>
        <LoanFeatures />
      </section>
    </div>
  </div>
</template>

<script setup>
import LoanFeatures from "./LoanFeatures.vue";
</script>
