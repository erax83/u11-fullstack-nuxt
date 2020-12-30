<template>
  <div>
    <h1>Välkommen till Receptsidan!</h1>
    <div v-if="$auth.loggedIn">
      <p>Inloggad</p>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth"
};
</script>

<style>
</style>
