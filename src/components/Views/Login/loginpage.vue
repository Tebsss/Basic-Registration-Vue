<template>
  <div>
    <input v-model="username" placeholder="Enter Your Email" />
    <input v-model="password" type="password" placeholder="Enter Your Password" />
    <button @click="login()">Login</button>
  </div>
</template>
<script>
import axios from "./../../../axios/axios-wrapper.js";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },

  computed: {
    ...mapState(["userDetails"]),
    ...mapGetters(["hasStep1", "hasStep2", "hasStep3"]),
  },

  methods: {
    ...mapMutations(["setUserDetails"]),

    async login() {
      try {
        const res = await axios.get("/login", {
          params: {
            username: this.username,
            password: this.password,
          },
        });

        console.log("user", res);

        this.setUserDetails(res.data[0]);

        console.log('log', this.userDetails, this.hasStep1, this.hasStep2, this.hasStep3)

        if (!this.hasStep1 || !this.hasStep2 || !this.hasStep3 ) {
          this.$router.push("/register");
        } else {
            this.$router.push("/dashboard");

        }

      } catch (error) {
        console.log(error)
      }
    },
  },
};
</script>
<style></style>