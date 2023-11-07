<template>
  <div>
    <div class="button-container mt-8">
      <a href="https://portal.bibliasacco.com/user/login" class="portal-button">
        Member Portal
        <i class="fas fa-arrow-right"></i>
      </a>
      <button class="apply-now-button">
        Apply Now
        <i class="fas fa-arrow-right"></i>
      </button>
      <button class="newsletter-button">
        Newsletter
        <i class="fas fa-arrow-right"></i>
      </button>
      <button class="app-guide-button">
        Mobile Application Guide
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.portal-button,
.apply-now-button,
.newsletter-button,
.app-guide-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.portal-button:hover,
.apply-now-button:hover,
.newsletter-button:hover,
.app-guide-button:hover {
  background-color: #0056b3;
}

i {
  margin-left: 5px;
  font-size: 14px;
}

/* You may need to include the FontAwesome CSS or load it from a CDN for the icons to display properly. */
</style>
