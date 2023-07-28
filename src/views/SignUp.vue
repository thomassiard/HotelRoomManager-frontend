<template>
  <div class="signup">
    <div class="image-container">
      <img src="../assets/signup.jpg" alt="SignUp Image" class="signup-image" />
    </div>
    <div class="form-container">
      <h1 class="title">Sign Up</h1>
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
          <input type="password" id="password" v-model="password" />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
          />
        </div>
        <div class="button-container">
          <button class="signup-button" type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    submitForm() {
      // Ovdje ćete implementirati logiku za prijavu (login).
      // Možete provjeriti korisničko ime i lozinku, komunicirati s poslužiteljem itd.
      // U ovom primjeru ćemo samo ispisati podatke na konzolu.
      console.log("Full Name:", this.fullName);
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      console.log("Confirm Password:", this.confirmPassword);
    },
  },
};
</script>

<style>
.signup {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.signup-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 55%;
}

.form-container {
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
  padding: 20px;
  background-color: white;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
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
</style>
