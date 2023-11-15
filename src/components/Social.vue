<template>
  <div class="social-media-icons">
    <a href="#" class="social-icon bg-blue-500" target="_blank">
      <i class="fab fa-facebook"></i>
    </a>
    <a href="https://wa.me/254799463307" class="social-icon bg-blue-500" target="_blank">
      <i class="fab fa-whatsapp"></i>
    </a>
    <a href="#" class="social-icon bg-blue-500" target="_blank">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="#" class="social-icon bg-blue-500" target="_blank">
      <i class="fab fa-instagram"></i>
    </a>
  </div>
</template>

<style scoped>
.social-media-icons {
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
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
