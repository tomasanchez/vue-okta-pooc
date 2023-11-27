import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router, { oktaAuth } from "./router/index.js";
import OktaVue from "@okta/okta-vue";

createApp(App).use(router).use(OktaVue, { oktaAuth }).mount("#app");
