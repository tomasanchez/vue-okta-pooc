<script setup></script>

<template>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img alt="Vue logo" class="logo vue" src="./assets/vue.svg" />
    </a>
  </div>
  <div>
    <button
      v-if="authState && authState.isAuthenticated"
      id="logout-button"
      v-on:click="logout"
    >
      Logout
    </button>
    <button v-else id="login-button" v-on:click="login">Login</button>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app",
  methods: {
    async login() {
      await this.$auth.signInWithRedirect();
    },
    async logout() {
      await this.$auth.signOut();
    },
  },
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
