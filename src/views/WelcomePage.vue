<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark-transparent py-3">
      <div class="container-fluid">
        <div class="user-image-navbar"></div>
        <router-link to="/profile" class="navbar-brand">
          <span class="username">Guest</span>
        </router-link>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/welcomepage" class="nav-link ml-3 text-white"
              >HOME</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/rooms" class="nav-link ml-3 text-white"
              >ROOMS</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/gallery" class="nav-link ml-3 text-white"
              >GALLERY</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/reviews" class="nav-link ml-3 text-white"
              >REVIEWS</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link ml-3 text-white"
              >ABOUT</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link ml-3 text-white"
              >CONTACT</router-link
            >
          </li>
          <li class="nav-item">
            <a @click="logout" class="nav-link ml-3 text-black logout-link"
              >LOG OUT</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <!-- Background image and text -->
    <div class="home">
      <div
        class="text-container-left position-absolute top-50 start-0 translate-middle-y"
      >
        <div class="text-left welcome-text">
          <h1 class="display-3 welcome-heading">
            THE MOST LUXURIOUS HOTEL ROOMS IN TOWN.
          </h1>
          <p class="lead book-stay-text">
            Our luxurious accommodations and impeccable service are sure to make
            your stay unforgettable. Our elegant hotel features spacious rooms
            with elegant décor, and all the amenities you need to feel at home.
            We look forward to welcoming you soon!
          </p>
        </div>
      </div>
      <div
        class="form-container-right position-absolute top-50 end-0 translate-middle-y"
      >
        <h2 class="form-heading">Book your room</h2>
        <p class="lead form-subheading">
          From parks and pathways to live entertainment, you’ll have a wealth of
          amenities to make your experience memorable.
        </p>
        <form>
          <div class="form-group">
            <label for="checkIn">Check-in Date</label>
            <input type="date" id="checkIn" class="form-control" />
          </div>
          <div class="form-group">
            <label for="checkOut">Check-out Date</label>
            <input type="date" id="checkOut" class="form-control" />
          </div>
          <div class="form-group">
            <label for="adults">Adults</label>
            <input type="number" id="adults" class="form-control" />
          </div>
          <div class="form-group">
            <label for="children">Children</label>
            <input type="number" id="children" class="form-control" />
          </div>
          <button class="btn btn-dark btn-block" type="submit">Search</button>
        </form>
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
    logout() {
      // Metoda za odjavu korisnika
      this.$router.push("/"); // Ovdje koristimo router za vraćanje na početnu stranicu
    },
  },
};
</script>

<style scoped>
.home {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("src/assets/welcomebackground.jpg");
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

/* Stil za kursor */
.logout-link {
  cursor: pointer;
}

.nav-link {
  font-weight: bold;
}
/* Stilovi za LOG OUT link */
.logout-link {
  color: black;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.2s, color 0.2s;
}

.logout-link {
  background-color: white;
}

.text-container {
  font-size: 2rem;
  color: white;
  text-align: center;
  max-width: 600px;
  padding: 20px;
}
/* Stilovi za profilnu sliku */
.profile-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.form-container-right {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  max-width: 400px;
  right: 10%;
  transform: translateX(50%);
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

/* Stilovi za prozirni Navigation Bar */
.navbar.bg-dark-transparent {
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1; /* Postavite veći z-index da Navigation Bar bude iznad pozadinske slike */
}

/* Stilovi za profilnu sliku */
.profile-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

/* Stilovi za korisničko ime */
.username {
  color: white;
  font-weight: bold;
}

/* Stilovi za text container na lijevoj strani */
.text-container-left {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  max-width: 600px;
  left: 0;
  transform: translateX(-50%);
}

/* Stilovi za form container na desnoj strani */
.form-container-right {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  max-width: 400px;
  right: 0;
  transform: translateX(50%);
}

/* Stilovi za naslov forme */
.form-heading {
  color: white;
}

/* Stilovi za podnaslov forme */
.form-subheading {
  color: white;
  margin-bottom: 20px;
}

/* Stilovi za input polja forme */
.form-control {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
}

/* Stilovi za Search gumb */
.btn-dark {
  background-color: white;
  color: black;
  font-weight: bold;
  transition: background-color 0.2s, color 0.2s;
}

.btn-dark:hover {
  background-color: black;
  color: white;
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

.user-image-navbar {
  width: 2%;
  height: 40px;
  background-color: #000000;
  border-radius: 50%;
  margin-right: 10px;
  background-size: cover;
  background-position: center;
  /* Dodajte svoju pozadinsku sliku */
  background-image: url(src/assets/user-image.jpg);
}
</style>
