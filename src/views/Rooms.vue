<template>
  <div class="rooms">
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div class="container-fluid">
        <div class="user-image-navbar"></div>
        <router-link to="/profile" class="navbar-brand">
          <span class="username">Guest</span>
        </router-link>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/welcomepage" class="nav-link ml-3 text-white"
              >HOME</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/rooms" class="nav-link ml-3 text-red"
              >ROOMS</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/gallery" class="nav-link ml-3 text-white"
              >GALLERY</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/reviews" class="nav-link ml-3 text-white"
              >REVIEWS</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link ml-3 text-white"
              >ABOUT</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link ml-3 text-white"
              >CONTACT</router-link
            >
          </li>
          <li class="nav-item">
            <a @click="logout" class="nav-link ml-3 text-black logout-link"
              >LOG OUT</a
            >
          </li>
        </ul>
      </div>
    </nav>

    <!-- Crvena traka ispod navigation bara -->
    <div class="red-strip top"></div>

    <!-- Naslov galerije -->
    <div class="gallery-header">
      <h1 class="display-4 text-center">ROOMS</h1>
      <p class="text-center">Explore our luxurious room options.</p>
    </div>

    <!-- Prikaži sobe kao reklame -->
    <div class="room-advertisements">
      <div class="room-advertisement">
        <img src="src/assets/room1.jpg" alt="Room 1" class="room-image" />
        <div class="room-details">
          <div class="room-rating">
            <i class="fas fa-star"></i>
            <p>4.8</p>
          </div>
          <h2 class="room-name">Deluxe Suite</h2>
          <p class="room-description">
            Experience the ultimate luxury in our Deluxe Suite with stunning
            views and top-notch amenities.
          </p>
          <p class="room-price">$300/night</p>
          <button class="book-now-button" @click="redirectToRooms">
            Book Now
          </button>
        </div>
      </div>
      <!-- Ovdje dodajte više room-advertisement elemenata za druge sobe -->
    </div>

    <!-- Crvena traka na dnu -->
    <div class="red-strip bottom"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {},
  methods: {
    logout() {
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
  background-image: url(src/assets/user-image.jpg);
}

.username {
  color: white;
  font-weight: bold;
}

/* Novi CSS za prikaz soba kao reklame */
.room-advertisements {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2rem;
}

.room-advertisement {
  width: 45%;
  margin: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.room-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.room-details {
  margin-top: 1rem;
}

.room-rating {
  display: flex;
  align-items: center;
}

.room-name {
  font-size: 24px;
  font-weight: bold;
  margin-top: 5px;
}

.room-description {
  font-size: 14px;
  margin-top: 5px;
}

.room-price {
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
}

.book-now-button {
  background-color: rgb(183, 71, 71);
  color: white;
  font-weight: bold;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 10px;
}

.book-now-button:hover {
  background-color: rgb(163, 51, 51);
}
</style>
