<template>
  <div class="profile">
    <!-- Red strip at the top -->
    <div class="red-strip top"></div>

    <router-link to="/welcomepage" class="return-button">
      <i class="fa fa-arrow-left"></i> Return
    </router-link>

    <!-- Profile Container -->
    <div class="profile-container">
      <!-- Profile Header -->
      <div class="profile-header">
        <h1 class="display-4 text-center">PROFILE</h1>
        <p class="text-center">Here you can view your profile information.</p>
      </div>
      <!-- Profile Picture -->
      <div class="profile-image">
        <!-- Display the user's profile picture here -->
        <img
          src="src/assets/user-image.jpg"
          alt="Profile Picture"
          class="image"
        />
      </div>

      <!-- Profile Form -->
      <div class="profile-form">
        <form>
          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              class="form-control"
              v-model="user.fullName"
              disabled
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              class="form-control"
              v-model="user.email"
              disabled
            />
          </div>
          <div class="form-group">
            <label for="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              class="form-control"
              v-model="user.phoneNumber"
              disabled
            />
          </div>
        </form>
      </div>
    </div>
    <!-- Red strip at the bottom -->
    <div class="red-strip bottom"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        fullName: "",
        email: "",
        phoneNumber: "",
      },
    };
  },
  mounted() {
    // Pozovite funkciju za dohvaćanje profila
    this.fetchUserProfile();
  },
  methods: {
    async fetchUserProfile() {
      try {
        // Promijenite URL rute kako biste poslali email umjesto ID-ja
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
        // Postavite dobivene podatke u varijable
        this.user.fullName = userData.fullName;
        this.user.email = userData.email;
        this.user.phoneNumber = userData.phoneNumber;
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    },
  },
};
</script>

<style scoped>
.red-strip.top {
  position: fixed;
  height: 123px;
  background-color: rgb(183, 71, 71);
  width: 100%;
}

.red-strip.bottom {
  position: fixed;
  bottom: 0;
  height: 123px;
  background-color: rgb(183, 71, 71);
  width: 100%;
}

.return-button {
  position: fixed;
  top: 12.5%;
  left: 36.5%;
  background-color: rgb(238, 238, 178);
  color: black;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  z-index: 1;
  transition: background-color 0.2s, box-shadow 0.2s;
}

.return-button:hover {
  background-color: rgb(238, 238, 178);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.profile-container {
  text-align: center;
  display: inline-block;
  margin-top: 10rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f8f9fa;
  padding: 4rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.form-group {
  text-align: left;
}

.profile-image {
  text-align: center;
  margin-top: 2rem;
}

.image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto;
}

.profile-form {
  max-width: 400px;
  margin: 5rem auto;
}
</style>
