<template>
  <div>
    <!-- Background image and text -->
    <div class="home">
      <div
        class="text-container position-absolute top-50 start-50 translate-middle"
      >
        <div class="text-center welcome-text">
          <h1 class="display-3 welcome-heading">WELCOME TO</h1>
          <h1 class="display-3 text-cool-font">Hotel Room Manager</h1>
          <p class="lead book-stay-text">Book your stay and enjoy.</p>
        </div>
      </div>
    </div>
    <!-- Scroll button -->
    <div class="scroll-button-container">
      <v-btn icon class="mt-4" @click="scrollToContent">
        <v-icon large>mdi-chevron-down</v-icon>
      </v-btn>
    </div>
    <!-- Red top and bottom strips -->
    <div class="red-strip top"></div>
    <div class="red-strip bottom"></div>
    <!-- Ostatak sadržaja -->
    <div class="bg-light py-5" ref="contentSection">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-4">
            <h1 class="display-4">Rooms</h1>
            <p class="lead rooms-text">
              Our rooms are designed to transport you into an environment made
              for leisure. Take your mind off the day-to-day of home life and
              find a private paradise for yourself.
            </p>
          </div>
          <div class="col-md-6 mb-4">
            <img
              src="src/assets/home1.jpg"
              alt="Home1 slika"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4">
            <h1 class="display-4">Services</h1>
            <p>
              Explore our diverse range of premium hotel services that enhance
              your stay to the fullest. Indulge in exquisite dining, fitness
              facilities, spa treatments, and much more.
            </p>
          </div>
          <div class="col-md-6 mb-4">
            <img
              src="src/assets/Home2.jpg"
              alt="Home2 slika"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <v-btn @click="goToLogin" class="login-button beige">Login</v-btn>
            <p class="signup-text">
              Don't have an account?
              <router-link to="/signup" class="red-link">Sign up</router-link>
            </p>
            <!-- Red strip under sign up -->
            <div class="red-strip bottom-signup"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      showScrollButton: true,
    };
  },
  methods: {
    scrollToContent() {
      this.showScrollButton = false;
      const contentSection = this.$refs.contentSection;
      if (contentSection) {
        contentSection.scrollIntoView({ behavior: "smooth" });
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("src/assets/homebackground.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-y: auto;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.text-container {
  font-size: 2rem;
  color: white;
  text-align: center; /* Centriramo tekst unutar text-containera */
  max-width: 600px; /* Ograničavamo širinu teksta da ne bude preširok */
  padding: 20px; /* Dodajemo malo razmaka oko teksta */
}

.scroll-button-container {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
}

.manager-text {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.red-strip {
  height: 15px;
  background-color: red;
  width: 100%;
  position: absolute;
  z-index: -1;
}

.red-strip.top {
  top: 0;
}

.red-strip.bottom {
  bottom: 0;
}

.red-strip.bottom-signup {
  height: 15px;
  background-color: red;
  width: 100%;
  position: relative;
  margin-top: 10px;
}
.hotel-text,
.manager-text-cool-font {
  margin: 0;
}

.manager-text-cool-font {
  font-family: "CoolFont";
}

.book-stay-text {
  margin-top: 20px;
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
  background-color: rgb(135, 65, 65);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: white;
}

.white-background {
  width: 100vw;
  min-height: 72.5vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px;
  margin-top: 150px;
}

.white-background .content {
  margin: auto;
  max-width: 1000px;
}
.section {
  color: black;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.rooms-text {
  width: 60ch;
}

.image-container img {
  max-width: 100%; /* Smanjit će širinu slike na maksimalnu širinu kontejnera */
}

.image-container {
  max-width: 30%;
}

.naslov {
  margin-right: 20px;
  font-size: 24px;
}

.text-and-image {
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: space-around;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-button {
  margin-top: 20px;
  background-color: rgb(223, 223, 128);
}

.signup-text {
  margin-top: 10px;
  color: black;
}
</style>
