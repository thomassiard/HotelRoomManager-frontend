<template>
  <div>
    <Navigation />
    <!-- Background image and text -->
    <div class="home">
      <div class="text-container">
        <h1 class="display-3 welcome-heading text-cool-font text-center">
          <span class="d-md-block d-sm-none">&nbsp;</span>
          THE MOST LUXURIOUS HOTEL ROOMS IN TOWN
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
        <form @submit.prevent="searchAvailability">
          <div class="form-row">
            <!-- Check-in -->
            <div class="form-group col-md-6 mx-auto">
              <label for="checkIn" class="text-white">Check-in Date</label>
              <input
                type="date"
                id="checkIn"
                class="form-control"
                v-model="checkInDate"
                required
              />
            </div>
            <!-- Check-out -->
            <div class="form-group col-md-6 mx-auto">
              <label for="checkOut" class="text-white">Check-out Date</label>
              <input
                type="date"
                id="checkOut"
                class="form-control"
                v-model="checkOutDate"
                required
              />
            </div>
            <!-- Room Type -->
            <div class="form-group col-md-6 mx-auto">
              <label for="roomType" class="text-white">Room Type</label>
              <select id="roomType" class="form-control" v-model="roomType">
                <option value="single">Single Room</option>
                <option value="double">Double Room</option>
                <option value="quad">Quad Room</option>
                <option value="vip">VIP Room</option>
              </select>
            </div>
            <!-- Search Button -->
            <div class="form-group col-md-1 text-center">
              <button class="btn btn-dark btn-lg" type="submit">Search</button>
            </div>
          </div>
        </form>
        <!-- Prikaz poruke dostupnosti -->
        <p class="availability-message">{{ availabilityMessage }}</p>
      </div>
    </div>
    <!-- Scroll button -->
    <div class="scroll-button-container" v-if="showScrollButton">
      <v-btn icon class="mt-4" @click="scrollToContent">
        <v-icon large>mdi-chevron-down</v-icon>
      </v-btn>
    </div>
    <!-- Red top strip -->
    <div class="red-strip top" ref="contentSection"></div>
    <!-- Our Hotel Rooms section -->
    <div class="bg-light py-5 box-container">
      <div class="container">
        <div class="row">
          <div class="col-md-12 service-container text-center">
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
            <div class="room-image-container">
              <img
                src="@/assets/welcomeroom1.jpg"
                alt="Image 1"
                class="img-fluid room-image"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="room-image-container">
              <img
                src="@/assets/welcomeroom2.jpg"
                alt="Image 2"
                class="img-fluid room-image"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="room-image-container">
              <img
                src="@/assets/welcomeroom3.jpg"
                alt="Image 3"
                class="img-fluid room-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Crvena traka nakon slika -->
    <div class="red-strip bottom"></div>

    <!-- AT YOUR SERVICE section -->
    <div class="bg-light py-5 box-container">
      <div class="container">
        <div class="row">
          <div class="col-md-12 service-container text-center">
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
              <i class="fa fa-wifi"></i>
              <p>Free Wi-Fi</p>
            </div>
          </div>
          <div class="col-md-2 text-center">
            <div class="service-option">
              <i class="fa fa-calendar"></i>
              <p>Online Booking</p>
            </div>
          </div>
          <div class="col-md-2 text-center">
            <div class="service-option">
              <i class="fa fa-trophy"></i>
              <p>Best Rated</p>
            </div>
          </div>
          <div class="col-md-2 text-center">
            <div class="service-option">
              <i class="fa fa-star"></i>
              <p>Excellence</p>
            </div>
          </div>
          <div class="col-md-2 text-center">
            <div class="service-option">
              <i class="fa fa-gift"></i>
              <p>Room Packages</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Crvena traka nakon slika -->
    <div class="red-strip bottom"></div>

    <!-- PACKAGES section -->
    <div class="bg-light py-5 box-container packages">
      <div class="container">
        <div class="row">
          <div class="col-md-12 service-container text-center">
            <h1 class="display-4 packages-heading">PACKAGES</h1>
            <p class="lead packages-description">
              Choose from some of the most popular room packages we have to
              offer.
            </p>
          </div>
        </div>

        <!-- Boxovi za pakete -->
        <div class="box-container packages">
          <div class="container">
            <div class="row">
              <!-- Prvi package box -->
              <div class="col-md-3">
                <div class="package-box">
                  <img
                    src="@/assets/package1.jpg"
                    alt="Package 1"
                    class="package-image"
                  />
                  <div class="package-rating">
                    <i class="fa fa-star"></i>
                    <!-- Yellow star icon here -->
                    <p class="package-rating-text">4.5</p>
                  </div>
                  <p class="package-name">Single Room</p>
                  <button class="book-now-button" @click="redirectToRooms">
                    Book Now
                  </button>
                </div>
              </div>
              <!-- Drugi package box -->
              <div class="col-md-3">
                <div class="package-box">
                  <img
                    src="@/assets/package2.jpg"
                    alt="Package 2"
                    class="package-image"
                  />
                  <div class="package-rating">
                    <i class="fa fa-star"></i>
                    <!-- Yellow star icon here -->
                    <p class="package-rating-text">4.6</p>
                  </div>
                  <p class="package-name">Double Room</p>
                  <button class="book-now-button" @click="redirectToRooms">
                    Book Now
                  </button>
                </div>
              </div>
              <!-- Treći package box -->
              <div class="col-md-3">
                <div class="package-box">
                  <img
                    src="@/assets/package3.jpg"
                    alt="Package 3"
                    class="package-image"
                  />
                  <div class="package-rating">
                    <i class="fa fa-star"></i>
                    <!-- Yellow star icon here -->
                    <p class="package-rating-text">4.8</p>
                  </div>
                  <p class="package-name">Quad Room</p>
                  <button class="book-now-button" @click="redirectToRooms">
                    Book Now
                  </button>
                </div>
              </div>
              <!-- Četvrti package box -->
              <div class="col-md-3">
                <div class="package-box">
                  <img
                    src="@/assets/package4.jpg"
                    alt="Package 4"
                    class="package-image"
                  />
                  <div class="package-rating">
                    <i class="fa fa-star"></i>
                    <!-- Yellow star icon here -->
                    <p class="package-rating-text">5.0</p>
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
      </div>
    </div>

    <!-- Red bottom strip -->
    <div class="red-strip bottom"></div>

    <!-- MORE FEATURES section -->
    <div class="bg-light py-5 box-container features">
      <div class="container">
        <div class="row">
          <div class="col-md-12 service-container text-center">
            <h1 class="display-4 features-heading">MORE FEATURES</h1>
            <p class="lead features-description">
              Explore some of the amazing features we offer.
            </p>
          </div>
        </div>
        <div class="row features-row">
          <!-- Gallery -->
          <div class="col-md-3">
            <div class="feature-box">
              <h2 class="feature-title">Gallery</h2>
              <router-link
                to="/gallery"
                class="check-out-button text-decoration-none"
                >CHECK OUT</router-link
              >
            </div>
          </div>
          <!-- Reviews -->
          <div class="col-md-3">
            <div class="feature-box">
              <h2 class="feature-title">Reviews</h2>
              <router-link
                to="/reviews"
                class="check-out-button text-decoration-none"
                >CHECK OUT</router-link
              >
            </div>
          </div>
          <!-- About -->
          <div class="col-md-3">
            <div class="feature-box">
              <h2 class="feature-title">About</h2>
              <router-link
                to="/about"
                class="check-out-button text-decoration-none"
                >CHECK OUT</router-link
              >
            </div>
          </div>
          <!-- Contact -->
          <div class="col-md-3">
            <div class="feature-box">
              <h2 class="feature-title">Contact</h2>
              <router-link
                to="/contact"
                class="check-out-button text-decoration-none"
                >CHECK OUT</router-link
              >
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
import Navigation from "@/components/navigation.vue";
import axios from "axios";

export default {
  name: "WelcomePage",
  data() {
    return {
      showScrollButton: true,
      checkInDate: null,
      checkOutDate: null,
      roomType: "single", // Podesite na početni tip sobe
      availabilityMessage: "",
    };
  },
  components: {
    Navigation,
  },
  methods: {
    scrollToContent() {
      this.showScrollButton = true;
      const contentSection = this.$refs.contentSection;
      if (contentSection) {
        contentSection.scrollIntoView({ behavior: "smooth" });
      }
    },
    searchAvailability() {
      const isAvailable = this.isRoomAvailable(
        this.checkInDate,
        this.checkOutDate,
        this.roomType
      );

      if (isAvailable) {
        this.availabilityMessage = "Room is available!";
        alert("Room is available!");
        this.$router.push("/rooms");
      } else {
        this.availabilityMessage = "All rooms are reserved!";
        this.checkInDate = null;
        this.checkOutDate = null;
        this.roomType = "single";
      }
    },
    async isRoomAvailable(checkInDate, checkOutDate, roomType) {
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);

      const response = await axios.get("/api/reservation/available-rooms");
      const _data = response.data;
      console.log(_data);
    },
    redirectToRooms() {
      this.$router.push("/rooms");
    },
  },
};
</script>

<style scoped>
.home {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("@/assets/welcomebackground.jpg");
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

.text-red {
  color: rgb(183, 71, 71);
  text-decoration: none;
  transition: color 0.3s;
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

.form-group {
  margin-top: 20px;
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

.navbar.bg-dark-transparent {
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
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
  margin-top: 20px;
  margin-left: 11.5rem;
  width: 200px;
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
  background-image: url(@/assets/user-image.jpg);
}

.hotel-room-container {
  width: 97%;
  text-align: center;
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.room-image-container {
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
  text-align: center;
}

.room-image {
  width: 150%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

.service-container {
  width: 97%;
  text-align: center;
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.service-icons {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.service-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.service-option i {
  font-size: 24px;
  margin-bottom: 10px;
}

.packages-description {
  font-size: 18px;
  margin-bottom: 40px;
}

.package-box {
  width: 300px;
  height: 350px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 20px 0;
  text-align: center;
  display: flex; /* Dodajte ovo svojstvo */
  flex-direction: column; /* Dodajte ovo svojstvo */
  align-items: center; /* Dodajte ovo svojstvo */
}

.package-image {
  width: 100%; /* Set a fixed width for the images */
  height: 150px; /* Set a fixed height for the images */
  object-fit: cover; /* Maintain aspect ratio while covering the container */
  border-radius: 10px;
  margin-bottom: 10px;
}

.package-rating {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.package-rating i {
  color: #ffc107; /* Boja ocjene */
  margin-right: 5px;
}

.package-rating-text {
  margin: 0; /* Remove margin from <p> element */
}

.package-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px; /* Smanjite ovu marginu */
  padding-top: 10px; /* Dodajte ovu marginu */
  color: black;
}

.book-now-button {
  background-color: rgb(238, 238, 178);
  color: black;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  order: none;
  transition: background-color 0.2s, box-shadow 0.2s;
}

.book-now-button:hover {
  background-color: rgb(238, 238, 178);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.features-row {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.feature-box {
  background-color: rgb(30, 30, 30);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: 20px auto;
  max-width: 290px;
  height: 150px;
}

.feature-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  color: white;
}

.check-out-button {
  margin-top: 10px;
  background-color: rgb(238, 238, 178);
  color: black;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.2s, box-shadow 0.2s;
}

.check-out-button:hover {
  background-color: rgb(238, 238, 178);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.availability-message {
  color: white;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
}
</style>
