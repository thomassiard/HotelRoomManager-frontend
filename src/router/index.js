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
    props: true,
  },
  {
    path: "/welcomepage",
    name: "WelcomePage",
    component: () => import("@/views/WelcomePage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/Profile.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/adminpanel",
    name: "AdminPanel",
    component: () => import("@/views/AdminPanel.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/rooms",
    name: "Rooms",
    component: () => import("@/views/Rooms.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/roomsreservation",
    name: "RoomsReservation",
    component: () => import("@/views/RoomsReservation.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/roomsreservationsent",
    name: "RoomsReservationSent",
    component: () => import("@/views/RoomsReservationSent.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("@/views/Gallery.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: () => import("@/views/Reviews.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/contactsent",
    name: "ContactSent",
    component: () => import("@/views/ContactSent.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
