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
      <div class="text-container">
        <h1 class="display-3 welcome-heading text-cool-font text-center">
          <span class="d-md-block d-sm-none">&nbsp;</span>
          THE MOST LUXURIOUS HOTEL ROOMS IN TOWN.
        </h1>
        <p class="lead book-stay-text text-cool-font text-center">
          Experience unparalleled luxury and comfort at our exquisite hotel.
          Indulge in lavish accommodations and exceptional service that will
          leave a lasting impression. Whether it's a romantic getaway or a
          business trip, our elegant rooms and top-notch amenities promise an
          unforgettable stay.
        </p>
      </div>
      <div class="form-container-right">
        <h2 class="form-heading text-cool-font text-center">BOOK YOUR ROOM</h2>
        <p class="lead form-subheading text-cool-font text-center">
          Plan your dream stay today. Explore our room options and book your
          perfect retreat for an extraordinary experience.
        </p>
        <form>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label for="checkIn" class="text-white">Check-in</label>
              <input type="date" id="checkIn" class="form-control" />
            </div>
            <div class="form-group col-md-3">
              <label for="checkOut" class="text-white">Check-out</label>
              <input type="date" id="checkOut" class="form-control" />
            </div>
            <div class="form-group col-md-2">
              <label for="adults" class="text-white">Adults</label>
              <input
                type="number"
                id="adults"
                class="form-control"
                min="0"
                value="0"
              />
            </div>
            <div class="form-group col-md-2">
              <label for="children" class="text-white">Children</label>
              <input
                type="number"
                id="children"
                class="form-control"
                min="0"
                value="0"
              />
            </div>
            <div class="form-group col-md-2 text-center">
              <button class="btn btn-dark btn-lg" type="submit">Search</button>
            </div>
          </div>
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
    <!-- Our Hotel Rooms section -->
    <div class="bg-light py-5 box-container">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1 class="display-4">OUR HOTEL ROOMS</h1>
            <p class="lead">
              Our luxurious accommodations and impeccable service are sure to
              make your stay unforgettable. Our elegant hotel features spacious
              rooms with elegant décor, and all the amenities you need to feel
              at home. We look forward to welcoming you soon!
            </p>
          </div>
        </div>
        <div class="row">
          <!-- Slike u redu -->
          <div class="col-md-4">
            <img
              src="src/assets/welcomeroom1.jpg"
              alt="Image 1"
              class="img-fluid room-image"
            />
          </div>
          <div class="col-md-4">
            <img
              src="src/assets/welcomeroom2.jpg"
              alt="Image 2"
              class="img-fluid room-image"
            />
          </div>
          <div class="col-md-4">
            <img
              src="src/assets/welcomeroom3.jpg"
              alt="Image 3"
              class="img-fluid room-image"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- AT YOUR SERVICE section -->
    <div class="bg-light py-5 box-container">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1 class="display-4">AT YOUR SERVICE</h1>
            <p class="lead">
              The staff is friendly and knowledgeable and can help you choose
              the right service. Our hotel offers excellent accommodations and
              services, perfect for business and leisure travelers alike. Our
              convenient location allows easy access to all the best the city
              has to offer. Book now and take advantage of our special deals and
              discounts.
            </p>
          </div>
        </div>
        <div class="row service-icons">
          <!-- Opcije u redu -->
          <div class="col-md-2 text-center">
            <div class="service-option">
              <i class="fas fa-wifi"></i>
              <p>Free Wi-Fi</p>
            </div>
          </div>
          <div class="col-md-2 text-center">
            <div class="service-option">
              <i class="fas fa-calendar-check"></i>
              <p>Online Booking</p>
            </div>
          </div>
          <div class="col-md-2 text-center">
            <div class="service-option">
              <i class="fas fa-star"></i>
              <p>Best Rated</p>
            </div>
          </div>
          <div class="col-md-2 text-center">
            <div class="service-option">
              <i class="fas fa-award"></i>
              <p>Excellence</p>
            </div>
          </div>
          <div class="col-md-2 text-center">
            <div class="service-option">
              <i class="fas fa-gift"></i>
              <p>Room Packages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Red bottom strip -->
    <div class="red-strip bottom"></div>

    <!-- Naslov "PACKAGES" -->
    <div class="box-container text-center packages">
      <h1 class="packages-heading">PACKAGES</h1>
      <p class="packages-description">
        Choose from some of the most popular room packages we have to offer.
      </p>
    </div>

    <!-- Boxovi za pakete -->
    <div class="box-container packages">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="package-box">
              <img
                src="src/assets/package1.jpg"
                alt="Package 1"
                class="package-image"
              />
              <div class="package-rating">
                <i class="fas fa-star"></i>
                <p>4.8</p>
              </div>
              <p class="package-name">Single Room</p>
              <button class="book-now-button" @click="redirectToRooms">
                Book Now
              </button>
            </div>
          </div>
          <div class="col-md-4">
            <div class="package-box">
              <img
                src="src/assets/package2.jpg"
                alt="Package 2"
                class="package-image"
              />
              <div class="package-rating">
                <i class="fas fa-star"></i>
                <p>4.9</p>
              </div>
              <p class="package-name">Double Room</p>
              <button class="book-now-button" @click="redirectToRooms">
                Book Now
              </button>
            </div>
          </div>
          <div class="col-md-4">
            <div class="package-box">
              <img
                src="src/assets/package3.jpg"
                alt="Package 3"
                class="package-image"
              />
              <div class="package-rating">
                <i class="fas fa-star"></i>
                <p>5.0</p>
              </div>
              <p class="package-name">VIP Room</p>
              <button class="book-now-button" @click="redirectToRooms">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- REVIEWS dio -->
    <div class="bg-light py-5 box-container">
      <!-- Sadržaj REVIEWS dijela -->
    </div>

    <!-- GALLERY dio -->
    <div class="bg-light py-5 box-container">
      <!-- Sadržaj GALLERY dijela -->
    </div>

    <!-- ABOUT dio -->
    <div class="bg-light py-5 box-container">
      <!-- Sadržaj ABOUT dijela -->
    </div>

    <!-- CONTACT dio -->
    <div class="bg-light py-5 box-container">
      <!-- Sadržaj CONTACT dijela -->
    </div>

    <!-- Crvena traka na dnu -->
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
    redirectToRooms() {
      this.$router.push("/rooms");
    },
    logout() {
      this.$router.push("/");
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

.logout-link {
  cursor: pointer;
}

.nav-link {
  font-weight: bold;
}

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

.form-container-right {
  background-color: rgba(30, 30, 30, 0.7);
  padding: 30px;
  width: 25%;
  height: 60%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translate(-50%, -50%);
}

.text-container {
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  padding: 40px;
  width: 40%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 40%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
}

.form-container-right {
  margin-right: 0;
}

.profile-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
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

.navbar.bg-dark-transparent {
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.profile-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.username {
  color: white;
  font-weight: bold;
}

.welcome-heading {
  margin-top: -100px;
}
.form-heading {
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.form-subheading {
  color: white;
  margin-bottom: 20px;
}

.btn-dark {
  margin-top: 10px;
  width: 300px;
  min-height: 50px;
  background-color: rgb(238, 238, 178);
  color: black;
  font-weight: bold;
  border: none;
  transition: background-color 0.2s, box-shadow 0.2s;
}

.btn-dark:hover {
  background-color: rgb(238, 238, 178);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
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
  background-image: url(src/assets/user-image.jpg);
}

/* Novi CSS za Packages section */
.packages {
  background-color: rgb(238, 238, 238);
  padding: 50px 0;
  text-align: center;
}

.packages-heading {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: rgb(183, 71, 71);
}

.packages-description {
  font-size: 18px;
  margin-bottom: 40px;
}

.package-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
}

.package-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

.package-rating {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.package-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.book-now-button {
  background-color: rgb(183, 71, 71);
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.book-now-button:hover {
  background-color: rgb(163, 51, 51);
}
</style>
