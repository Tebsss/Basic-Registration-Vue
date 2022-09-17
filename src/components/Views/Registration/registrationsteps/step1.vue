<template>
  <div>
    <input
      :value="userDetails.username"
      @input="(event) => input('username', event.target.value)"
      placeholder="Enter Your Username"
    />
    <input
      :value="userDetails.password"
      @input="(event) => input('password', event.target.value)"
      placeholder="Enter Your Passsword"
    />
    <button @click="next()">Next</button>
    <button @click="back()">Back</button>
  </div>
</template>
<script>
import axios from "./../../../../axios/axios-wrapper.js";
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  name: "StepOne",
  data() {
    return {
      username: "",
      password: "",
    };
  },

  computed: {
    ...mapState(["userDetails"]),
    ...mapGetters(["hasStep1"]),
  },

  created() {},

  methods: {
    ...mapMutations(["setUserDetails"]),

    input(key, value) {
      console.log("key", key, value);
      this.setUserDetails({ [key]: value });
    },

    async next() {
      const payload = {
        username: this.userDetails.username,
        password: this.userDetails.password,
      };
      try {
        const isValid = this.validate(payload);

        if (isValid) {
          const response = await axios.post("users/step1/save", payload);

          if (response.status === 200) {
            this.setUserDetails(response);
            this.$emit("next");
          }
        }
      } catch (error) {
        console.log("failed on saving details", error);
      }
    },
    back() {
      this.$emit("back");
    },

    validate(payload) {
      return payload.username && payload.password;
    },
  },
};
</script>
<style></style>