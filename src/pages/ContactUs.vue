<template>
  <div class="contact-page bg-gray-100 text-gray-800 p-6">
    <div class="relative">
      <img
        src="../images/agm.jpg"
        alt="Contact Us"
        class="w-full h-64 object-cover rounded-lg shadow-lg"
      />
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
    </div>

    <div class="contact-layout grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 p-4">
      <!-- Contact Form -->
      <div class="contact-form bg-white rounded-lg shadow-lg p-4">
        <h2 class="text-2xl font-semibold mb-4">Get in Touch</h2>

        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label class="block text-gray-700 font-semibold" for="name">
              <i class="fas fa-user text-blue-500 mr-2"></i>Name*
            </label>
            <input
              type="text"
              id="name"
              class="w-full p-2 border rounded-lg"
              v-model="name"
              placeholder="Full Name"
              required
            />
          </div>
               <div class="mb-4">
            <label class="block text-gray-700 font-semibold" for="email">
              <i class="fas fa-envelope text-blue-500 mr-2"></i>Phone*
            </label>
            <input
              type="email"
              id="email"
              class="w-full p-2 border rounded-lg"
              v-model="email"
              placeholder="0712345678"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-semibold" for="email">
              <i class="fas fa-envelope text-blue-500 mr-2"></i>Email
            </label>
            <input
              type="email"
              id="email"
              class="w-full p-2 border rounded-lg"
              v-model="email"
              placeholder="Email"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-semibold" for="subject">
              <i class="fas fa-pen text-blue-500 mr-2"></i>Subject*
            </label>
            <input
              type="text"
              id="subject"
              class="w-full p-2 border rounded-lg"
              v-model="subject"
              placeholder="Subject"
              required
            />
          </div>

          <div class="mb-6">
            <label class="block text-gray-700 font-semibold" for="message">
              <i class="fas fa-comment text-blue-500 mr-2"></i>Message Us...
            </label>
            <textarea
              id="message"
              class="w-full p-2 border rounded-lg h-32"
              v-model="message"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
 <input
        type="submit"
        value="Send Message"
        class="bg-blue-500 text-white px-4 py-2 rounded hover-bg-blue-700 transition duration-300"
      />
        </form>
      </div>

       <!-- Contact Information -->
      <div class="contact-info bg-white rounded-lg shadow-lg p-4">
        <h2 class="text-2xl font-semibold mb-4">Contact Information</h2>
        <p>
          <i class="fas fa-clock text-blue-500 mr-2"></i><strong>Working Hours:</strong><br />
          Monday – Friday: 8am – 5pm<br />
          Saturday: 9am – 12pm
        </p>
        <p class="mt-4">
          <i class="fas fa-map-marker-alt text-blue-500 mr-2"></i><strong>Address:</strong><br />
          Kamirembe Place, Ring Road, Opposite Shan Shui Hotel.
        </p>
        <p class="mt-4">
          <i class="fas fa-phone-alt text-blue-500 mr-2"></i><strong>Phone:</strong><br />
          0721393609, 0111030700
        </p>
        <p class="mt-4">
          <i class="fas fa-envelope text-blue-500 mr-2"></i><strong>Email:</strong><br />
          info@bibliasacco.com
        </p>
        <p class="mt-4">
          <i class="fas fa-mail-bulk text-blue-500 mr-2"></i><strong>Postal Address:</strong><br />
          P.O. Box 7041-00300 Nairobi
        </p>
      </div>
    </div>

    <!-- Map Section -->
    <div class="map mt-8 p-4">
      <iframe
          width="100%"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=36.7841,-1.286389,36.7981,-1.272389&marker=-1.279389%2C36.7911&layers=M">
      </iframe>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      // Biblia Sacco LTD coordinates
      latitude: -1.279389,
      longitude: 36.7911,
    };
  },
};
</script>