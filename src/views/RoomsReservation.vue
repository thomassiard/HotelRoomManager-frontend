<template>
  <div class="contact">
    <!-- Crvena traka ispod navigation bara -->
    <div class="red-strip top"></div>

    <router-link to="/rooms" class="back-to-rooms-button">
      <i class="fa fa-arrow-left"></i> Return
    </router-link>

    <!-- Sadržaj Contact Us stranice -->
    <div class="contact-content">
      <div class="container">
        <div class="row justify-content-center mt-5">
          <div class="col-md-6">
            <div class="contact-form">
              <h1 class="display-4 text-center">ROOM RESERVATION</h1>
              <form @submit.prevent="sendReservation">
                <div class="form-group">
                  <label for="fullName">Full Name:</label>
                  <input
                    type="text"
                    id="fullName"
                    class="form-control"
                    v-model="fullName"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="phoneNumber">Phone Number:</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    class="form-control"
                    v-model="phoneNumber"
                    required
                  />
                </div>
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
                    <!-- Dodajte ikonicu za strelicu ovde -->
                    <i class="fa fa-chevron-down input-icon"></i>
                  </div>
                </div>
                <div class="form-group">
                  <label for="specialRequests">Special Requests:</label>
                  <textarea
                    id="specialRequests"
                    class="form-control"
                    rows="5"
                    style="resize: none; max-height: 200px"
                    v-model="specialRequests"
                  ></textarea>
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
      fullName: "",
      phoneNumber: "",
      email: "",
      adults: "",
      kids: "",
      roomType: "Single Room",
      specialRequests: "",
    };
  },
  methods: {
    async sendReservation() {
      try {
        // Ovde možete poslati rezervaciju na server, ako je potrebno
        // A zatim preusmeriti na odgovarajuću rutu
        this.$router.push({
          name: "RoomsReservationSent", // Zamijenite sa odgovarajućim nazivom rute
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
  top: 12.5%; /* Promenite visinu prema vašim potrebama */
  left: 32.5%; /* Podešavanje levo od vrha ekrana */
  background-color: rgb(238, 238, 178);
  color: black;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none; /* Dodajte da se ukloni podvučeno tekst dugmeta */
  z-index: 1; /* Postavite z-index da biste stavili dugme iznad crvene trake */
  transition: background-color 0.2s, box-shadow 0.2s;
}

.back-to-rooms-button:hover {
  background-color: rgb(238, 238, 178);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
.contact-form {
  background-color: #f8f9fa;
  padding: 100px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.contact-paragraph {
  font-size: 1.15rem;
}

.contact-images {
  margin-top: 65px;
}

.username {
  color: white;
  font-weight: bold;
}

.contact-content {
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
  right: 10px; /* Prilagodite ovo kako biste postavili ikonu na željeni položaj */
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 2;
  color: #333; /* Promenite boju ikonice prema vašim potrebama */
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

.contact-images {
  margin-top: 65px;
}

.contact-image {
  max-height: 300px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.contact-image {
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
  background-image: url(src/assets/user-image.jpg);
}
</style>
