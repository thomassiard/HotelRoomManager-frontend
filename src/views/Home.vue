<template>
  <!--Welcome-->
  <div class="home">
    <div class="text-container">
      <h1 class="big-text">Welcome to Hotel Room Manager</h1>
      <v-btn class="scroll-button" @click="scrollToContent">Scroll Down</v-btn>
    </div>
    <div class="signup-button-container">
      <v-btn class="home-button" @click="goToSignUp">Sign Up</v-btn>
      <v-btn class="home-button" @click="goToLogin">Login</v-btn>
    </div>
    <div class="additional-content">
      <div class="left-column">
        <div class="vertical-line"></div>
        <div class="section-title">Rooms</div>
        <div class="section-text">
          Our rooms are designed to transport you into an environment made for
          leisure. Take your mind off the day-to-day of home life and find a
          private paradise for yourself.
        </div>
      </div>
      <div class="right-column">
        <img src="src/assets/rooms1.jpg" alt="Room" />
      </div>
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

/* Stilovi za novi sadržaj */
.left-column {
  display: flex;
  align-items: center;
}

.vertical-line {
  width: 2px;
  height: 40px;
  background-color: black;
  margin-right: 20px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.section-text {
  font-size: 1rem;
  margin-bottom: 20px;
}

.right-column {
  flex: 1;
  display: flex;
  justify-content: flex-end; /* Pozicioniranje slike na desnoj strani */
  align-items: center; /* Centriranje slike vertikalno */
}

.right-column img {
  max-width: 30%; /* Smanjivanje širine slike na 50% */
  height: auto;
  src: url("src/assets/rooms1.jpg");
}
</style>
