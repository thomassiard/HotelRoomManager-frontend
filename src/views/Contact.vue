<template>
  <div class="contact">
    <Navigation />

    <!-- Crvena traka ispod navigation bara -->
    <div class="red-strip top"></div>

    <!-- Sadržaj Contact Us stranice -->
    <div class="contact-content">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="contact-form">
              <h1 class="display-4 text-center">Contact Us</h1>
              <form @submit.prevent="sendEmail">
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email_id"
                    class="form-control"
                    placeholder="Enter your email here..."
                    v-model="email"
                  />
                </div>
                <div class="form-group">
                  <label for="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    class="form-control"
                    rows="5"
                    style="resize: none; max-height: 200px"
                    placeholder="Enter your message here..."
                    v-model="message"
                  ></textarea>
                </div>
                <button class="submit-button" type="submit">Submit</button>
              </form>
            </div>
          </div>
          <div class="col-md-6">
            <div class="contact-images text-right">
              <img
                src="@/assets/contact3.jpg"
                alt="Contact Image 1"
                class="contact-image img-fluid"
              />
              <img
                src="@/assets/contact4.jpg"
                alt="Contact Image 2"
                class="contact-image img-fluid mt-4"
              />
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
import emailjs from "emailjs-com";
import Navigation from "@/components/navigation.vue";

export default {
  data() {
    return {
      email: "",
      message: "",
    };
  },
  components: {
    Navigation,
  },
  methods: {
    async sendEmail() {
      try {
        // Konfiguracija EmailJS
        emailjs.init("S0AiR8Z6MtQGCulbj");

        const templateParams = {
          from_name: "Guest",
          to_name: "HotelRoomManagerService",
          email_id: this.email,
          message: this.message,
        };

        await emailjs.send(
          "service_oecg7ar",
          "template_6qvvocs",
          templateParams,
          "S0AiR8Z6MtQGCulbj"
        );

        this.$router.push({
          name: "ContactSent",
        });
      } catch (error) {
        console.error("Error sending e-mail:", error);
      }
    },
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

.contact-form {
  margin-top: 100px;
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

.submit-button {
  margin: 0 auto;
  margin-top: 10px;
  display: block;
  padding: 10px 20px;
  font-size: 16px;
  background-color: rgb(238, 238, 178);
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s, box-shadow 0.2s;
}

.submit-button:hover {
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
