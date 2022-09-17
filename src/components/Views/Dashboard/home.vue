<template>
  <div class="main-container">
    <div class="profile-container">
      <h1>My Profile</h1>
      <div class="row">
        <div class="first-name">First Name: {{ userDetails.firstname }}</div>
        <div class="last-name">Last Name: {{ userDetails.lastname }}</div>
        <div class="last-name">Email: {{ userDetails.email }}</div>
        <div class="last-name">Contact: {{ userDetails.contact }}</div>
        <div class="last-name">Address: {{ userDetails.address }}</div>
        <div class="last-name">Username: {{ userDetails.username }}</div>
        <div class="last-name">Password: {{ userDetails.password }}</div>
      </div>
    </div>
    <button @click="logout()">Logout</button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "HomeComponent",
  data() {
    return {
      text: "",
    };
  },
  computed: {
    ...mapState(["userDetails"]),
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