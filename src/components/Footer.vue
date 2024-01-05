<template>
  <footer class="footer bg-gray-800 text-white">
    <div class="container mx-auto py-8 flex flex-col md:flex-row justify-between items-center">
      <!-- Left section with copyright -->
      <div class="mb-4 md:mb-0 p-5">
        <p class="text-lg">copyright &copy; {{ currentYear }} Biblia Sacco Ltd</p>
      </div>

      <!-- Center section with navigation links -->
      <nav class="flex flex-wrap space-x-4">
          <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/membership-registration">Membership</router-link>
        <router-link to="/member-support">Support</router-link>
        <router-link to="/downloads">Downloads</router-link>
        <router-link to="/gallery">Gallery</router-link>
        <router-link to="/faqs">FAQs</router-link>
        <router-link to="/loan">Loan</router-link>
        <router-link to="/savings">Savings</router-link>
        <router-link to="/housing-scheme">Housing</router-link>
        <router-link to="/organization-structure">Organization</router-link>
        <router-link to="/agm">AGM</router-link>
        <router-link to="/career">Career</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/privacy-policy">Privacy Policy</router-link>
        
      </nav>

    <!-- Right section with contact information and icons -->
      <div class="md:text-right p-5">
        <div class="flex flex-col items-end">
          <p><i class="fas fa-phone"></i> Contact us:</p>
          <p><i class="fas fa-phone"></i> +254721 393 609</p>
          <p><i class="fas fa-phone"></i> +254111 030 700</p>
          <p><i class="fas fa-envelope"></i> <a href="mailto:info@bibliasacco.com">info@bibliasacco.com</a></p>
        </div>
      </div>
      
     <a href="#" class="scroll-to-top text-white bg-blue-500 p-2 rounded hover:bg-blue-600" @click="scrollToTop">
    <i class="fas fa-chevron-up"></i>
  </a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #072541; /* Dark background color */
}
.scroll-to-top {
  position: fixed;
  bottom: 20vh;
  right: 20px;
  z-index: 999; /* Adjust the z-index as needed */
}

.footer p {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

/* Navigation links styles */
nav {
  display: flex;
  flex-wrap: wrap;
}

router-link {
  color: #88c0d0;
  text-decoration: none;
  transition: color 0.3s ease;
}

router-link:hover {
  color: #fff;
}

/* Responsive layout adjustments */
@media (max-width: 767px) {
  .footer {
    padding: 1rem 0;
  }

  .flex-col-reverse {
    flex-direction: column-reverse;
  }
}
</style>
