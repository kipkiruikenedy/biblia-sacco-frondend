<template>
  <div class="flex justify-center items-center gap-4 mt-8 pt-8">
    <a href="https://portal.bibliasacco.com/user/login" class="custom-button portal-button">
      <span>Member Portal</span>
      <i class="fas fa-arrow-right"></i>
    </a>
    <button class="custom-button apply-now-button">
      <span>Apply Now</span>
      <i class="fas fa-arrow-right"></i>
    </button>
    <button class="custom-button newsletter-button">
      <span>Newsletter</span>
      <i class="fas fa-arrow-right"></i>
    </button>
    <button class="custom-button app-guide-button">
      <span>Mobile App Guide</span>
      <i class="fas fa-arrow-right"></i>
    </button>
  </div>
</template>

<style scoped>
.custom-button {
  @apply bg-green-500 text-white px-6 py-3 rounded-full flex items-center transition duration-300 shadow-md;
}

.custom-button:hover {
  @apply bg-green-600 transform translate-y-[-2px] shadow-lg;
}

.custom-button span {
  @apply mr-2;
}

i {
  @apply text-xl;
}
</style>
