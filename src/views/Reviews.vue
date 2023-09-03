<template>
  <div class="reviews">
    <Navigation />

    <!-- Crvena traka ispod navigation bara -->
    <div class="red-strip top"></div>

    <!-- Naslov i opis -->
    <div class="reviews-header">
      <h1 class="display-4 text-center">REVIEWS</h1>
      <p class="text-center">
        Here you can see some of our guests reviews about their experience with
        our rooms.
      </p>
    </div>

    <!-- Containeri za reviews -->
    <div class="reviews-content">
      <!-- Prvi review container -->
      <div class="review">
        <div class="profile-image review1-image"></div>
        <div class="username black-text">Marko Novak</div>
        <div class="rating">
          <span class="stars">★★★★★</span>
        </div>
        <p class="review-description">
          The hotel was amazing! The room was perfect and very clean. The staff
          was so nice and helpful. I would definitely recommend this hotel to
          anyone and would stay here again in a heartbeat!
        </p>
      </div>

      <!-- Drugi review container -->
      <div class="review">
        <div class="profile-image review2-image"></div>
        <div class="username black-text">Ana Petrović</div>
        <div class="rating">
          <span class="stars">★★★★</span>
        </div>
        <p class="review-description">
          I was not satisfied with the cleanliness of the hotel room. Despite
          the staff being friendly and accommodating, I noticed that some parts
          of the room were not adequately cleaned. Taking that into
          consideration, I gave the hotel four stars. However, the hotel's
          location is excellent, close to restaurants and shops, and I hope to
          visit again.
        </p>
      </div>

      <!-- Treći review container -->
      <div class="review">
        <div class="profile-image review3-image"></div>
        <div class="username black-text">Aleksandar Radulović</div>
        <div class="rating">
          <span class="stars">★★★★★</span>
        </div>
        <p class="review-description">
          I stayed for a business trip and it was a great experience. The room
          was clean and comfortable and the staff was friendly and helpful. I
          would definitely recommend this hotel to others.
        </p>
      </div>
    </div>

    <!-- Drugi red slika -->
    <div class="reviews-content">
      <!-- Četvrti review container -->
      <div class="review">
        <div class="profile-image review4-image"></div>
        <div class="username black-text">Ivana Jovanović</div>
        <div class="rating">
          <span class="stars">★★★</span>
        </div>
        <p class="review-description">
          I had a decent stay at the hotel. The room was okay in terms of
          cleanliness, and the staff was friendly. However, there's room for
          improvement. I gave it a 3-star rating because of these factors. The
          hotel's location was convenient though, close to restaurants and
          shops.
        </p>
      </div>

      <!-- Peti review container -->
      <div class="review">
        <div class="profile-image review5-image"></div>
        <div class="username black-text">David Kovač</div>
        <div class="rating">
          <span class="stars">★★★★</span>
        </div>
        <p class="review-description">
          Amazing stay! The room was spotless and cozy, and the staff was super
          friendly. Perfectly located near great restaurants and attractions.
          Solid 5-star experience!
        </p>
      </div>

      <!-- Šesti review container -->
      <div class="review">
        <div class="profile-image review6-image"></div>
        <div class="username black-text">Maja Lukić</div>
        <div class="rating">
          <span class="stars">★★★★</span>
        </div>
        <p class="review-description">
          Had a decent stay. The room was comfortable and the staff were
          friendly. Noticed a few cleanliness issues, which is why I'm giving it
          4 stars. The hotel's location is fantastic, near restaurants and
          shops. Would consider staying again.
        </p>
      </div>

      <!-- Red strip at the bottom -->
      <div class="red-strip bottom"></div>
    </div>
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

.review1-image {
  background-image: url(src/assets/review1.jpg);
}

.review2-image {
  background-image: url(src/assets/review4.jpg);
}

.review3-image {
  background-image: url(src/assets/review3.png);
}

.review4-image {
  background-image: url(src/assets/review5.jpg);
}

.review5-image {
  background-image: url(src/assets/review2.jpg);
}

.review6-image {
  background-image: url(src/assets/review6.jpg);
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

.red-strip.top {
  position: fixed;
  top: 68px;
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

.reviews-header {
  text-align: center;
  display: inline-block;
  margin-top: 10rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.reviews-content {
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.review {
  width: 30%;
  text-align: center;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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

.rating {
  font-size: 24px;
}

.review-description {
  font-size: 1.15rem;
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

.user {
  color: WHITE;
  font-weight: bold;
}

.username {
  color: black;
  font-weight: bold;
}
</style>
