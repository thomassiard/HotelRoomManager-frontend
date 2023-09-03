<template>
  <div class="gallery">
    <!-- Crvena traka ispod navigation bara -->
    <div class="red-strip top"></div>

    <Navigation />
    <!-- Naslov i opis galerije -->
    <div class="gallery-header">
      <h1 class="display-4 text-center">GALLERY</h1>
      <p class="text-center">
        Here you can see our hotel room manager's photo gallery.
      </p>
    </div>

    <!-- Containeri za slike u galeriji -->
    <div class="gallery-content">
      <!-- Prvi red slika -->
      <div class="gallery-image">
        <p class="image-text">1. Breakfast Area</p>
        <img src="@/assets/gallery1.jpg" alt="Image 1" class="image" />
      </div>
      <div class="gallery-image">
        <p class="image-text">2. Spa Retreat</p>
        <img src="@/assets/gallery2.jpg" alt="Image 2" class="image" />
      </div>
      <div class="gallery-image">
        <p class="image-text">3. Reception Desk</p>
        <img src="@/assets/gallery3.jpg" alt="Image 3" class="image" />
      </div>
      <!-- Drugi red slika -->
      <div class="gallery-image">
        <p class="image-text">4. Fitness Center</p>
        <img src="@/assets/gallery4.jpg" alt="Image 4" class="image" />
      </div>
      <div class="gallery-image">
        <p class="image-text">5. VIP Room</p>
        <img src="@/assets/gallery5.jpg" alt="Image 5" class="image" />
      </div>
      <div class="gallery-image">
        <p class="image-text">6. Swimming Pool</p>
        <img src="@/assets/gallery6.jpg" alt="Image 6" class="image" />
      </div>
    </div>

    <!-- Red strip at the bottom -->
    <div class="red-strip bottom"></div>
  </div>
</template>

<script>
import Navigation from "@/components/navigation.vue";

export default {
  data() {},
  components: {
    Navigation,
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.text-red {
  color: rgb(183, 71, 71);
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link {
  font-weight: bold;
}

.navbar.bg-dark-transparent {
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.text-red {
  color: rgb(183, 71, 71);
  text-decoration: none;
  transition: color 0.3s;
}

.red-strip.top {
  position: fixed;
  top: 68px;
  height: 123px;
  background-color: rgb(183, 71, 71);
  width: 100%;
}

.logout-link {
  cursor: pointer;
  color: black;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.2s, color 0.2s;
  background-color: white;
}

.red-strip.bottom {
  position: fixed;
  bottom: 0;
  height: 123px;
  background-color: rgb(183, 71, 71);
  width: 100%;
  margin-top: 10px;
}

.image-text {
  padding: 5px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: inline-block;
}

.gallery-header {
  text-align: center;
  display: inline-block;
  margin-top: 8.5rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.gallery-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 0rem;
}

.gallery-image {
  width: 30%;
  text-align: center;
  padding: 1rem;
  margin-top: 1rem;
}

.image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.profile-image {
  width: 100px;
  height: 100px;
  background-color: #ddd;
  border-radius: 50%;
  margin: 0 auto 10px;
  background-size: cover;
  background-position: center;
}

.user-image-navbar {
  width: 2%;
  height: 40px;
  background-color: #000000;
  border-radius: 50%;
  margin-right: 10px;
  background-size: cover;
  background-position: center;
  background-image: url(@/assets/user-image.jpg);
}

.username {
  color: white;
  font-weight: bold;
}
</style>
