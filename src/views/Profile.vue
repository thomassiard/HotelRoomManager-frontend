<template>
  <div class="profile">
    <!-- Red strip at the top -->
    <div class="red-strip top"></div>

    <!-- Profile Header -->
    <div class="profile-header">
      <h1 class="display-4 text-center">PROFILE</h1>
      <p class="text-center">
        Here you can view and update your profile information.
      </p>
    </div>

    <!-- Red strip at the bottom -->
    <div class="red-strip bottom"></div>

    <!-- Profile Picture -->
    <div class="profile-image">
      <!-- Display the user's profile picture here -->
      <img :src="profileImageUrl" alt="Profile Picture" class="image" />
      <!-- Input field to change the profile picture -->
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        @change="uploadProfilePicture"
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
            :value="fullName"
            readonly
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            :value="email"
            readonly
          />
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            class="form-control"
            :value="phoneNumber"
            readonly
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      profileImageUrl: "src/assets/default-profile-picture.jpg",
      fullName: "John Doe",
      email: "johndoe@example.com",
      phoneNumber: "123-456-7890",
    };
  },
  methods: {
    uploadProfilePicture(event) {
      const file = event.target.files[0];
      // Perform upload logic and update profileImageUrl accordingly
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

.profile-image {
  width: 100px;
  height: 100px;
  background-color: #ddd;
  border-radius: 50%;
  margin: 0 auto 10px;
  background-size: cover;
  background-position: center;
}

.profile-header {
  text-align: center;
  display: inline-block;
  margin-top: 10rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
