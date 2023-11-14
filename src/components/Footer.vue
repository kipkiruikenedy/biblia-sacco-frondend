<template>
  <footer class="footer">
    <div class="container mx-auto flex flex-wrap justify-between items-center py-6">
      <div class="flex flex-wrap justify-center items-center space-x-8">
        <div class="mb-4 md:mb-0">
          <h4 class="text-2xl font-semibold mb-4 text-white">Quick Links</h4>
          <ul class="text-white grid grid-cols-3 gap-x-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Know More</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Governance</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div class="mb-4 md:mb-0">
          <h4 class="text-2xl font-semibold mb-4 text-white">Follow Us</h4>
          <div class="flex space-x-4">
            <a href="#" class="text-4xl text-white"><i class="fab fa-facebook"></i></a>
            <a href="#" class="text-4xl text-white"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-4xl text-white"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center space-x-8">
        <div class="mt-4 md:mt-0">
          <a href="https://wa.me/254799463307" target="_blank" class="whatsapp-button">
            <i class="fab fa-whatsapp"></i>
            Chat on WhatsApp
          </a>
          <button class="chatbot-button" @click="openChatbot">
            <i class="fas fa-robot"></i>
            Chat with Chatbot
          </button>
        </div>
      </div>
    </div>
    <div class="p-6">
      <p class="text-lg text-white text-center">&copy; 2023 Biblia Sacco Ltd</p>
    </div>
  </footer>
</template>

<style scoped>
/* Additional CSS styles for further decoration */
.footer {
  background-color: #333; /* Dark background color */
  color: #fff; /* Text color */
  padding: 20px 0;
}

.footer h4 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.footer ul {
  list-style: none;
  padding: 0;
}

.footer li {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.footer a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer a:hover {
  color: #ffbb00;
}

.whatsapp-button,
.chatbot-button {
  display: flex;
  align-items: center;
  background-color: #25d366; /* WhatsApp Green */
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  text-decoration: none;
}

.whatsapp-button i,
.chatbot-button i {
  margin-right: 10px;
}

.whatsapp-button:hover,
.chatbot-button:hover {
  background-color: #128C7E; /* Darker shade of WhatsApp Green */
}
</style>
