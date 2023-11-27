<script>
import LoggedIn from "../components/LoggedIn.vue";

export default {
  name: "About",
  components: { LoggedIn },
};
</script>

<template>
  <div>
    <h1>About</h1>
    <h5>You do need to be authenticated</h5>
    <LoggedIn />
  </div>
</template>

<style scoped></style>
