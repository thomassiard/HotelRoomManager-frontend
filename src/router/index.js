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
    path: "/forgotpassword",
    name: "ForgotPassword",
    component: () => import("@/views/ForgotPassword.vue"),
  },
  {
    path: "/forgotpasswordsent",
    name: "ForgotPasswordSent",
    component: () => import("@/views/ForgotPasswordSent.vue"),
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
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },

  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
  },

  {
    path: "/contactsent",
    name: "ContactSent",
    component: () => import("@/views/ContactSent.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
