<template>
  <div>
    <p>Du är utloggad</p>
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

<style scoped></style>
