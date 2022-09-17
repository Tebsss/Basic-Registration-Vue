<template>
  <div>
    <input v-model="firstname" placeholder="Enter Your First Name" />
    <input v-model="lastname" placeholder="Enter Your Last Name" />
    <input v-model="address" placeholder="Enter Your Address" />
    <button @click="next()">Next</button>
    <button @click="back()">Previous</button>
  </div>
</template>
<script>
// import _ from 'lodash';
import axios from "./../../../../axios/axios-wrapper.js";
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  name: "StepTwo",
  data() {
    return {
      firstname: "",
      lastname: "",
      address: "",
    };
  },
  created() {
    this.firstname = this.userDetails.firstname;
    this.lastname = this.userDetails.lastname;
    this.address = this.userDetails.address;
  },

  computed: {
    ...mapState(["userDetails"]),
    ...mapGetters(['hasStep2'])
  },
  methods: {
    ...mapMutations(["setUserDetails"]),

    async next() {
      const payload = {
        user_id: this.userDetails.user_id,
        firstname: this.firstname,
        lastname: this.lastname,
        address: this.address,
      };
      try {
        const isValid = this.validate(payload);

        if (isValid) {
          const response = await axios.post("users/step2/save", payload);

          if (response.status === 200) {
            this.setUserDetails(response.data);
            this.$emit("next");
          }
        } else {
          console.log("invalid");
        }
      } catch (error) {
        console.log("failed on saving details", error);
      }
    },
    back() {
      this.$emit("back");
    },
    validate(payload) {
      return payload.firstname && payload.lastname && payload.address;
    },
  },
};
</script>
<style></style>