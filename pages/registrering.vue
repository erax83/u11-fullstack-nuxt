<template>
  <div>
    <h2>Registrering</h2>

    <form action="" method="post" @submit.prevent="submitForm()">
      <div>
        <label for="">Användarnamn</label>
        <input type="text" v-model="user_name">
      </div>
      <div>
        <label for="">E-post</label>
        <input type="text" v-model="email">
      </div>
      <div>
        <label for="">Lösenord</label>
        <input type="text" v-model="password">
      </div>
      <input type="submit" value="Register">
      <nuxt-link to="/">Avbryt</nuxt-link>
    </form>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>