<template>
  <div class="signup">
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
            <router-link to="/signup" class="nav-link ml-3 text-red">
              SIGNUP
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link ml-3 text-white">
              LOGIN
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="image-container text-center mt-0 mb-10">
      <img src="@/assets/signup.jpg" alt="SignUp Image" class="signup-image" />
    </div>

    <div class="form-container">
      <h2 class="text-center">Sign Up</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            v-model="fullName"
            ref="fullNameInput"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            ref="emailInput"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            v-model="phoneNumber"
            ref="phoneNumberInput"
            class="form-control"
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-input">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              ref="passwordInput"
              class="form-control"
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
              ref="confirmPasswordInput"
              class="form-control"
            />
            <span class="password-toggle" @click="toggleConfirmVisibility">
              {{ showConfirmPassword ? "Hide" : "Show" }}
            </span>
          </div>
        </div>
        <div class="button-container text-center">
          <button class="signup-button" type="submit" @click="handleSignUp">
            Sign Up
          </button>
        </div>
      </form>
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
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  methods: {
    async submitForm() {
      // Provjera za svako polje
      if (
        !this.fullName ||
        !this.email ||
        !this.phoneNumber ||
        !this.password ||
        !this.confirmPassword
      ) {
        console.error("Please fill in all fields.");
        return;
      }

      try {
        const response = await axios.post("/api/auth/register", {
          fullName: this.fullName,
          email: this.email,
          phoneNumber: this.phoneNumber,
          password: this.password,
          confirmPassword: this.confirmPassword,
        });

        console.log(response.data);

        if (response.status === 201) {
          console.log("User registered successfully");
          this.handleSuccessfulRegistration();
        }
      } catch (error) {
        console.error("Register error:", error);
        console.log(error);
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    handleSuccessfulRegistration() {
      alert("Successfully registered!");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.bg-dark {
  background-color: black;
}

.nav-link {
  font-weight: bold;
}

.form-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto; /* Dodali smo margin: 0 auto; za horizontalno centriranje */
  padding: 20px;
  background-color: white; /* Dodali smo pozadinu kako bi se istaknula forma */
  border-radius: 10px; /* Zaobljeni rubovi forme */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Lagana sjena ispod forme */
}

.hotel-room-manager {
  font-weight: bold;
}

.text-red {
  color: rgb(183, 71, 71);
  text-decoration: none;
  transition: color 0.3s;
}

.signup-image {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
}

.signup-image-text {
  font-size: 24px;
  font-weight: bold;
  color: black;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.signup-button {
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
.signup-button:hover {
  background-color: rgb(238, 238, 178);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.form-group {
  margin-bottom: 20px;
}

.password-input {
  position: relative;
}

.password-input input {
  width: 100%;
  padding-right: 2.5rem;
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  cursor: pointer;
}

.red-strip.bottom {
  position: fixed;
  bottom: 0;
  height: 123px;
  background-color: rgb(183, 71, 71);
  width: 100%;
  margin-top: 10px;
}
</style>
