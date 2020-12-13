<template>
  <div>
    <div>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/recepie/allRecepies">Recept</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/recepie/search">Sök</nuxt-link>
          </li>
          <li v-if="$auth.loggedIn">
            <nuxt-link to="/recepie/addRecepies">Lägg till recept</nuxt-link>
          </li>
          <li v-if="!$auth.loggedIn">
            <nuxt-link to="/user/register">Registrering</nuxt-link>
          </li>
          <li v-if="!$auth.loggedIn">
            <nuxt-link to="/user/login">Logga In</nuxt-link>
          </li>
          <li v-if="$auth.loggedIn">
            <nuxt-link to="/user/myAccount">Mitt Konto</nuxt-link>
          </li>
          <li v-if="$auth.loggedIn">
            <nuxt-link to="/user/logout">Logga ut</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>

    <div>
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",

}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
