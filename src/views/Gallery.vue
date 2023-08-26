<template>
  <div class="gallery-container">
    <h1 class="gallery-heading">Gallery</h1>
    <div class="image-grid">
      <div
        v-for="(image, index) in galleryImages"
        :key="index"
        class="image-item"
      >
        <img :src="image" alt="Hotel Room" class="gallery-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      galleryImages: [
        "src/assets/welcomeroom1.jpg",
        "src/assets/welcomeroom2.jpg",
        "src/assets/welcomeroom3.jpg",
        // Dodajte ostale slike ovdje
      ],
    };
  },
};
</script>

<style scoped>
.gallery-container {
  padding: 20px;
}

.gallery-heading {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.image-item {
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.gallery-image {
  width: 100%;
  height: auto;
  display: block;
}
</style>
