<template>
  <div class="gallery">
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div class="container-fluid">
        <div class="user-image-navbar"></div>
        <router-link to="/profile" class="navbar-brand">
          <span class="username">Admin</span>
        </router-link>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/welcomepage" class="nav-link ml-3 text-white"
              >HOME</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/welcomepage" class="nav-link ml-3 text-red"
              >ADMIN</router-link
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

    <!-- Crvena traka ispod navigation bara -->
    <div class="red-strip top"></div>

    <!-- Our Hotel Rooms section -->
    <div class="bg-light py-5 box-container">
      <div class="container">
        <div class="row">
          <div class="col-md-12 service-container text-center">
            <h1 class="display-4">ADMIN PANEL</h1>
            <p class="lead">
              This is a centralized hub for administrators to manage guest
              check-ins and monitor room reservations, helping streamline
              administrative tasks efficiently.
            </p>
          </div>
        </div>
        <div class="row">
          <!-- Slike u redu -->
          <div class="col-md-6">
            <div class="admin-pictures-container">
              <img
                src="src/assets/adminpanel1.jpeg"
                alt="Image 1"
                class="img-fluid admin-pictures-image"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="admin-pictures-container">
              <img
                src="src/assets/adminpanel2.jpg"
                alt="Image 2"
                class="img-fluid admin-pictures-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Crvena traka na dnu -->
    <div class="red-strip"></div>

    <div class="bg-light py-5 box-container">
      <div class="container">
        <div class="row">
          <div class="col-md-12 service-container text-center">
            <h1 class="display-4">CHECK-IN</h1>
            <p class="lead">
              Within this section, administrators wield the power to facilitate
              seamless guest arrivals, ensuring a warm reception and efficient
              registration process.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Forma za unos Check-in Number-a -->
    <div class="bg-light py-5 box-container">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="display-5">CHECK-IN</h2>
            <form>
              <!-- Dodajte klasu "form-group" oko svake form-grupe kako biste primijenili isti stil -->
              <div class="form-group">
                <label for="checkinNumber">Check-in Number</label>
                <input
                  type="text"
                  class="form-control"
                  id="checkinNumber"
                  v-model="checkinNumber"
                  placeholder="Enter Check-in Number"
                />
              </div>
              <div class="form-group">
                <button type="button" class="btn btn-primary" @click="checkIn">
                  Check
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Prikaz podataka o gostu ako su dostupni -->
    <div v-if="reservation" class="bg-light py-5 box-container">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="display-5">GUEST INFORMATION</h2>
            <div class="form-group">
              <p>Check-in Number: {{ checkinNumber }}</p>
            </div>
            <div class="form-group">
              <p>Full Name: {{ reservation.fullName }}</p>
            </div>
            <div class="form-group">
              <p>Phone Number: {{ reservation.phoneNumber }}</p>
            </div>
            <div class="form-group">
              <p>Email: {{ reservation.email }}</p>
            </div>
            <div class="form-group">
              <p>Room Number: {{ reservation.roomNumber }}</p>
            </div>
            <div class="form-group">
              <p>Room Type: {{ reservation.roomType }}</p>
            </div>
            <div class="form-group">
              <p>Adults: {{ reservation.adults }}</p>
            </div>
            <div class="form-group">
              <p>Kids: {{ reservation.kids }}</p>
            </div>
            <div class="form-group">
              <p>Check-in Date: {{ reservation.checkInDate }}</p>
            </div>
            <div class="form-group">
              <p>Check-out Date: {{ reservation.checkOutDate }}</p>
            </div>
            <div class="form-group">
              <p>Special Requests: {{ reservation.specialRequests }}</p>
            </div>

            <!-- Dodajte ostale form-grupe za ostale podatke o rezervaciji -->
          </div>
        </div>
      </div>
    </div>

    <!-- Crvena traka na dnu -->
    <div class="red-strip"></div>

    <div class="bg-light py-5 box-container">
      <div class="container">
        <div class="row">
          <div class="col-md-12 service-container text-center">
            <h1 class="display-4">ROOM RESERVATIONS</h1>
            <p class="lead">
              The heart of reservation management, where administrators oversee
              and coordinate room bookings with precision and ease.
            </p>
          </div>
        </div>
      </div>
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
      checkinNumber: "",
      reservation: null,
    };
  },
  methods: {
    async checkIn() {
      // Ovdje trebate implementirati logiku za dohvaćanje podataka na temelju Check-in Number-a
      try {
        // Ovdje pozovite Axios ili drugi način za dohvaćanje podataka iz baze
        // i spremite ih u varijablu reservation
        // Na primjer:
        // const response = await axios.get(`/api/reservations/${this.checkinNumber}`);
        // this.reservation = response.data;

        // Dummy podaci za testiranje
        this.reservation = {
          fullName: "",
          phoneNumber: "",
          email: "",
          roomNumber: "",
          roomType: "",
          adults: "",
          kids: "",
          checkInDate: "",
          checkOutDate: "",
          specialRequests: "",
        };
      } catch (error) {
        console.error(error);
        this.reservation = null;
      }
    },
    logout() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.nav-link {
  font-weight: bold;
}

.navbar.bg-dark-transparent {
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.logout-link {
  cursor: pointer;
  color: black;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.2s, color 0.2s;
  background-color: white;
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

.admin-header {
  text-align: center;
  display: inline-block;
  margin-top: 1rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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

.admin-pictures-container {
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
  text-align: center;
}

.admin-pictures-image {
  width: 150%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
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

.username {
  color: white;
  font-weight: bold;
}
</style>
