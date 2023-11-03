<template>
  <div class="partners-carousel m-5">
  <p class="text-center text-4xl p-3">Our Parners</p>
    <carousel :autoplay="true" :autoplay-speed="3000" :pagination-enabled="true" class="flex justify-center space-x-10">
      <!-- Safarcom -->
      <slide>
        <div class="partner-logo">
          <img src="../assets/images/agm.jpg" alt="Safarcom" />
        </div>
      </slide>

      <!-- NHIF -->
      <slide>
        <div class="partner-logo">
          <img src="../assets/images/agm.jpg" alt="NHIF" />
        </div>
      </slide>

      <!-- NSSF -->
      <slide>
        <div class="partner-logo">
          <img src="../assets/images/agm.jpg" alt="NSSF" />
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
    name: "PartnersCarousel",
};
</script>

<style scoped>
.partners-carousel {
  padding: 20px;
}

.partner-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* Adjust the height as needed */
}

.partner-logo img {
  max-width: 100%;
  max-height: 100%;
}
</style>
