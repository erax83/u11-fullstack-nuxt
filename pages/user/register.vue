<template>
  <div class="box-wrapper">
    <h2>Registrering</h2>
    <h4>Registrera dig för att bli medlem i Receptcirkeln.</h4>
    <form action="" method="post" @submit.prevent="submitForm()">
      <div>
        <label for>Användarnamn</label>
        <input type="text" v-model="user_name" />
      </div>
      <div>
        <label for>E-post</label>
        <input type="text" v-model="email" />
      </div>
      <div>
        <label for>Lösenord</label>
        <input type="text" v-model="password" />
      </div>
      <input type="submit" value="Registrera" />
    </form>
  </div>
</template>

<script>
export default {
  middleware: "auth",

  data() {
    return {
      errors: null,
      user_name: null,
      email: null,
      password: null,
      status: false
    };
  },
  methods: {
    submitForm() {
      auth: "guest";
      console.log(this.user_name);
      this.$axios
        .post("/api/users/register", {
          user_name: this.user_name,
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response);
          if (response.data._id) {
            this.$router.push({
              name: "user-login",
              params: { registered: "yes" }
            });

            this.$auth
              .loginWith("local", {
                data: {
                  email: this.email,
                  password: this.password
                }
              })
              .catch(error => {
                console.log(error);
              });
          }
        })
        .catch(error => {
          console.log(error);
          if (error.response.data.errors) {
            this.errors = error.response.data.errors;
          }
        });
    }
  }
};
</script>

<style scoped>

/* @media only screen and (max-width: 300px) {
  .box-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
}

@media only screen and (min-width: 301px) {
  .box-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
}

@media only screen and (min-width: 500px) {
}

@media only screen and (min-width: 900px) {
}

@media only screen and (min-width: 1200px) {
} */
</style>
