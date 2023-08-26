<template>
  <div class="forgot-password">
    <!-- Navigation Bar -->
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark py-3"
      style="margin-bottom: 0"
    >
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <span class="hotel-room-manager">HOTEL ROOM MANAGER</span>
        </router-link>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/signup" class="nav-link ml-3 text-white">
              SIGNUP
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link ml-3 text-red">
              LOGIN
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="image-container text-center mt-0 mb-10">
      <img src="../assets/login.jpg" alt="SignUp Image" class="login-image" />
    </div>

    <div class="form-container">
      <h2 class="text-center">Forgot Password?</h2>
      <p class="sub-text">Your password will be sent to your email account.</p>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" class="form-control" />
        </div>
        <div class="button-container text-center bold-text">
          <button class="login-button" type="submit">Send</button>
        </div>
        <div v-if="newPassword" class="new-password">
          Your new password: {{ newPassword }}
        </div>
      </form>
    </div>
    <!-- Red strip at the bottom -->
    <div class="red-strip bottom"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      newPassword: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        this.newPassword = Math.random().toString(36).slice(-8);
        console.log("Password reset request sent for:", this.email);
        console.log("New password:", this.newPassword);

        this.$router.push({
          name: "ForgotPasswordSent",
          params: { newPassword: this.newPassword },
        });
      } catch (error) {
        console.error("Password reset error:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Custom styles */
.bg-dark {
  background-color: black;
}

.nav-link {
  font-weight: bold;
}

.bold-text {
  font-weight: bold;
}
.form-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.hotel-room-manager {
  font-weight: bold;
}

.text-red {
  color: rgb(183, 71, 71);
  text-decoration: none;
  transition: color 0.3s;
}

.login-image {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
}

.login-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: rgb(238, 238, 178);
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s, box-shadow 0.2s;
}

.login-button:hover {
  background-color: rgb(238, 238, 178);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.form-group {
  margin-bottom: 20px;
}

.red-strip.bottom {
  position: fixed;
  bottom: 0;
  height: 123px;
  background-color: rgb(183, 71, 71);
  width: 100%;
  margin-top: 10px;
}

.sub-text {
  font-weight: 300;
  margin-bottom: 20px;
}
</style>
