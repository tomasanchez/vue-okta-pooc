import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import LoggedIn from "../views/LoggedIn.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: LoggedIn,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
