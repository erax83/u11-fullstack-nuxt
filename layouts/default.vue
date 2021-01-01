<template>
  <div>
    <div>
      <h1>Receptcirkeln</h1>
      <div v-if="$auth.loggedIn">
        <p>Inloggad</p>
      </div>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/">Hem</nuxt-link>
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
            <nuxt-link to="/user/myAccount">Min Sida</nuxt-link>
          </li>
          <li v-if="$auth.loggedIn">
            <nuxt-link to="/user/logout">Logga ut</nuxt-link>
          </li>
        </ul>
      </nav>
      <hr />
    </div>

    <div>
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mansalva&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");

html {
  font-family: Satisfy;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background: linear-gradient(
      90deg,
      rgba(255, 225, 132, 0.7) 50%,
      rgba(255, 255, 255, 0) 50%
    ),
    linear-gradient(
      90deg,
      rgba(32, 113, 120, 0.3) 50%,
      rgba(255, 255, 255, 0) 50%
    ),
    linear-gradient(
      90deg,
      rgba(255, 150, 102, 0.3) 50%,
      rgba(255, 255, 255, 0) 50%
    ),
    linear-gradient(
      90deg,
      rgba(23, 76, 79, 0.1) 50%,
      rgba(255, 255, 255, 0) 50%
    );
  background-size: 7em 7em, 5em 5em, 3em 3em, 1em 1em;
  background-color: #f5e9be;
  /* font: 10px/1.4 "Trebuchet MS", Verdana, sans-serif; */
  
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

@media only screen and (max-width: 300px) {
  body {
    font-size: 16px;
    padding: 10px;
  }
  li:hover {
    cursor: pointer;
  }
  hr {
    margin: 8px;
    opacity: 50%;
  }
}

@media only screen and (min-width: 301px) {
  body {
    font-size: 30px;
  }
}

@media only screen and (min-width: 500px) {
}

@media only screen and (min-width: 992px) {
}

@media only screen and (min-width: 1200px) {
}
</style>
