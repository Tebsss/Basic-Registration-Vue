<template>
  <div>
    <step-1 v-if="step === 1" @next="next()" @back="backtolandingpage()" />
    <step-2 v-if="step === 2" @next="next()" @back="back()" />
    <step-3 v-if="step === 3" @next="next()" @back="back()" />
  </div>
</template>
<script>
import Step1 from "./registrationsteps/step1.vue";
import Step2 from "./registrationsteps/step2.vue";
import Step3 from "./registrationsteps/step3.vue";

import { mapState, mapGetters } from "vuex";

export default {
  name: "RegistrationPage",
  components: { Step1, Step2, Step3 },
  data() {
    return {
      step: 1,
    };
  },

  created() {
    if (!this.hasStep1) {
      this.step = 1;
    } else if (!this.hasStep2) {
      this.step = 2;
    } else if (!this.hasStep3) {
      this.step = 3;
    } else {
      this.$router.push("dashboard");
    }
  },

  computed: {
    ...mapState(["userDetails"]),
    ...mapGetters(["hasStep1", "hasStep2", "hasStep3"]),
  },

  methods: {
    next() {
      console.log("next");
      this.step += 1;

      if (this.step > 3) {
        this.$router.push("dashboard");
      }
    },
    back() {
      this.step -= 1;
    },
    backtolandingpage(){
        this.$router.push("landingpage");
    }
  },
};
</script>
<style></style>