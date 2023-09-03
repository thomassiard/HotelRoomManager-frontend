<template>
  <!-- Navigation Bar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
    <div class="container-fluid">
      <img
        src="@/assets/user-image.jpg"
        alt="User Image"
        height="40"
        class="user-image-navbar"
      />
      <router-link v-if="isAdmin" to="/profile" class="navbar-brand">
        <span class="username">Admin</span>
      </router-link>
      <router-link v-else to="/profile" class="navbar-brand">
        <span class="username">User</span>
      </router-link>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link
            to="/welcomepage"
            class="nav-link ml-3 text-white"
            :class="{ 'text-red': $route.name === 'WelcomePage' }"
            >HOME</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            v-if="isAdmin"
            to="/admin"
            class="nav-link ml-3 text-white"
            :class="{ 'text-red': $route.name === 'Admin' }"
            >ADMIN</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/rooms"
            class="nav-link ml-3 text-white"
            :class="{ 'text-red': $route.name === 'Rooms' }"
            >ROOMS</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/gallery"
            class="nav-link ml-3 text-white"
            :class="{ 'text-red': $route.name === 'Gallery' }"
            >GALLERY</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/reviews"
            class="nav-link ml-3 text-white"
            :class="{ 'text-red': $route.name === 'Reviews' }"
            >REVIEWS</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/about"
            class="nav-link ml-3 text-white"
            :class="{ 'text-red': $route.name === 'About' }"
            >ABOUT</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/contact"
            class="nav-link ml-3 text-white"
            :class="{ 'text-red': $route.name === 'Contact' }"
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
</template>

<script>
import axios from "axios";

export default {
  name: "Navigation",
  data() {
    return {
      isAdmin: false,
    };
  },
  async mounted() {
    await this.fetchIsAdmin();
  },
  methods: {
    async fetchIsAdmin() {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("Token not found in localStorage");
          return;
        }
        const response = await axios.get(`/api/auth/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userData = response.data;
        this.isAdmin = userData.isAdmin;
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    },
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.user-image-navbar {
  height: 40px;
  border-radius: 999px;
  margin-right: 10px;
  background-size: cover;
  background-position: center;
}

.username {
  color: white;
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

.nav-link {
  font-weight: bold;
}

.logout-link {
  color: black;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.2s, color 0.2s;
  background-color: white;
}

.logout-link {
  cursor: pointer;
}
</style>
