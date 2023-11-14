<template>
  <div class="bg-white text-gray-800 p-6 rounded-lg shadow-xl">

    <!-- About Us -->
    <div class="text-center mb-8">
      <h1 class="text-5xl font-extrabold mb-2 text-blue-600">About Us</h1>
      <p class="text-lg">Empowering Your Financial Future</p>
    </div>

    <!-- Sections -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

      <!-- Historical Background -->
      <div class="mb-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <div class="flex items-center mb-4">
          <i class="far fa-clock text-3xl text-blue-600 mr-3"></i>
          <h2 class="text-3xl font-semibold">Historical Background</h2>
        </div>
        <p class="text-lg">
          Founded in 1976, we've grown to over 10,000 members, primarily operating within the Republic of Kenya, including organizations headquartered in Nairobi.
        </p>
      </div>

      <!-- Common Bond -->
      <div class="mb-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <div class="flex items-center mb-4">
          <i class="far fa-handshake text-3xl text-blue-600 mr-3"></i>
          <h2 class="text-3xl font-semibold">Common Bond</h2>
        </div>
        <p class="text-lg">
          Proudly serving employees of Christian Evangelical Organizations, including churches, church-sponsored autonomous organizations, para-church organizations, mission agencies, Christian welfare groups, and Christian NGOs.
        </p>
      </div>

      <!-- Philosophy -->
      <div class="mb-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <div class="flex items-center mb-4">
          <i class="far fa-lightbulb text-3xl text-blue-600 mr-3"></i>
          <h2 class="text-3xl font-semibold">Philosophy</h2>
        </div>
        <p class="text-lg">
          Providing competitive and affordable financial services to all members, promoting economic well-being and prosperity through shared resources.
        </p>
      </div>

      <!-- Our Objectives -->
      <div class="mb-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <div class="flex items-center mb-4">
          <i class="far fa-bullseye text-4xl text-blue-600 mr-3"></i>
          <h2 class="text-3xl font-semibold">Our Objectives</h2>
        </div>
        <ul class="list-disc list-inside text-lg">
          <li>Mobilize savings and deposits for loan granting to members and productive investments.</li>
          <li>Promote the economic interests of the members.</li>
          <li>Ensure quality service to members.</li>
        </ul>
      </div>

      <!-- Our Principles -->
      <div class="mb-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <div class="flex items-center mb-4">
          <i class="far fa-balance-scale text-3xl text-yellow-500 mr-3"></i>
          <h2 class="text-3xl font-semibold">Our Principles</h2>
        </div>
        <ul class="list-disc list-inside text-lg">
          <li>The society operates under principles such as the Lordship of Jesus Christ, democratic member control, autonomy, and cooperation among cooperatives.</li>
        </ul>
      </div>

    </div>

    <!-- Get Started -->
    <div class="text-center">
      <p class="text-3xl font-semibold mb-4">Let's Do It Together</p>
      <button @click="onInvestClick" class="bg-blue-500 hover:bg-blue-600 text-white text-xl px-8 py-4 rounded-full transition duration-300">
        Get Started <i class="fas fa-chevron-right ml-2"></i>
      </button>
    </div>
  </div>
</template>
