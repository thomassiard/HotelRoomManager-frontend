<template>
  <!--Welcome-->
  <div class="home">
    <div class="text-container">
      <h1 class="big-text">Welcome to Hotel Room Manager</h1>
      <v-btn class="scroll-button" @click="scrollToContent">Scroll Down</v-btn>
    </div>
    <div class="content" ref="contentSection" id="contentSection">
      <!-- Your content goes here -->
      <div>hello</div>
    </div>
    <div class="additional-content">
      <p>Additional content...</p>
      <img src="path/to/image.jpg" alt="Image" />
      <button>Login</button>
      <button>Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    scrollToContent() {
      this.$router.push({ hash: this.$refs.contentSection.getAttribute("id") });
      setTimeout(() => {
        const element = document.getElementById(
          this.$refs.contentSection.getAttribute("id")
        );
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    },
  },
};
</script>

<style>
.home {
  position: relative;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("src/assets/background.jpg"); /* Update the URL path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-container {
  text-align: center;
}

.big-text {
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 3rem;
}

.scroll-button {
  margin-top: 2rem;
}

.additional-content {
  /* Add styles for additional content */
}
</style>
