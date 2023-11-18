<template>
  <div class="p-4 text-white">
    <h1 class="bg-blue-900 text-4xl font-bold mb-8 text-center py-3 px-2 rounded">Discover Our Savings Products</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-blue-900">
      <div v-for="(product, index) in savingsProducts" :key="index" class="flex flex-col items-center">
        <div :class="`bg-${product.color} text-white rounded-full p-6 mb-4`">
          <i :class="`${product.icon} text-5xl`"></i>
        </div>
        <h2 class="text-2xl font-semibold">{{ product.title }}</h2>
        <p class="text-lg mt-4">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const savingsProducts = [
  {
    icon: "fas fa-graduation-cap",
    title: "School Fees Saving Plan",
    description: "Secure your child's education with our School Fees Saving Plan. Members must consistently contribute shares and repay other loans to access this plan. Unlock your savings after 12 months of consistent contributions. Early withdrawals within 12 months will not receive interest.",
    color: "blue-500",
  },
  {
    icon: "fas fa-sun",
    title: "Holiday Savings Plan",
    description: "Enjoy your dream vacations with our Holiday Savings Plan. Members contributing shares and repaying loans consistently are eligible. Access your savings after 12 months of dedicated saving. Early withdrawals within 12 months will not receive interest.",
    color: "black",
  },
  {
    icon: "fas fa-umbrella-beach",
    title: "Retirement Savings Plan",
    description: "Secure your retirement with our Retirement Savings Plan. Plan for your future with Biblia. Unlock your savings after 12 months of consistent contributions. Early withdrawals within 12 months will not receive interest.",
    color: "green-500",
  },
];
</script>

<style scoped>
/* Add any custom styling here */
</style>
