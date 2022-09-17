<template>
  <div>
    <h1>Matsala</h1>
    <button @click="logout()">Logout</button>
  </div>
</template>
<script>
export default {
  name: "HomeComponent",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    logout() {
      this.$router.push("/landingpage");
    },
  },
};
</script>
<Style>
    
</Style>