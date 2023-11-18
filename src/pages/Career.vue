<template>
  <div class="hiring-page bg-gray-100 text-gray-800 p-6">
    <div class="relative mb-8">
    
      <img
        src="../assets/images/hiring.jpg"
        alt="Biblia Sacco Society Limited Hiring Banner"
        class="object-cover w-full h-64 rounded-lg shadow-lg"
      />
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
    </div>

    <div class="about-sacco text-lg text-center mb-8">
      <p>
        Biblia Sacco Society Limited is a <em>Savings & Credit Society</em> based in Nairobi. It has been in existence for more than 40 years. With over 10,000 members, it draws its membership from Christian Organizations such as NGOs, Schools, Colleges, Universities, Churches, Christian Individuals, and Groups in Kenya.
      </p>
      <p class="mt-4">
        At Biblia Sacco, we believe in equality of job distribution all over the country and always look for qualified individuals for any job posting. Only qualified individuals are required to apply.
      </p>
    </div>

    <section class="latest-vacancies">
      <h2 class="text-2xl font-semibold mb-4 text-center">Latest Vacancies</h2>

      <!-- Job Listings -->
      <div v-for="job in jobs" :key="job.id" class="job-listing bg-white text-gray-700 p-4 rounded-lg shadow-lg mb-6">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-xl font-semibold">{{ job.title }}</h3>
          <div class="flex items-center">
            <i class="fas fa-map-marker-alt text-gray-600"></i>
            <span class="ml-2">{{ job.location }}</span>
          </div>
        </div>
        <p class="mb-2">Posted: {{ job.postedDate }}</p>
        <button class="apply-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Apply Now
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { id: 1, title: 'Job Title 1', location: 'Nairobi', postedDate: 'Date 1' },
        { id: 2, title: 'Job Title 2', location: 'Nairobi', postedDate: 'Date 2' },
        { id: 3, title: 'Job Title 3', location: 'Nairobi', postedDate: 'Date 3' },
      ],
    };
  },
};
</script>
