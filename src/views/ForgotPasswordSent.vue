<template>
  <div class="forgotpass-sent">
    <div class="background"></div>
    <div class="content">
      <div class="box">
        <h2 class="title">Your new password has been generated:</h2>
        <p class="check-mark">{{ newPassword }}</p>
        <button class="return-button" @click="returnToLogin">Login</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ForgotPasswordSent",
  data() {
    return {
      newPassword: this.$route.query.newPassword,
    };
  },
  methods: {
    returnToLogin() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
.forgotpass-sent {
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
