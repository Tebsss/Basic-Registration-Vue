<template>
  <div>
    <input v-model="email" placeholder="Enter Your Email" />
    <input v-model="contact" placeholder="Enter Your Contact" />
    <button @click="back()">Previous</button>
    <button @click="next()">Finish</button>
  </div>
</template>
<script>
import axios from "./../../../../axios/axios-wrapper.js";
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  name: "StepThree",
  data() {
    return {
      email: "",
      contact: "",
    };
  },
  created() {
    console.log("created", this.userDetails);
    this.email = this.userDetails.email;
    this.contact = this.userDetails.contact;
  },
  computed: {
    ...mapState(["userDetails"]),
    ...mapGetters(["hasStep3"]),
  },
  methods: {
    ...mapMutations(["setUserDetails"]),
    async next() {
      const payload = {
        user_id: this.userDetails.user_id,
        email: this.email,
        contact: this.contact,
      };
      try {
        const isValid = this.validate(payload);

        if (isValid) {
          const response = await axios.post("users/step3/save", payload);

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
      return payload.email && payload.contact;
    },
  },
};
</script>
<style></style>