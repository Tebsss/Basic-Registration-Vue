import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      userDetails: {
        user_id: "",
        username: "",
        password: "",
      },
    };
  },
  getters: {
    hasStep1(state) {
        console.log('hasStep1 getter', state.userDetails)
      return state.userDetails.username && state.userDetails.password;
    },
    hasStep2(state) {
      return state.userDetails.firstname &&
        state.userDetails.lastname &&
        state.userDetails.address;
    },
    hasStep3(state) {
      return state.userDetails.email && state.userDetails.contact;
    },
  },
  mutations: {
    setUserDetails(state, payload) {
        console.log('state', state, payload)
      state.userDetails = {
        ...state.userDetails,
        ...payload,
      };
    },
  },
});

export default store;
