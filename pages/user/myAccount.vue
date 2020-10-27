<template>
  <div>
    <h2>Mitt Konto</h2>
  <div
        v-if="$auth.loggedIn">
        <p>Inloggad</p>
      </div>
  </div>
  
</template>

<script>
export default {
  middleware: 'auth',

}
</script>

<style>

</style>