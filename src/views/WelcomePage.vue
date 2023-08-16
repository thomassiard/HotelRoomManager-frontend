<template>
  <div class="welcomepage">
    <div class="navigation-bar">
      <div class="nav-left">
        <v-avatar class="profile-avatar">
          <v-img src="@/assets/profile-image.jpg"></v-img>
        </v-avatar>
      </div>
      <div class="nav-right">
        <div
          v-for="(item, index) in menuItems"
          :key="index"
          class="nav-link"
          @click="navigateTo(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>

    <div class="text-container">
      <h1 class="welcome-text">WELCOME TO</h1>
      <h1 class="hotel-text">Hotel Room Manager</h1>
      <br />
      <p class="sub-text">Book your stay and enjoy.</p>
    </div>

    <div class="scroll-button-container">
      <v-btn class="scroll-button" @click="scrollToContent" fab>
        <v-icon>mdi-arrow-down</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      menuItems: ["Home", "Rooms", "About Us", "Contact Us", "Log Out"],
    };
  },
  methods: {
    scrollToContent() {
      const element = document.querySelector(".information-background");
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    },
    navigateTo(item) {
      if (item === "welcomepage") {
        this.$router.push({ name: "welcomepage" });
      } else if (item === "Rooms") {
        this.$router.push({ name: "Rooms" });
      } else if (item === "About Us") {
        this.$router.push({ name: "AboutUs" });
      } else if (item === "Contact Us") {
        this.$router.push({ name: "Contactus" });
      } else if (item === "Log Out") {
        // Implementirajte logiku za odjavu korisnika
      }
    },
  },
};
</script>

<style scoped>
.welcomepage {
  position: relative;
  min-height: calc(100vh - 64px); /* 64px is the height of the app bar */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("@/assets/welcome-background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-y: auto;
}

.navigation-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin-right: 20px;
  cursor: pointer;
}

.profile-avatar {
  margin-right: 10px;
}

.text-container {
  position: absolute;
  top: 30%;
  left: 10%;
  font-size: 2rem;
  color: white;
  z-index: 2;
}

.hotel-text {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 50;
}

.sub-text {
  font-weight: 300;
}

.scroll-button-container {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}
</style>
