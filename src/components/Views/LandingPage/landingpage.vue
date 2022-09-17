<template>
  <div>
    <button @click="register()">register</button>
    <button @click="login()">login</button>
  </div>
</template>
<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      text: "",
    };
  },
  methods: {
    register() {
      this.$router.push("/register");
    },

    login() {
      this.$router.push("/login");
    },
  },
};
</script>
<style></style>