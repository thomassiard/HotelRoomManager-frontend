<template>
  <!--Welcome-->
  <div class="home">
    <div class="text-container">
      <h1 class="big-text">Welcome to Hotel Room Manager</h1>
      <v-btn class="scroll-button" @click="scrollToContent">Scroll Down</v-btn>
    </div>
    <div class="content" ref="contentSection" id="contentSection">
      <!-- Your content goes here -->
      <div class="content-inner">
        <!-- Add your images and text here -->
      </div>
    </div>
    <div class="additional-content">
      <p>Additional content...</p>
      <img src="path/to/image.jpg" alt="Image" />
    </div>
    <div class="signup-button-container">
      <v-btn class="home-button" @click="goToSignUp">Sign Up</v-btn>
      <v-btn class="home-button" @click="goToLogin">Login</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    scrollToContent() {
      const element = document.getElementById(
        this.$refs.contentSection.getAttribute("id")
      );
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    },
    goToSignUp() {
      this.$router.push("/signup");
    },
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
/* Originalni stilovi */
.home {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("src/assets/background.jpg"); /* Update the URL path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-y: auto;
}

.text-container {
  text-align: center;
  margin-top: 20vh;
}

.big-text {
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 3rem;
}

.scroll-button {
  margin-top: 2rem;
}

.content {
  flex: 1;
}

.content-inner {
  padding: 2rem;
}

.additional-content {
  text-align: center;
  margin-bottom: 20vh;
}

.signup-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
}

/* Scrollbar stilovi */
.home::-webkit-scrollbar {
  width: 8px;
}

.home::-webkit-scrollbar-thumb {
  background-color: #888888;
  border-radius: 4px;
}

.home::-webkit-scrollbar-track {
  background-color: #ffffff;
  border-radius: 4px;
}

/* Dodani stilovi za gumb */
.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.home-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px; /* Dodano: razmak između gumba */
}

.home-button:hover {
  background-color: #333;
}

.home-button:focus {
  outline: none;
}
</style>
