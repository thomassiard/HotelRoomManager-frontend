<template>
  <div class="login">
    <div class="nav-bar">
      <div class="nav-left">
        <router-link to="/" class="nav-link">HOTEL ROOM MANAGER</router-link>
      </div>
      <div class="nav-right">
        <router-link to="/signup" class="nav-link">SIGNUP</router-link>
        <router-link to="/login" class="nav-link">LOGIN</router-link>
      </div>
    </div>
    <div class="image-container">
      <img src="src/assets/login.jpg" alt="Login Image" class="login-image" />
      <h1 class="login-title">Login</h1>
    </div>
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-input">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
            />
            <span class="password-toggle" @click="togglePasswordVisibility">
              {{ showPassword ? "Hide" : "Show" }}
            </span>
            <router-link to="/forgotpassword" class="forgotpassword-link"
              >Forgot password?</router-link
            >
          </div>
        </div>
        <div class="button-container">
          <button class="login-button" @click="submitForm">Login</button>
        </div>
        <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
        <div class="or-container">
          <div class="or-line"></div>
          <div class="or-text">Or</div>
          <div class="or-line"></div>
        </div>
        <div class="button-container">
          <button class="admin-login-button" @click="adminLogin">
            Admin Login
          </button>
        </div>
        <div class="button-container">
          <button class="welcome-page-button" @click="goToWelcomePage">
            Welcome Page
          </button>
        </div>
      </form>
    </div>
    <div class="footer">
      <div class="red-bar"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      errorMessage: "error",
      token: "",
    };
  },
  // Izmjenjeni created() blok
  created() {
    // Ne trebate provjeravati token ovdje, to će se riješiti automatski
    // kad se korisnik preusmjeri na login stranicu
  },
  methods: {
    async submitForm() {
      try {
        // Izmjena: Uklonjena provjera ispravnosti podataka
        // Ovdje samo preusmjerite korisnika na welcomepage.vue
        this.goToWelcomePage();
      } catch (error) {
        console.error("Login error:", error);
        this.errorMessage = "Invalid credentials"; // Postavite poruku o grešci
        this.token = ""; // Resetirajte token
      }
    },
    adminLogin() {
      // Ovdje dodajte kod za preusmjeravanje na welcomepage.vue
      this.$router.push("/welcomepage");
    },
    goToWelcomePage() {
      this.$router.push("/welcomepage");
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.image-container {
  position: relative;
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.login-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  color: black;
}

.form-container {
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
  padding: 20px;
  background-color: white;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid black;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.login-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #333;
}

.login-button:focus {
  outline: none;
}

.password-input {
  position: relative;
}

.password-toggle {
  position: absolute;
  top: 30%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #555;
}

.forgot-password-link {
  display: block;
  margin-top: 5px;
  color: #555;
  text-decoration: underline;
  cursor: pointer;
}

.footer {
  width: 100%;
  height: 20vh;
  background-color: rgb(166, 65, 65);
  margin-top: auto;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(166, 65, 65);
  padding: 10px 0;
  width: 100%;
}

.nav-left {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.nav-link {
  text-decoration: none;
  color: #1d1b1b;
  font-weight: bold;
  position: relative;
  margin-right: 15px;
}

.nav-link:hover::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #090707;
}

.nav-right {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.or-container {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.or-line {
  flex: 1;
  height: 1px;
  background-color: #333;
}

.or-text {
  padding: 0 10px;
  color: #333;
}

.admin-login-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.admin-login-button:hover {
  background-color: #333;
}

.admin-login-button:focus {
  outline: none;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

welcome-page-button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.welcome-page-button:hover {
  background-color: #333;
}

.welcome-page-button:focus {
  outline: none;
}
</style>
