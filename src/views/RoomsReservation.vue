<template>
  <div class="roomsreservation">
    <!-- Crvena traka ispod navigation bara -->
    <div class="red-strip top"></div>

    <router-link to="/rooms" class="back-to-rooms-button">
      <i class="fa fa-arrow-left"></i> Return
    </router-link>

    <!-- Sadržaj roomsreservation stranice -->
    <div class="roomsreservation-content">
      <div class="container">
        <div class="row justify-content-center mt-5">
          <div class="col-md-6">
            <div class="roomsreservation-form">
              <h1 class="display-4 text-center">ROOM RESERVATION</h1>
              <form @submit.prevent="sendReservation">
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    v-model="email"
                    required
                  />
                </div>
                <!-- Check-in -->
                <div class="form-group">
                  <label for="checkIn">Check-in Date</label>
                  <input
                    type="date"
                    id="checkIn"
                    class="form-control"
                    v-model="checkInDate"
                    required
                  />
                </div>
                <!-- Check-out -->
                <div class="form-group">
                  <label for="checkOut">Check-out Date</label>
                  <input
                    type="date"
                    id="checkOut"
                    class="form-control"
                    v-model="checkOutDate"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="adults">Adults:</label>
                  <input
                    type="number"
                    id="adults"
                    class="form-control"
                    v-model="adults"
                    required
                    min="0"
                  />
                </div>
                <div class="form-group">
                  <label for="kids">Kids:</label>
                  <input
                    type="number"
                    id="kids"
                    class="form-control"
                    v-model="kids"
                    required
                    min="0"
                  />
                </div>
                <div class="form-group">
                  <label for="roomType">Room Type:</label>
                  <div class="input-group">
                    <!-- Koristimo input-group za dodavanje ikonice -->
                    <select
                      id="roomType"
                      class="form-control"
                      v-model="roomType"
                      required
                    >
                      <option value="Single Room">Single Room</option>
                      <option value="Double Room">Double Room</option>
                      <option value="Quad Room">Quad Room</option>
                      <option value="VIP Room">VIP Room</option>
                    </select>
                    <i class="fa fa-chevron-down input-icon"></i>
                  </div>
                </div>
                <div class="form-group">
                  <label for="payment">Type of payment:</label>
                  <div class="input-group">
                    <!-- Koristimo input-group za dodavanje ikonice -->
                    <select
                      id="payment"
                      class="form-control"
                      v-model="payment"
                      required
                    >
                      <option value="Credit Card">Credit Card</option>
                      <option value="Cash">Cash</option>
                    </select>
                    <i class="fa fa-chevron-down input-icon"></i>
                  </div>
                </div>
                <!-- Centrirani gumb -->
                <div class="text-center">
                  <button
                    class="reserve-button"
                    type="reserve"
                    @click="reserve"
                  >
                    Reserve
                  </button>
                </div>
              </form>
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

export default {
  data() {
    return {
      email: "",
      checkInDate: null,
      checkOutDate: null,
      adults: "",
      kids: "",
      roomType: "Single Room",
      payment: "Credit Card",
    };
  },
  methods: {
    async sendReservation() {
      try {
        const _data = {
          email: this.email,
          check_in: this.checkInDate,
          check_out: this.checkOutDate,
          adults: this.adults,
          kids: this.kids,
          room_type: this.roomType,
          type_of_payment: this.payment,
        };
        const response = await axios.post("api/reservation", _data);
        this.$router.push({
          name: "RoomsReservationSent",
        });
      } catch (error) {
        console.error("Error sending reservation:", error);
      }
    },
  },
};
</script>

<style scoped>
.back-to-rooms-button {
  position: fixed;
  top: 12.5%;
  left: 32.5%;
  background-color: rgb(238, 238, 178);
  color: black;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  z-index: 1;
  transition: background-color 0.2s, box-shadow 0.2s;
}

.back-to-rooms-button:hover {
  background-color: rgb(238, 238, 178);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
.roomsreservation-form {
  background-color: #f8f9fa;
  padding: 100px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.roomsreservation-form h1 {
  margin-top: -80px;
}
.roomsreservation-paragraph {
  font-size: 1.15rem;
}

.roomsreservation-images {
  margin-top: 65px;
}

.username {
  color: white;
  font-weight: bold;
}

.roomsreservation-content {
  margin-top: 10rem;
}

.text-red {
  color: rgb(183, 71, 71);
  text-decoration: none;
  transition: color 0.3s;
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

.input-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 2;
  color: #333;
}

.reserve-button {
  background-color: rgb(238, 238, 178);
  color: black;
  font-weight: bold;
  padding: 10px 20px;
  margin-top: 2rem;
  width: 300px;
  min-height: 50px;
  border-radius: 5px;
  order: none;
  transition: background-color 0.2s, box-shadow 0.2s;
}

.reserve-button:hover {
  background-color: rgb(238, 238, 178);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.roomsreservation-images {
  margin-top: 65px;
}

.roomsreservation-image {
  max-height: 300px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.roomsreservation-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}

.red-strip.top {
  position: fixed;
  top: 0;
  height: 123px;
  background-color: rgb(183, 71, 71);
  width: 100%;
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

.red-strip.bottom {
  position: fixed;
  bottom: 0;
  height: 123px;
  background-color: rgb(183, 71, 71);
  width: 100%;
  margin-top: 10px;
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
</style>
