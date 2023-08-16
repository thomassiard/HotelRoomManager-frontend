// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("@/views/SignUp.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/forgotpass",
    name: "ForgotPassword",
    component: () => import("@/views/ForgotPassword.vue"),
  },
  {
    path: "/welcomepage",
    name: "WelcomePage",
    component: () => import("@/views/WelcomePage.vue"),
  },

  {
    path: "/rooms",
    name: "Rooms",
    component: () => import("@/views/Rooms.vue"),
  },

  {
    path: "/aboutus",
    name: "AboutUs",
    component: () => import("@/views/AboutUs.vue"),
  },

  {
    path: "/contactus",
    name: "Contactus",
    component: () => import("@/views/ContactUs.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
