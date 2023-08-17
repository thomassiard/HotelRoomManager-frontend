<template>
  <div class="contact-container">
    <div class="contact-header">
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

    <div class="contact-content">
      <div class="contact-form">
        <h2 class="contact-title">Contact</h2>
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="message"></textarea>
          </div>
          <button class="submit-button" @click="submitForm">Submit</button>
        </form>
      </div>
      <div class="image-container">
        <img src="@/assets/contact.jpg" alt="Contact Image" />
      </div>
    </div>

    <div class="contact-footer"></div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      message: "",
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
    submitForm() {
      // Logika za slanje forme
      // Nakon slanja forme, preusmjeri na ContactSent.vue
      this.$router.push({ name: "ContactSent" });
    },
  },
};
</script>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5; /* Svijetla siva pozadina */
}

.contact-header,
.contact-footer {
  height: 100px; /* Visina tamno crvenih traka */
  background-color: rgb(166, 65, 65);
}

.contact-content {
  flex: 1;
  background-color: white; /* Bijeli srednji dio */
  display: flex;
  flex-direction: column;
  align-items: center;
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

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
  width: 100%;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
}

.submit-button {
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}

.image-container {
  width: 20%; /* Prilagodite veličinu slike po potrebi */
  display: flex;
  justify-content: flex-start; /* Poravnavanje slike lijevo */
  align-items: center;
  margin-top: 20px;
}

.image-container img {
  max-width: 100%;
  height: auto;
}
</style>
