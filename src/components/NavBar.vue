<template>
  <div class="hidden md:block">
    <nav class="bg-black py-2 sticky top-0 z-1000 hover:z-50">
      <div class="container mx-auto flex items-center justify-between">
        <div class="text-white flex space-x-4">
          <router-link to="/" class="hover:bg-blue-500 pointer-cursor px-2">Home</router-link>
          <router-link to="/about" class="hover:bg-blue-500 pointer-cursor">About Us</router-link>

          <div class="relative group" @mouseenter="showDropdown('knowMore')" @mouseleave="hideDropdown('knowMore')">
            <span class="hover:bg-blue-500 pointer-cursor p-3">Know More</span>
            <div class="absolute bg-white mt-2 p-2 space-y-2 w-40" v-show="showKnowMoreMenu" @mouseenter="showDropdown('knowMore')" @mouseleave="hideDropdown('knowMore')">
              <router-link to="/membership-registration">Membership Registration</router-link>
              <router-link to="/member-support">Member Support</router-link>
              <router-link to="/downloads">Downloads</router-link>
              <router-link to="/gallery">Gallery</router-link>
              <router-link to="/faqs">FAQs</router-link>
            </div>
          </div>

          <div class="relative group" @mouseenter="showDropdown('products')" @mouseleave="hideDropdown('products')">
            <span class="hover:bg-blue-500 pointer-cursor p-3">Products</span>
            <div class="absolute bg-white mt-2 p-2 space-y-2 w-40" v-show="showProductsMenu" @mouseenter="showDropdown('products')" @mouseleave="hideDropdown('products')">
              <router-link to="/loan">Loan</router-link>
              <router-link to="/savings">Savings</router-link>
              <router-link to="/housing-scheme">Housing Scheme</router-link>
            </div>
          </div>

          <div class="relative group" @mouseenter="showDropdown('governance')" @mouseleave="hideDropdown('governance')">
            <span class="hover:bg-blue-500 pointer-cursor p-3">Governance</span>
            <div class="absolute bg-white mt-2 p-2 space-y-2 w-40" v-show="showGovernanceMenu" @mouseenter="showDropdown('governance')" @mouseleave="hideDropdown('governance')">
              <router-link to="/organization-structure">Organization Structure</router-link>
              <router-link to="/agm">AGM</router-link>
            </div>
          </div>

          <!-- Add code for other dropdown menus -->

          <router-link to="/career" class="hover:bg-blue-500 pointer-cursor">Career</router-link>
          <router-link to="/contact" class="hover:bg-blue-500 pointer-cursor">Contact Us</router-link>
        </div>
        <a href="https://portal.bibliasacco.com/user/login" class="font-semibold mr-4 bg-blue-500 hover:bg-blue-600 py-2 px-2 rounded-lg">Member Portal</a>
      </div>
    </nav>
  </div>

  <!-- MOBILE PHONE MENU -->
  <div class="flex z-1000 justify-between md:hidden">
    <nav class=" flex bg-black py-2 sticky top-0 z-1000 hover:z-50">
      <div class="container mx-auto flex flex-col items-start justify-between p-2">
        <div @click="toggleMenu" class="text-red-900 cursor-pointer">
          <span class="bg-black hover:bg-blue-500 p-3"><i class="fas fa-bars text-white"></i>
</span>
        </div>

        <div v-show="isMenuOpen" class="text-white flex flex-col space-y-2">
          <router-link to="/" @click="closeMenu" class="hover:bg-blue-500 px-2">Home</router-link>
          <router-link to="/about" @click="closeMenu" class="hover:bg-blue-500">About Us</router-link>

          <!-- Know More dropdown -->
          <div class="relative group" @mouseenter="showDropdown('knowMore')" @mouseleave="hideDropdown('knowMore')">
            <span class="hover:bg-blue-500 pointer-cursor p-3">Know More</span>
            <div class="absolute bg-white mt-2 p-2 space-y-2 w-40" v-show="showKnowMoreMenu" @mouseenter="showDropdown('knowMore')" @mouseleave="hideDropdown('knowMore')">
              <router-link to="/membership-registration">Membership Registration</router-link>
              <router-link to="/member-support">Member Support</router-link>
              <router-link to="/downloads">Downloads</router-link>
              <router-link to="/gallery">Gallery</router-link>
              <router-link to="/faqs">FAQs</router-link>
            </div>
          </div>

          <!-- Products dropdown -->
          <div class="relative group" @mouseenter="showDropdown('products')" @mouseleave="hideDropdown('products')">
            <span class="hover:bg-blue-500 pointer-cursor p-3">Products</span>
            <div class="absolute bg-white mt-2 p-2 space-y-2 w-40" v-show="showProductsMenu" @mouseenter="showDropdown('products')" @mouseleave="hideDropdown('products')">
              <router-link to="/loan">Loan</router-link>
              <router-link to="/savings">Savings</router-link>
              <router-link to="/housing-scheme">Housing Scheme</router-link>
            </div>
          </div>

          <!-- Governance dropdown -->
          <div class="relative group" @mouseenter="showDropdown('governance')" @mouseleave="hideDropdown('governance')">
            <span class="hover:bg-blue-500 pointer-cursor p-3">Governance</span>
            <div class="absolute bg-white mt-2 p-2 space-y-2 w-40" v-show="showGovernanceMenu" @mouseenter="showDropdown('governance')" @mouseleave="hideDropdown('governance')">
              <router-link to="/organization-structure">Organization Structure</router-link>
              <router-link to="/agm">AGM</router-link>
            </div>
          </div>

          <!-- Other menu items -->
          <!-- Add code for other dropdown menus -->

          <router-link to="/career" @click="closeMenu" class="hover:bg-blue-500">Career</router-link>
          <router-link to="/contact" @click="closeMenu" class="hover:bg-blue-500">Contact Us</router-link>
             <a href="https://portal.bibliasacco.com/user/login" class="mr-4 bg-blue-500 py-1 px-1  hover:bg-blue-600 md:py-2 md:px-2 rounded-lg">Member Portal</a>
        </div>

      </div>

    </nav>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const showKnowMoreMenu = ref(false);
const showProductsMenu = ref(false);
const showGovernanceMenu = ref(false);

const showDropdown = (menu) => {
  showKnowMoreMenu.value = menu === 'knowMore';
  showProductsMenu.value = menu === 'products';
  showGovernanceMenu.value = menu === 'governance';
};

const hideDropdown = (menu) => {
  showKnowMoreMenu.value = showProductsMenu.value = showGovernanceMenu.value = false;
};

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
/* Add custom styles for the drop-down menus */

.group {
  position: relative;
}

.absolute {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  z-index: 10;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.group:hover .absolute {
  display: block;
}

.absolute a {
  display: block;
  padding: 8px 10px;
  color: #333;
  text-decoration: none;
}

.absolute a:hover {
  background-color: #f0f0f0;
}
</style>
