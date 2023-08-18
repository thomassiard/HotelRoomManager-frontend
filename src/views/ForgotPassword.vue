<template>
  <div class="forgotpassword">
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
      <img
        src="src/assets/forgotpass.jpg"
        alt="Login Image"
        class="login-image"
      />
      <h1 class="login-title">Login</h1>
    </div>
    <div class="content">
      <div class="title">Forgot Password?</div>
      <div class="subtitle">
        Your password will be sent to your email account.
      </div>
      <div class="form-container">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" />
          </div>
          <div class="button-container">
            <button class="login-button" @click="submitForm">Send</button>
          </div>
        </form>
      </div>
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
    };
  },
  methods: {
    async submitForm() {
      // Ovdje dodajte logiku za slanje zaboravljene lozinke

      // Nakon uspješnog slanja, preusmjerite korisnika na ForgotPasswordSent.vue
      this.$router.push("/forgotpasswordsent");
    },
  },
};
</script>

<style>
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

.forgotpassword-link {
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

.forgotpassword {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.title {
  font-size: 24px;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
  text-align: center;
}

.footer {
  width: 100%;
  height: 20vh;
  background-color: rgb(166, 65, 65);
  margin-top: auto;
}
</style>
