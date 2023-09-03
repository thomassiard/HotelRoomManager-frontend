<template>
  <div class="rooms">
    <Navigation />
    <!-- Crvena traka ispod navigation bara -->
    <div class="red-strip top"></div>

    <!-- Naslov apartmana -->
    <div class="rooms-header">
      <h1 class="display-4 text-center">APARTMENT RATES</h1>
      <p class="text-center">
        Book your stay at our hotel and enjoy a comfortable and relaxing
        experience.
        <br />
        Our hotel offers excellent accommodations and services, perfect for
        business and leisure travelers alike.
      </p>
    </div>

    <!-- Dodajte tri box containera za sezone ispod naslova "APARTMENT RATES" -->
    <div class="rate-container">
      <div class="rate-box">
        <h2 class="rate-title">Low Season</h2>
        <p class="rate-price">Default price</p>
        <p class="rate-period">January 15th to May 15th</p>
      </div>
      <div class="rate-box">
        <h2 class="rate-title">High Season</h2>
        <p class="rate-price">20% increase in price</p>
        <p class="rate-period">May 15th to October 15th</p>
      </div>
      <div class="rate-box">
        <h2 class="rate-title">Medium Season</h2>
        <p class="rate-price">10% increase in price</p>
        <p class="rate-period">October 15th to January 15th</p>
      </div>
    </div>

    <!-- Crvena traka na dnu -->
    <div class="red-strip"></div>

    <!-- Naslov HOUSE RULES -->
    <div class="rooms-header">
      <h1 class="display-4 text-center">HOUSE RULES</h1>
      <p class="text-center">Respectful Guidelines for a Comfortable Stay.</p>
    </div>

    <!-- Container za HOUSE RULES sa slikom -->
    <div class="house-container">
      <!-- Tekst "HOUSE RULES" -->
      <div class="house-rules">
        <ul>
          <li>
            Guests must provide a valid form of identification at check-in.
          </li>
          <li>Guests must be at least 18 years of age to check in.</li>
          <li>Guests are not allowed to bring firearms into the hotel.</li>
          <li>Guests are not allowed to bring pets into the hotel.</li>
          <li>Guests are not allowed to smoke in the hotel.</li>
          <li>
            Guests are responsible for their own belongings. The hotel is not
            responsible for any lost or stolen items.
          </li>
          <li>
            Guests are responsible for any damages they cause to the hotel
            property.
          </li>
          <li>
            Guests are responsible for any fines or penalties that are incurred
            during their stay.
          </li>
          <li>The hotel reserves the right to refuse service to any guest.</li>
        </ul>
      </div>

      <!-- Slika "HOUSE RULES" -->
      <div class="house-image">
        <img src="@/assets/houserules.jpg" alt="House Rules Image" />
      </div>
    </div>

    <!-- Crvena traka na dnu -->
    <div class="red-strip"></div>

    <!-- Naslov galerije -->
    <div class="rooms-header" id="rooms-section">
      <h1 class="display-4 text-center">ROOMS</h1>
      <p class="text-center">Explore our luxurious room options.</p>
    </div>

    <!-- Prikaži sobe kao reklame -->
    <div class="room-advertisements">
      <div class="room-advertisement">
        <img src="@/assets/package1.jpg" alt="Single Room" class="room-image" />
        <div class="room-details">
          <div class="package-rating">
            <i class="fa fa-star"></i>
            <p class="package-rating-text">4.5</p>
          </div>
          <h2 class="room-name">Single Room</h2>
          <p class="room-description">
            Our single room is perfect for travelers looking for private and
            comfortable accommodation.
            <br />
            This room offers a cozy bed, space for work and relaxation, and a
            modern design. Enjoy a peaceful ambiance and all the necessary
            amenities for a relaxing stay.
          </p>
          <p class="room-price">50 € / night</p>
          <router-link to="/roomsreservation">
            <button class="book-now-button">Book Now</button>
          </router-link>
        </div>
      </div>

      <div class="room-advertisement">
        <img src="@/assets/package2.jpg" alt="Single Room" class="room-image" />
        <div class="room-details">
          <div class="package-rating">
            <i class="fa fa-star"></i>
            <p class="package-rating-text">4.6</p>
          </div>
          <h2 class="room-name">Double Room</h2>
          <p class="room-description">
            Our double room is ideal for couples or travelers who want to share
            a room.
            <br />
            Equipped with a comfortable double bed and modern amenities, this
            room provides comfort and convenience for your stay.
            <br />
            Spacious and elegantly decorated, this room creates a pleasant
            atmosphere for your vacation.
          </p>
          <p class="room-price">100 € / night</p>
          <router-link to="/roomsreservation">
            <button class="book-now-button">Book Now</button>
          </router-link>
        </div>
      </div>

      <div class="room-advertisement">
        <img src="@/assets/package3.jpg" alt="Single Room" class="room-image" />
        <div class="room-details">
          <div class="package-rating">
            <i class="fa fa-star"></i>
            <p class="package-rating-text">4.8</p>
          </div>
          <h2 class="room-name">Quad Room</h2>
          <p class="room-description">
            Our quad rooms are perfect for families or groups of friends
            traveling together.
            <br />
            These spacious rooms offer four comfortable beds, a private
            bathroom, and all the necessary amenities for a comfortable stay.
            <br />
            Here, you'll find plenty of space for all members of your group.
          </p>
          <p class="room-price">150 € / night</p>
          <router-link to="/roomsreservation">
            <button class="book-now-button">Book Now</button>
          </router-link>
        </div>
      </div>

      <div class="room-advertisement">
        <img src="@/assets/package4.jpg" alt="Single Room" class="room-image" />
        <div class="room-details">
          <div class="package-rating">
            <i class="fa fa-star"></i>
            <p class="package-rating-text">5.0</p>
          </div>
          <h2 class="room-name">VIP Room</h2>
          <p class="room-description">
            Our VIP room offers the highest level of luxury and comfort for the
            most discerning guests.
            <br />
            Furnished with elegant décor, a spacious relaxation area, and
            luxurious amenities, this room provides an exceptional stay
            experience.
            <br />
            Enjoy special privileges and a sense of luxury during your stay in
            the VIP room.
          </p>
          <p class="room-price">200 € / night</p>
          <router-link to="/roomsreservation">
            <button class="book-now-button">Book Now</button>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Crvena traka na dnu -->
    <div class="red-strip bottom"></div>
  </div>
</template>

<script>
import Navigation from "@/components/navigation.vue";

export default {
  data() {},
  components: {
    Navigation,
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.text-red {
  color: rgb(183, 71, 71);
  text-decoration: none;
  transition: color 0.3s;
}

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

.logout-link {
  cursor: pointer;
  color: black;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.2s, color 0.2s;
  background-color: white;
}

.image-text {
  padding: 5px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: inline-block;
}

.rate-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  text-align: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.rate-box {
  flex: 1;
  max-width: 300px;
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.rate-title {
  font-size: 20px;
  font-weight: bold;
}

.rate-price {
  font-size: 18px;
  margin-top: 5px;
}

.rate-period {
  font-size: 14px;
  color: #555; /* Boja teksta za period */
  margin-top: 5px;
}

.rooms-header {
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

.rooms-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 0rem;
}

.rooms-image {
  width: 30%;
  text-align: center;
  padding: 1rem;
  margin-top: 1rem;
}

.house-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.house-rules {
  flex: 1;
  max-width: 50%;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
  margin-right: 1rem;
}

.house-rules h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: left;
}

.house-rules ul {
  list-style: none;
  padding: 0;
  text-align: left;
}

.house-rules ul li {
  font-size: 18px;
  margin-bottom: 10px;
  font-style: italic;
}

.house-image {
  flex: 1;
  max-width: 50%;
}

.house-image img {
  max-width: 100%;
  border-radius: 10px;
  max-height: 400px; /* Prilagodite visinu slike prema potrebama */
}

.image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.profile-image {
  width: 100px;
  height: 100px;
  background-color: #ddd;
  border-radius: 50%;
  margin: 0 auto 10px;
  background-size: cover;
  background-position: center;
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

.room-advertisements {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 1rem;
}

.room-advertisement {
  width: 45%;
  margin: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.room-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.room-details {
  margin-top: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.package-rating {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
}

.package-rating i {
  color: #ffc107;
  margin-right: 5px;
}

.package-rating-text {
  margin: 0;
}

.room-name {
  font-size: 24px;
  font-weight: bold;
  margin-top: 5px;
}

.room-description {
  font-size: 14px;
  margin-top: 5px;
}

.room-price {
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
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
</style>
