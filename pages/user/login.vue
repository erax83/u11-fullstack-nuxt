<template>
  

  <div>
    <h2>Logga In</h2>

    <form action="" method="post" @submit.prevent="submitForm()">
      <div>
        <label for="">E-post</label>
        <input type="text" v-model="email">
      </div>
      <div>
        <label for="">Lösenord</label>
        <input type="text" v-model="password">
      </div>
      <input type="submit" value="Login">
      <nuxt-link to="/">Avbryt</nuxt-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: null,
      user_name: null,
      email: null,
      password: null,
      status: false
    };
  },

}
</script>

<style>

</style>