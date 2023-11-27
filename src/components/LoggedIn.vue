<template>
  <div class="container">
    <div class="center-align amber-text">
      <h1>Welcome {{ activeUser.given_name }}!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoggedIn",

  data() {
    return {
      activeUser: {
        name: null,
        given_name: null,
      },
    };
  },

  async created() {
    await this.refreshActiveUser();
  },

  methods: {
    async refreshActiveUser() {
      this.activeUser = await this.$auth.getUser();
    },
  },
};
</script>
