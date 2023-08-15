// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import axios from "axios"; // Dodajte ovu liniju za import axios

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

// Postavite bazu URL-a za axios
axios.defaults.baseURL = "http://localhost:3001"; // Promijenite URL prema vašem backend serveru

// Dodajte axios instance na Vue prototype
app.config.globalProperties.$axios = axios;

registerPlugins(app);

app.mount("#app");
