<template>
  <div class="signup">
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
      <img src="../assets/signup.jpg" alt="SignUp Image" class="signup-image" />
      <h1 class="signup-title">Sign Up</h1>
    </div>
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input type="text" id="fullName" v-model="fullName" />
        </div>
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
          </div>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <div class="password-input">
            <input
              :type="showConfirmPassword ? 'text' : 'password'"
              id="confirmPassword"
              v-model="confirmPassword"
            />
            <span class="password-toggle" @click="toggleConfirmVisibility">
              {{ showConfirmPassword ? "Hide" : "Show" }}
            </span>
          </div>
        </div>
        <div class="button-container">
          <button class="signup-button" type="submit">Sign Up</button>
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
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post("/api/auth/register", {
          username: this.email,
          password: this.password,
        });

        console.log(response.data);

        if (response.status === 201) {
          console.log("User registered successfully");
        }
      } catch (error) {
        console.error("Register error:", error);
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
  },
};
</script>

<style>
.signup {
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

.signup-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.signup-title {
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

.signup-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.signup-button:hover {
  background-color: #333;
}

.signup-button:focus {
  outline: none;
}

.password-input {
  position: relative;
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #555;
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
</style>
