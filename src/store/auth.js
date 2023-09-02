// // frontend/src/store/auth.js

// import { login, register } from "@/api/auth"; // Pretpostavljamo da imate API funkcije za prijavu i registraciju

// const state = {
//   user: null,
//   token: null,
// };

// const getters = {
//   isAuthenticated: (state) => !!state.user,
// };

// const actions = {
//   async loginUser({ commit }, { email, password }) {
//     try {
//       const response = await login(email, password); // Poziv funkcije za prijavu s emailom i lozinkom
//       const { token } = response.data;
//       commit("SET_USER", token);
//     } catch (error) {
//       console.error("Login error:", error);
//       throw error;
//     }
//   },

//   async registerUser(
//     { commit },
//     { fullName, email, phoneNumber, password, confirmPassword }
//   ) {
//     try {
//       await register(fullName, email, phoneNumber, password, confirmPassword); // Poziv funkcije za registraciju s potrebnim podacima
//       // Ovdje možete automatski izvršiti prijavu nakon registracije, ako želite
//     } catch (error) {
//       console.error("Registration error:", error);
//       throw error;
//     }
//   },
// };

// const mutations = {
//   SET_USER(state, token) {
//     state.token = token;
//     // Ovdje možete izvući korisničke informacije iz tokena i pohraniti ih u state.user
//   },
// };

// export default {
//   state,
//   getters,
//   actions,
//   mutations,
// };
