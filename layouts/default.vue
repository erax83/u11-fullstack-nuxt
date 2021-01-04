<template>
  <div class="wrapper">
    <header>
      <h1>Receptcirkeln</h1>
      <div v-if="$auth.loggedIn">
        <p id="logg-symbol">Inloggad</p>
      </div>
      <nav>
        <ul>
          <li>
            <nuxt-link class="menu-link" to="/">Hem</nuxt-link>
          </li>
          <!-- <li>
            <nuxt-link to="/recepie/allRecepies">Recept</nuxt-link>
          </li> -->
          <li>
            <nuxt-link class="menu-link" to="/recepie/search">Sök</nuxt-link>
          </li>
          <li v-if="$auth.loggedIn">
            <nuxt-link class="menu-link" to="/recepie/addRecepies">Lägg till recept</nuxt-link>
          </li>
          <li v-if="!$auth.loggedIn">
            <nuxt-link class="menu-link" to="/user/register">Registrering</nuxt-link>
          </li>
          <li v-if="!$auth.loggedIn">
            <nuxt-link class="menu-link" to="/user/login">Logga In</nuxt-link>
          </li>
          <li v-if="$auth.loggedIn">
            <nuxt-link class="menu-link" to="/user/myAccount">Min Sida</nuxt-link>
          </li>
          <li v-if="$auth.loggedIn">
            <nuxt-link class="menu-link" to="/user/logout">Logga ut</nuxt-link>
          </li>
        </ul>
      </nav>
      <hr />
    </header>

    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  middleware: "auth"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: Satisfy;
  font-size: 16px;
  color: rgb(44, 22, 7);
  word-spacing: 1px;
  line-height: 1.6;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

p {
  font-family: 'Crimson Text';
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

.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
}

header {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}

main {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}

hr {
  border-top: 1px rgb(44, 22, 7) ;
  border-bottom: 1px solid rgb(44, 22, 7) ;
  /* color: black; */
  margin: 8px;
  opacity: 30%;
}

li {
  list-style-type: square;
}

li:hover {
  cursor: pointer;
}

nav li {
  margin-right: 10px;
}

ul li::hover {
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: red; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}

.menu-link {
  text-decoration: none;
  color: rgb(78, 39, 11);
}

#logg-symbol {
  color: rgb(46, 106, 155);
}

button {
  background-color: orangered; /* Green */
  border: none;
  color: white;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 2px;
  margin-bottom: 10px;
}

button:hover {
  cursor: pointer;
}

#ingrediences,
#instructions {
  margin: 10px;
  width: 90%;
}

nuxt-link {
  text-decoration: none;
}

@media only screen and (max-width: 300px) {
  body {
    font-size: 16px;
    padding: 15px;
  }

  nav li {
    display: block;
  }

  .recepie-list {
    height: 150px;
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
  }
}

@media only screen and (min-width: 301px) {
  body {
    font-size: 16px;
    padding: 10px;
  }

  nav li {
    display: block;
  }

  .recepie-list {
    /* height: 100px; */
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
  }
}

@media only screen and (min-width: 450px) {
  body {
    font-size: 18px;
    padding: 10px;
  }

  header {
    padding-left: 10px;
  }

  main {
    padding-left: 20px;
  }

  nav li {
    display: inline;
  }

  .recepie-list {
    /* height: 100px; */
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
  }
}

@media only screen and (min-width: 900px) {
  body {
    font-size: 19px;
    padding: 10px;
  }

  header {
    padding-left: 15px;
  }

  main {
    padding-left: 25px;
  }

  nav li {
    display: inline;
  }

  .recepie-list {
    /* height: 100px; */
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
  }
}


</style>
