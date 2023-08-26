<template>
  <div class="login">
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
      <h2 class="text-center">Login</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" class="form-control" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-input">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              class="form-control"
            />
            <span class="password-toggle" @click="togglePasswordVisibility">
              {{ showPassword ? "Hide" : "Show" }}
            </span>
          </div>
          <div class="form-group">
            <router-link to="/forgotpassword" class="forgot-password-link"
              >Forgot password?</router-link
            >
          </div>
        </div>
        <div class="button-container text-center bold-text">
          <button class="login-button" type="submit">Login</button>
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
      email: "",
      password: "",
      showPassword: false,
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post("/api/auth/login", {
          email: this.email,
          password: this.password,
        });

        console.log(response.data);

        if (response.data.token) {
          console.log("User logged in successfully");
          this.handleSuccessfulLogin();
        } else {
          console.log("Invalid credentials");
          this.handleUnsuccessfulLogin();
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    handleSuccessfulLogin() {
      this.showWrongPassword = false; // Sakrij poruku o pogrešnoj lozinci
      alert("Successfully logged in!");
      this.$router.push("/welcomepage");
    },
    handleUnsuccessfulLogin() {
      this.showWrongPassword = false;
      alert("Wrong Password!");
      this.$router.push("/login"); // Prikaži poruku o pogrešnoj lozinci
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

.login-image {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
}

.login-image-text {
  font-size: 24px;
  font-weight: bold;
  color: black;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  height: 123px; /* Ovdje postavite istu visinu kao i donji dio crvene trake u home.vue */
  background-color: rgb(183, 71, 71);
  width: 100%;
  margin-top: 10px; /* Podesite ovu vrijednost prema svojim potrebama za poziciju trake */
}

.forgot-password-link {
  color: rgb(183, 71, 71); /* Postavite boju po vašem izboru */
  font-size: 13px; /* Prilagodite veličinu fonta prema potrebi */
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.3s;
}
</style>
