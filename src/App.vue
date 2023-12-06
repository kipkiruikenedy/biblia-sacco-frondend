<script setup>
import NavHeaderComponent from './components/NavHeaderComponent.vue'

import Footer from './components/Footer.vue'
import CookieConsent from './components/CookieConsent.vue'
import { ref, onMounted } from 'vue'
import VueCookies from 'vue-cookies'
import { injectEventBus } from './components/eventBusCookie.js';

const eventBus = injectEventBus();

const showCookieBanner = ref(false)

const acceptPrivacyPolicy = () => {
  VueCookies.set('acceptedPrivacyPolicy', 'true', 365) // Set the cookie to expire in 365 days
  // You can also add other logic you need after accepting the policy
  hideCookieBanner()
}

const rejectPrivacyPolicy = () => {
  VueCookies.set('acceptedPrivacyPolicy', 'false', 365) // Set the cookie to expire in 365 days
  hideCookieBanner()
}

const hideCookieBanner = () => {
  showCookieBanner.value = false
}

onMounted(() => {
  const consent = VueCookies.get('acceptedPrivacyPolicy')
  if (!consent) {
    showCookieBanner.value = true
  }
})
</script>

<template>
  <div>
   <NavHeaderComponent />
    <router-view></router-view>
    <Footer />

    <CookieConsent v-if="showCookieBanner" @accept="acceptPrivacyPolicy" @reject="rejectPrivacyPolicy" />
  </div>
</template>
