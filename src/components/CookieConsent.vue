<template>
  <div>
    <div v-if="showOverlay" class="overlay"></div>
    <div v-if="showBanner" class="cookie-consent fixed top-[50vh]  w-full bg-gray-900 text-white p-8 text-center z-50">
      <p class="text-lg mb-4">
        This website uses cookies to ensure you get the best experience. By using our website, you agree to our use of cookies and privacy policy.
      </p>
      <router-link to="/privacy-policy" class="text-blue-400 underline mb-4">Read our Privacy Policy</router-link>
      <div class="flex justify-center mt-4">
        <button @click="acceptCookies" class="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 mr-2">
          Accept
        </button>
        <button @click="rejectCookies" class="border border-white text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">
          Reject
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Cookies from 'js-cookie';
import { injectEventBus } from './eventBusCookie.js';

const eventBus = injectEventBus();

const showOverlay = ref(true);
const showBanner = ref(true);

onMounted(() => {
  const consent = Cookies.get('cookieConsent');
  if (consent === 'accepted' || consent === 'rejected') {
    showBanner.value = false;
    showOverlay.value = false;
    enableScroll();
  } else {
    disableScroll();
  }
});

const acceptCookies = () => {
  Cookies.set('cookieConsent', 'accepted', { expires: 365 });
  hideCookieBanner();
};

const rejectCookies = () => {
  Cookies.set('cookieConsent', 'rejected', { expires: 365 });
  hideCookieBanner();
};

const hideCookieBanner = () => {
  showBanner.value = false;
  showOverlay.value = false;
  enableScroll();
};

const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
  document.body.style.overflow = '';
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 49; /* Set below the z-index of the cookie consent banner */
}
</style>
