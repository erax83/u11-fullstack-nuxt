<template>
  <div>
    <h2>Utloggning</h2>
    <p>Du är utloggad</p>
    <div v-if="$auth.loggedIn">
      <p>Inloggad</p>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  async asyncData(context) {
    await context.$auth.logout();
  }
};
</script>

<style></style>
