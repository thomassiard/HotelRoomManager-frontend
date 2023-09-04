<template>
  <div class="roomsreservation-sent">
    <div class="background"></div>
    <div class="content">
      <div class="box">
        <h2 class="title">Awesome!</h2>
        <p class="subtitle">Your reservation has been confirmed!</p>
        <div class="check-mark">&#10003;</div>
        <button class="return-button" @click="returnToHome">
          Return to Home
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomsReservationSent",
  methods: {
    returnToHome() {
      this.$router.push({ name: "WelcomePage" });
    },
  },
};
</script>

<style scoped>
.roomsreservation-sent {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(166, 65, 65);
  opacity: 0.5;
}

.content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.box {
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
}

.title {
  font-size: 24px;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 18px;
  margin-bottom: 20px;
}

.check-mark {
  font-size: 36px;
  margin-bottom: 20px;
}

.return-button {
  background-color: rgb(166, 65, 65);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
