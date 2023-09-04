// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import axios from "axios";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

// Baza URL-a za axios
axios.defaults.baseURL = "https://hrm-backend-nc4j.onrender.com";

// axios.defaults.baseURL = "http://127.0.0.1:3001/";

app.config.globalProperties.$axios = axios;

registerPlugins(app);

app.mount("#app");
