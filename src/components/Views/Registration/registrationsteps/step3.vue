<template>
  <div>
    <input v-model="email" placeholder="Enter Your Email" />
    <input v-model="contact" placeholder="Enter Your Contact" />
    <button @click="back()">Previous</button>
    <button @click="next()">Finish</button>
  </div>
</template>
<script>

export default {
  name: "StepThree",
  data() {
    return {
      email: "",
      contact: "",
    };
  },
  methods: {
    next() {
      this.$emit("next", {
        email: this.email,
        contact: this.contact,
      });
    },
    back() {
      this.$emit("back");
    },
  },
};
</script>
<style></style>