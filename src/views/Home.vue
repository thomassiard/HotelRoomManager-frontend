<template>
  <div>
    <!-- Background image and text -->
    <div class="home">
      <div
        class="text-container position-absolute top-50 start-50 translate-middle"
      >
        <div class="text-center welcome-text">
          <h1 class="display-3 welcome-heading">WELCOME TO</h1>
          <h1 class="display-3 text-cool-font">
            <span class="text-truncate">Hotel Room Manager</span>
          </h1>
          <p class="lead book-stay-text">Book your stay and enjoy.</p>
        </div>
      </div>
    </div>
    <!-- Scroll button -->
    <div class="scroll-button-container" v-if="showScrollButton">
      <v-btn icon class="mt-4" @click="scrollToContent">
        <v-icon large>mdi-chevron-down</v-icon>
      </v-btn>
    </div>
    <!-- Red top strip -->
    <div class="red-strip top"></div>
    <!-- Ostatak sadržaja -->
    <div class="bg-light py-5" ref="contentSection">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-4">
            <h1 class="display-4">Rooms</h1>
            <p class="lead rooms-text">
              Welcome to our cozy hotel rooms, where comfort meets convenience.
              Unwind in a space designed for your relaxation. Whether you're
              traveling for business or pleasure, our rooms offer a retreat from
              the bustling world outside. Experience a blend of comfort, style,
              and warm hospitality that will make your stay truly special.
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
        <!-- Dark red strip between sections -->
        <div class="red-strip dark-red"></div>
        <div class="row">
          <div class="col-md-6 mb-4 order-md-2">
            <h1 class="display-4">Services</h1>
            <p class="lead services-text">
              Uncover our comprehensive hotel services, including fine dining,
              fitness center access, and indulgent spa treatments, all designed
              to enhance your stay. In addition, explore our exclusive VIP rooms
              for an elevated experience that goes beyond the ordinary stay.
            </p>
          </div>
          <div class="col-md-6 mb-4 order-md-1">
            <img
              src="src/assets/Home2.jpg"
              alt="Home2 slika"
              class="img-fluid"
            />
          </div>
        </div>
        <!-- Dark red strip before login section -->
        <div class="red-strip dark-red"></div>
        <div class="row">
          <div class="col-md-12 text-center">
            <div class="login-container">
              <v-btn
                @click="goToLogin"
                class="login-button beige mt-2 bold-text"
                >Login</v-btn
              >
              <p class="signup-text mb-2">
                Don't have an account?
                <router-link to="/signup" class="red-link text-decoration-none"
                  >Sign up</router-link
                >
              </p>
              <!-- Dark red strip under sign up -->
              <div class="red-strip dark-red"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Red bottom strip -->
    <div class="red-strip bottom"></div>
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
      this.showScrollButton = true;
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
  text-align: center;
  max-width: 600px;
  padding: 20px;
}

.scroll-button-container {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.red-strip {
  height: 123px;
  background-color: rgb(183, 71, 71);
  width: 100%;
  position: relative;
  z-index: -1;
}

.red-strip.top {
  top: 0;
}

.red-strip.bottom {
  bottom: 0;
}

.red-strip.dark-red {
  height: 25px;
  background-color: rgb(183, 71, 71);
  width: 100%;
  position: relative;
  margin-top: 10px;
}

.text-truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.text-cool-font {
  font-family: "Oswald";
}

.login-button {
  margin-top: 10px;
  width: 300px;
  min-height: 50px;
  background-color: rgb(238, 238, 178);
  color: black;
  font-weight: bold;
  border: none;
  transition: background-color 0.2s, box-shadow 0.2s;
}

.login-button:hover {
  background-color: rgb(238, 238, 178);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.bold-text {
  font-weight: bold;
}

.signup-text {
  margin-top: 10px;
  color: black;
}

.red-link {
  color: rgb(183, 71, 71);
  font-weight: bold;
  position: relative;
}

.red-link::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: rgb(183, 71, 71);
  position: absolute;
  bottom: -5px;
  left: 0;
  transform: scaleX(0);
  transition: transform 0.2s ease-in-out;
}

.red-link:hover::after {
  transform: scaleX(1);
}
</style>
