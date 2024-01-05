<template>
  <div class=" flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full p-6 bg-white shadow-md rounded-md md:max-w-xl">
      <div class="flex flex-col md:flex-row justify-between mb-6">
        <button @click="showUploader('image')" class="btn mb-2 md:mb-0 md:mr-2">Upload Images</button>
        <button @click="showUploader('report')" class="btn mb-2 md:mb-0 md:mx-2">Upload Reports</button>
        <button @click="showUploader('job')" class="btn">Upload Jobs</button>
      </div>

      <div>
        <component :is="currentUploader" />
      </div>
    </div>
  </div>
</template>

<script>
import ImageUploader from './ImageUploader.vue';
import ReportUploader from './ReportUploader.vue';
import JobUploader from './JobUploader.vue';

export default {
  data() {
    return {
      currentUploader: null,
    };
  },
  components: {
    ImageUploader,
    ReportUploader,
    JobUploader,
  },
  methods: {
    showUploader(type) {
      // Dynamically set the current uploader based on the button clicked
      switch (type) {
        case 'image':
          this.currentUploader = 'ImageUploader';
          break;
        case 'report':
          this.currentUploader = 'ReportUploader';
          break;
        case 'job':
          this.currentUploader = 'JobUploader';
          break;
        default:
          this.currentUploader = null;
      }
    },
  },
};
</script>

<style>
.btn {
  @apply px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300;
}

/* Responsive Styles */
@media (min-width: 768px) {
  .max-w-md {
    max-width: 100%;
  }
}
</style>
