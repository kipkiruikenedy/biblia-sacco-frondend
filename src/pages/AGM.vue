<template>
 <h1 class="text-center font-bold text-2xl">ANNUAL GENERAL MEETING</h1>
  <div class="flex flex-wrap justify-center">
 
    <div v-for="(report, index) in reports" :key="index" class="max-w-sm mx-4 my-8 bg-white rounded-md overflow-hidden shadow-md">
      <div class="px-6 py-4">
        <h2 class="text-xl font-semibold text-gray-800">{{ report.title }}</h2>
        <a :href="report.link" target="_blank" class="text-blue-500 hover:underline block mt-2">View / Download</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnnualReports2022',
  data() {
    return {
      reports: [
        { title: 'A.G.M NOTICE 2022', link: 'link-to-agm-notice-2022.pdf' },
        { title: 'AGM BOOKLET 2022', link: 'link-to-agm-booklet-2022.pdf' },
        { title: 'BIBLIA SACCO AUDITED REPORT 2022', link: 'link-to-audited-report-2022.pdf' },
        { title: 'CHAIRMAN REPORT 2022', link: 'link-to-chairman-report-2022.pdf' },
        { title: 'A.G.M NOTICE BIBLIA HOUSING 2022', link: 'link-to-housing-agm-notice-2022.pdf' },
        { title: 'BIBLIA HOUSING BOOKLET 2022', link: 'link-to-housing-booklet-2022.pdf' },
      ],
    };
  },
};
</script>

<style scoped>
/* Add any custom styling here */
</style>
