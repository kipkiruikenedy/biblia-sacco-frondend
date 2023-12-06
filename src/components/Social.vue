<template>
  <div class="social-media-icons z-500 space-x-2">
    <a href="#" class="social-icon bg-blue-500" target="_blank">
      <i class="fab fa-facebook"></i>
    </a>
    <a href="https://wa.me/254115643375" class="social-icon bg-blue-500" target="_blank">
      <i class="fab fa-whatsapp"></i>
    </a>
    <a href="#" class="social-icon bg-blue-500" target="_blank">
      <i class="fab fa-twitter"></i>
    </a>
   <a href="https://instagram.com/biblia_nwdt_sacco?utm_source=qr&igshid=OGIxMTE0OTdkZA==" class="social-icon bg-blue-500" target="_blank">
      <i class="fab fa-instagram"></i>
    </a>
  </div>
</template>

<style scoped>
.social-media-icons {
  display: flex;
  align-items: center;
 
}

.social-icon {
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 50%;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;
}

.social-icon:hover {
  background-color: #2980b9; /* Darker shade of blue on hover */
  transform: scale(1.2); /* Scale up on hover */
}
</style>
