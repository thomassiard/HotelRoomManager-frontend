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
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/Profile.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("@/views/Admin.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/rooms",
    name: "Rooms",
    component: () => import("@/views/Rooms.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/roomsreservation",
    name: "RoomsReservation",
    component: () => import("@/views/RoomsReservation.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/roomsreservationsent",
    name: "RoomsReservationSent",
    component: () => import("@/views/RoomsReservationSent.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("@/views/Gallery.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: () => import("@/views/Reviews.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/contactsent",
    name: "ContactSent",
    component: () => import("@/views/ContactSent.vue"),
    meta: {
      needsUser: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// import axios from "axios";

// router.beforeEach(async (to, from, next) => {
//   try {
//     // Koristite Axios ili sličnu biblioteku za provjeru autentikacije na Expressu
//     const response = await axios.get("/api/check-auth");
//     const isAuthenticated = response.data.isAuthenticated;

//     if (!isAuthenticated && to.meta.needsUser) {
//       next("/");
//     } else if (isAuthenticated && !to.meta.needsUser) {
//       next("/home");
//     } else {
//       next();
//     }
//   } catch (error) {
//     console.error("Error checking authentication:", error);
//     next("/");
//   }
// });

export default router;
