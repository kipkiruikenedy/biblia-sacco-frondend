<template>
  <div class="hiring-page bg-gray-100 text-gray-800 p-6 z-0">
    <div class="relative">
      <img
        src="../assets/images/agm.jpg"
        alt="Biblia Sacco Hiring"
        class="w-full h-64 object-cover rounded-lg shadow-lg"
      />
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
      <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white z-10">
        We Are Hiring
      </h1>
    </div>

    <div class="about-sacco text-lg my-8">
      <p>
        Biblia Sacco Society Limited is a Savings & Credit Society based in Nairobi. It has been in existence for more than 40 years. Having over 10,000 members, it draws its membership from Christian Organizations such as NGOs, Schools, Colleges, Universities, Churches, Christian Individuals, and Groups in Kenya.
      </p>
      <p class="mt-4">
        At Biblia Sacco, we believe in equality of job distribution all over the country and always look for qualified individuals for any job posting. Only qualified individuals are required to apply.
      </p>
    </div>

    <section class="latest-vacancies my-8">
      <h2 class="text-2xl font-semibold mb-4 text-center">Latest Vacancies</h2>

      <!-- Job Listing 1 -->
      <div class="job-listing bg-white text-gray-700 p-4 rounded-lg shadow-lg mb-6">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-xl font-semibold">Job Title 1</h3>
          <i class="fas fa-map-marker-alt text-gray-600"></i>
          <span class="ml-2">Nairobi</span>
        </div>
        <p class="mb-2">Posted: Date</p>
        <button class="apply-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Apply Now
        </button>
      </div>

      <!-- Job Listing 2 -->
      <div class="job-listing bg-white text-gray-700 p-4 rounded-lg shadow-lg mb-6">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-xl font-semibold">Job Title 2</h3>
          <i class="fas fa-map-marker-alt text-gray-600"></i>
          <span class="ml-2">Nairobi</span>
        </div>
        <p class="mb-2">Posted: Date</p>
        <button class="apply-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Apply Now
        </button>
      </div>

      <!-- Job Listing 3 -->
      <div class="job-listing bg-white text-gray-700 p-4 rounded-lg shadow-lg">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-xl font-semibold">Job Title 3</h3>
          <i class="fas fa-map-marker-alt text-gray-600"></i>
          <span class="ml-2">Nairobi</span>
        </div>
        <p class="mb-2">Posted: Date</p>
        <button class="apply-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Apply Now
        </button>
      </div>
    </section>
  </div>

</template>

