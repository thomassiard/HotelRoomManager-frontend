<template>
  <div class="gallery">
    <Navigation />

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
                src="@/assets/adminpanel1.jpeg"
                alt="Image 1"
                class="img-fluid admin-pictures-image"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="admin-pictures-container">
              <img
                src="@/assets/adminpanel2.jpg"
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
        <div class="row justify-content-center">
          <div class="col-md-5 text-center">
            <h2 class="display-6">GUEST INFORMATION</h2>
            <form>
              <div class="form-group">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control room-number-input"
                    id="checkinNumber"
                    v-model="checkinNumber"
                    placeholder="Enter Room Number..."
                    aria-describedby="roomNumberText"
                    required
                  />
                </div>
              </div>

              <div class="form-group text-center mb-4">
                <button
                  type="button"
                  class="btn btn-primary room-number-button"
                  @click="checkIn"
                >
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
          <div class="col-md-12 text-center">
            <!-- Dodana klasa "text-center" ovdje -->
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
              <p>Type of payment: {{ reservation.typeOfPayment }}</p>
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
            <h1 class="display-4">ROOM RESERVATIONS</h1>
            <p class="lead">
              The heart of reservation management, where administrators oversee
              and coordinate room bookings with precision and ease.
            </p>
            <div class="container mt-4">
              <h2>Room List</h2>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Room Number</th>
                    <th>Room Type</th>
                    <th>Is Occupied</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="room in roomsWithOccupancy"
                    :key="room._id.$oid"
                    :class="{ 'table-danger': room.isOccupied }"
                  >
                    <td>{{ room.room_number }}</td>
                    <td>{{ room.room_type }}</td>
                    <td>{{ room.isOccupied ? "Occupied" : "Available" }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
import Navigation from "@/components/navigation.vue";

export default {
  data() {
    return {
      checkinNumber: "",
      reservation: null,
      roomsWithOccupancy: [],
    };
  },
  components: {
    Navigation,
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        // Fetch data from the /api/all-rooms route using Axios
        const response = await axios.get("/api/reservation/all-rooms");
        this.roomsWithOccupancy = response.data.roomsWithOccupancy;
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    },
    async checkIn() {
      // Ovdje trebate implementirati logiku za dohvaćanje podataka na temelju Check-in Number-a
      this.reservation = null;
      let reservation = null;
      try {
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
          typeOfPayment: "",
        };

        reservation = await axios.get(`api/room/${this.checkinNumber}`);
        console.log("reserve", reservation);
        this.reservation = reservation.data;
      } catch (error) {
        console.log(error);
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
  background-image: url(@/assets/user-image.jpg);
}

.username {
  color: white;
  font-weight: bold;
}

.room-number-button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: rgb(238, 238, 178);
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s, box-shadow 0.2s;
}

.room-number-button:hover {
  background-color: rgb(238, 238, 178);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.room-number-input {
  max-width: 300px;
  margin: 0 auto; /* Centriraj ulazno polje */
}
</style>
