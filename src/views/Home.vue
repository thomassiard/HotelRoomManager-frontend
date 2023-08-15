<template>
  <div>
    <div class="home">
      <div class="text-container">
        <h1 class="welcome-text">WELCOME TO</h1>
        <h1 class="hotel-text">Hotel Room Manager</h1>
        <br />
        <p class="sub-text">Book your stay and enjoy.</p>
      </div>

      <div class="scroll-button-container">
        <v-btn class="scroll-button" @click="scrollToContent" fab>
          <v-icon>mdi-arrow-down</v-icon>
        </v-btn>
      </div>
    </div>

    <div class="information-background">
      <div class="information">
        <h1 class="naslov">Rooms</h1>
        <div class="text-and-image">
          <p>
            Our rooms are designed to transport you into an environment made for
            leisure. Take your mind off the day-to-day of home life and find a
            private paradise for yourself.
          </p>
          <img class="home1" src="src/assets/home1.jpg" />
        </div>

        <!-- Drugi blok teksta i slike -->
        <div class="text-and-image">
          <h1 class="naslov">Another Section</h1>
          <p>
            Here is another section of text to describe something else. Feel
            free to add any content you want.
          </p>
          <img class="spa" src="@/assets/spa.jpg" />
        </div>
      </div>
      <div class="login-container">
        <v-btn class="login-button" @click="goToLogin">Login</v-btn>
        <p class="signup-text">
          Don't have an account? <router-link to="/signup">Sign up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    scrollToContent() {
      const element = document.querySelector(".information-background");
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    },
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.home {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("src/assets/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-y: auto;
}

.text-container {
  position: absolute;
  top: 30%;
  left: 10%;
  font-size: 2rem;
  color: white;
}

.hotel-text {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 50;
}

.sub-text {
  font-weight: 300;
}

.scroll-button-container {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.information-background {
  min-height: 100vh;
  background-color: rgb(166, 65, 65);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
}

.information img.home1 {
  max-width: 30%;
  height: auto;
  margin-top: 200px;
  margin-left: 100px;
  margin-right: 500px;
}

.information {
  color: black;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.naslov {
  margin-right: 20px;
}
.text-and-image {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.spa {
  max-width: 50%;
  max-height: 40vh;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.login-button {
  margin-bottom: 10px;
}

.signup-text {
  color: white;
}
</style>
