<template>
  <div class="bg-white text-gray-800 p-6 rounded-lg shadow-xl">
    <!-- About Us -->
<section class="flex flex-col md:flex-row items-center justify-center mb-8">
  <img src="../images/about.jpg" alt="About Us" class="md:h-64 object-cover rounded-lg mb-4 md:mr-8">

  <div class="max-w-md md:max-w-lg p-6 bg-gray-100 rounded-lg shadow-md">
    <h2 class="text-3xl font-bold mb-4 text-gray-800 text-center">Who We Are</h2>
    <p class="text-base text-gray-600 mb-4">
      Biblia Sacco is a leading Evangelical Christian Saving and Credit Co-operative Society in Kenya, which draws its membership from Churches, NGOs, Schools, Universities, Hospitals, Media houses, Groups/Chamas, and Individuals.
    </p>
    <p class="text-base text-gray-600 mb-4">
      We give you a vehicle for saving and an opportunity to access competitive credit for growing your money with nothing but your regular savings and attractive interest rates.
    </p>
  </div>
</section>


<!-- Our Mission and Vision -->
<section class="flex flex-col md:flex-row bg-gray-100 rounded-lg shadow-md mb-8 p-6">
  <div class="md:w-1/2 mb-4 md:mb-0 p-3">
    <img src="../images/mission.jpg" alt="Our Mission" class="w-full h-64 object-cover rounded-lg mb-4">
    <div class="text-center">
      <h2 class="text-2xl font-bold mb-2 text-gray-800">Our Mission</h2>
      <p class="text-base text-gray-600 leading-relaxed">
        Transforming lives by providing diversified Sacco products and services at affordable terms.
      </p>
    </div>
  </div>

  <div class="md:w-1/2 p-3">
    <img src="../images/vision.jpg" alt="Our Vision" class="w-full h-64 object-cover rounded-lg mb-4">
    <div class="text-center">
      <h2 class="text-2xl font-bold mb-2 text-gray-800">Our Vision</h2>
      <p class="text-base text-gray-600 leading-relaxed">
        Being a model Sacco that empowers Christians economically.
      </p>
    </div>
  </div>
</section>



 <!-- Sections -->
<section class="grid grid-cols-1 md:grid-cols-3 gap-8">

  <!-- Historical Background -->
  <div class="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
    <i class="fas fa-history text-5xl text-blue-500 mb-4"></i>
    <h2 class="text-lg font-semibold mb-2">Historical Background</h2>
    <p class="text-base">
      Founded in 1976, we've grown to over 10,000 members, primarily operating within the Republic of Kenya, including organizations headquartered in Nairobi.
    </p>
  </div>

  <!-- Common Bond -->
  <div class="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
    <i class="fas fa-handshake text-5xl text-green-500 mb-4"></i>
    <h2 class="text-lg font-semibold mb-2">Common Bond</h2>
    <p class="text-base">
      Proudly serving employees of Christian Evangelical Organizations, including churches, church-sponsored autonomous organizations, para-church organizations, mission agencies, Christian welfare groups, and Christian NGOs.
    </p>
  </div>

  <!-- Philosophy -->
  <div class="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
    <i class="fas fa-lightbulb text-5xl text-yellow-500 mb-4"></i>
    <h2 class="text-lg font-semibold mb-2">Philosophy</h2>
    <p class="text-base">
      Providing competitive and affordable financial services to all members, promoting economic well-being and prosperity through shared resources.
    </p>
  </div>

  <!-- Our Objectives -->
  <div class="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
    <i class="fas fa-bullseye text-5xl text-red-500 mb-4"></i>
    <h2 class="text-lg font-semibold mb-2">Our Objectives</h2>
    <ul class="list-disc list-inside text-base">
      <li>Mobilize savings and deposits for loan granting to members and productive investments.</li>
      <li>Promote the economic interests of the members.</li>
      <li>Ensure quality service to members.</li>
    </ul>
  </div>

  <!-- Our Principles -->
  <div class="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
    <i class="fas fa-balance-scale text-5xl text-purple-500 mb-4"></i>
    <h2 class="text-lg font-semibold mb-2">Our Principles</h2>
    <ul class="list-disc list-inside text-base">
      <p>The society operates under principles such as the Lordship of Jesus Christ,
      democratic member control, autonomy, and cooperation among cooperatives.</p>
    </ul>
  </div>

     <!-- Why Join Us -->
    <section class="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col md:flex-row items-center">
      <div class="max-w-md md:max-w-lg mb-4 md:mb-0 md:mr-8">
        <img src="../images/join.jpg" alt="Why Join Us" class="w-full h-64 object-cover rounded-lg mb-4">
        <h2 class="text-3xl font-bold mb-2 text-gray-800">Why Join Us</h2>
        <ul class="list-disc list-inside text-base mb-4">
          <li>Fast Loan Processing.</li>
          <li>Competitive interest rates.</li>
          <li>You can Re-Finance or Top-up.</li>
          <li>Attractive Dividends.</li>
          <li>No Bureaucracy.</li>
          <li>Run by Qualified Christian Professionals.</li>
          <li>Excellent Customer Service.</li>
          <li>Member Statement Accessible 24/7 online.</li>
        </ul>
      </div>
    </section>

  <!-- Core Values -->
    <section class="p-6 bg-gray-100 rounded-lg shadow-md ">
      <div class="mb-4">
        <img src="../images/values.jpg" alt="Core Values" class=" object-contain rounded-full mx-auto mb-2">
        <h2 class="text-3xl font-bold text-gray-800">Core Values</h2>
      </div>
      <ul class="list-disc list-inside text-base mb-4">
        <li>The Lordship of Jesus Christ.</li>
        <li>Integrity.</li>
        <li>Innovation.</li>
        <li>Teamwork.</li>
        <li>Accessibility.</li>
      </ul>
    </section>


</section>


   <section class="text-center p-8">
    <p class="text-4xl font-bold mb-6">Let's Do It Together</p>
    <router-link to="/get-started" class="text-white">
      <button @click="onInvestClick" class="bg-blue-500 hover:bg-blue-600 text-xl px-8 py-4 rounded-full transition duration-300">
        Get Started <i class="fas fa-chevron-right ml-2"></i>
      </button>
    </router-link>
  </section>
  </div>
</template>
<script>
export default {
  methods: {
    onInvestClick() {
      // Add your logic for the button click here
      // For example, you can use Vue Router to navigate to the "Get Started" page
      this.$router.push('/get-started');
    },
  },
};
</script>
