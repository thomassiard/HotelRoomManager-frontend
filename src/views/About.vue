<template>
  <div class="about">
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
            <router-link to="/rooms" class="nav-link ml-3 text-white"
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
            <router-link to="/about" class="nav-link ml-3 text-red"
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

    <!-- Sadržaj About stranice -->
    <div class="about-content">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="about-text">
              <h1 class="display-4 text-center">About Us</h1>
              <p class="about-paragraph">
                Introducing Hotel Room Manager, an innovative project designed
                to redefine your hotel experience. With our intuitive platform,
                managing your room reservations and preferences becomes
                effortlessly simple.
                <br />
                <br />Whether you are a guest seeking seamless accommodation or
                a hotel manager aiming to elevate guest satisfaction, Hotel Room
                Manager empowers you to command your stay effortlessly, in just
                a few clicks.
                <br />
                <br />
                Whether your journey is for business or leisure, our meticulous
                attention to detail guarantees that you will find the perfect
                room that suits your needs. Discover the art of hospitality as
                you step into our realm.
                <br />
                <br />
                We cordially invite you to explore all that our hotel has to
                offer. Your journey with us is our priority, and we eagerly
                await the opportunity to welcome you with open arms.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="about-images text-right">
              <img
                src="/src/assets/about.jpg"
                alt="About Image 1"
                class="about-image img-fluid"
              />
              <img
                src="/src/assets/about2.jpg"
                alt="About Image 2"
                class="about-image img-fluid mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Red strip at the bottom -->
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

.about-text {
  background-color: #f8f9fa;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 40px;
  margin-bottom: 40px;
}

.about-paragraph {
  font-size: 1.15rem;
}

.username {
  color: white;
  font-weight: bold;
}

.about-images {
  margin-top: 65px;
}

.about-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.about-content {
  margin-top: 10rem;
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
  top: 68px; /* Visina navigacijskog bara */
  height: 123px; /* Visina crvene trake */
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
</style>
