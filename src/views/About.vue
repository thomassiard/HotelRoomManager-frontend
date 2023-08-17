<template>
  <div class="about-container">
    <div class="about-header">
      <!-- Navigation bar -->
      <div class="navigation-bar">
        <div class="nav-left">
          <v-avatar class="profile-avatar">
            <v-img src="@/assets/user-icon.png"></v-img>
          </v-avatar>
          <p class="username">Korisnik</p>
        </div>
        <div class="nav-right">
          <div class="nav-links">
            <div
              class="nav-link"
              v-for="item in menuItems"
              :key="item"
              @click="navigateTo(item)"
            >
              {{ item }}
            </div>
            <button class="logout-button" @click="logout">Log out</button>
          </div>
        </div>
      </div>
    </div>

    <div class="about-content">
      <div class="content-wrapper">
        <div class="about-text">
          <h2 class="about-title">About</h2>
          <div class="about-description">
            <p>
              Welcome to our hotel! Our mission is to provide guests with an
              unforgettable experience by offering excellent customer service
              and top-of-the-line amenities. We are proud to offer a wide
              variety of room types and sizes to accommodate guests of all ages
              and lifestyles. Whether you’re traveling for business or pleasure,
              we’re sure to have the perfect room for you. We invite you to
              experience all that our hotel has to offer. We look forward to
              welcoming you!
            </p>
          </div>
        </div>
        <div class="image-container">
          <img src="src/assets/about.jpg" alt="About Image" />
        </div>
      </div>
    </div>

    <div class="about-footer"></div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      menuItems: ["Home", "Rooms", "About", "Contact"],
    };
  },
  methods: {
    navigateTo(item) {
      if (item === "Home") {
        this.$router.push({ name: "WelcomePage" });
      } else {
        this.$router.push({ name: item });
      }
    },
    logout() {
      // Logika za odjavu
    },
  },
};
</script>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5; /* Svijetla siva pozadina */
}

.about-header,
.about-footer {
  height: 100px; /* Visina tamno crvenih traka */
  background-color: rgb(166, 65, 65);
}

.about-content {
  flex: 1;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column; /* Postavite sadržaj u vertikalni smjer */
  align-items: center; /* Centrirajte sadržaj vodoravno */
  justify-content: center; /* Centrirajte sadržaj okomito */
}

.navigation-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: rgb(166, 65, 65);
}

.profile-avatar {
  margin-right: 10px;
}

.username {
  font-weight: bold;
  color: white;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-link {
  margin-right: 20px;
  cursor: pointer;
  color: white;
}

.logout-button {
  border: 1px solid white;
  background-color: transparent;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
}

.about-text {
  text-align: center;
  padding: 20px;
  max-width: 800px;
  background-color: #e0e0e0;
  margin-top: 20px;
  border-radius: 5px;
  flex: 1; /* Proširite tekst na cijelu visinu dostupnog prostora */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centrirajte tekst okomito */
}

.about-title {
  font-size: 28px;
  margin-bottom: 10px;
}

.about-description {
  font-size: 18px;
  padding: 15px;
}

.about-footer {
  height: 100px; /* Visina donje tamno crvene trake */
  background-color: rgb(166, 65, 65);
}

.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  width: 30%; /* Prilagodite veličinu slike po potrebi */
  display: flex;
  flex-direction: column; /* Postavite sliku ispod teksta */
  justify-content: center; /* Centrirajte sliku okomito */
  align-items: center; /* Centrirajte sliku vodoravno */
  margin-top: 20px;
  margin-left: 20px;
}

.image-container img {
  width: 100%; /* Podesite širinu slike da zauzima cijeli raspoloživi prostor */
  max-height: 100vh; /* Ograničite visinu slike na visinu ekrana */
  object-fit: contain; /* Postavite da slika zadrži omjer širine i visine */
}
</style>
