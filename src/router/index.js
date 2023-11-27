import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import { OktaAuth } from "@okta/okta-auth-js";
import { LoginCallback, navigationGuard } from "@okta/okta-vue";

export const oktaAuth = new OktaAuth({
  issuer: "https://{YOUR_OKTA_DOMAIN}.okta.com",
  clientId: "{YOUR_CLIENT_ID}",
  redirectUri: "http://localhost:5173/login/callback",
  scopes: ["openid", "profile", "email"],
});

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
    meta: { requiresAuth: true },
  },
  {
    path: "/login/callback",
    name: "Login Callback",
    component: LoginCallback,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// Due to navigation guards mixin issue in vue-router-next, navigation guard logic need to be added manually
router.beforeEach(navigationGuard);

export default router;
