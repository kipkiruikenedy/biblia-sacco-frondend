<template>
  <div class="bg-gray-100 p-4">
    <h1 class="text-4xl font-bold text-center mb-8">Biblia Gallery</h1>

    <div v-for="(album, index) in albums" :key="index" class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">{{ album.title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="photo in album.photos" :key="photo.id" class="rounded-lg overflow-hidden">
          <img :src="photo.src" :alt="photo.alt" class="w-full h-auto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BibliaGallery',
  data() {
    return {
      albums: [
        {
          title: '2021 AGM Photos',
          photos: [
            { id: 1, src: '../assets/images/agm1.jpg', alt: 'Photo 1' },
            { id: 2, src: '../assets/images/agm2.jpg', alt: 'Photo 2' },
            { id: 3, src: '../assets/images/agm3.jpg', alt: 'Photo 3' },
          ],
        },
        // Add other albums and photos here
      ],
    };
  },
};
</script>

<style scoped>
/* Add Tailwind CSS classes and custom styles here */

/* Style the image containers */
.rounded-lg {
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Style the images to maintain aspect ratio */
img {
  width: 100%;
  height: auto;
}

/* Style the section headers */
h2 {
  color: #1a202c;
}

/* Center the page title */
h1 {
  text-align: center;
}
</style>
