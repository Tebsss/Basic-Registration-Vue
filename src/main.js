import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from "vue-router";
import dashboard from './components/Views/Dashboard/home.vue';
import landingpage from './components/Views/LandingPage/landingpage.vue';
import registrationpage from './components/Views/Registration/registrationpage.vue';
import loginpage from "./components/Views/Login/loginpage.vue";
import store from './store/store.js'

const routes = [
  { path: "/", redirect: "/landingpage" },
  { path: "/landingpage", component: landingpage },
  { path: "/register", component: registrationpage },
  { path: "/login", component: loginpage },
  { path: "/dashboard", component: dashboard },
  { path: "/loginpage", component: dashboard },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
});

const app = createApp(App);
app.use(router);
app.use(store);

app.mount("#app");
