// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import axios from "axios";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

// Baza URL-a za axios
axios.defaults.baseURL = "https://hotel-room-manager-backend.vercel.app";

app.config.globalProperties.$axios = axios;

registerPlugins(app);

app.mount("#app");
