<template>
  <div>
    <div v-if="$auth.loggedIn">
      <p>Du är nu inloggad.</p>
    </div>
    <form
      v-if="!$auth.loggedIn"
      action=""
      method="post"
      @submit.prevent="submitForm()"
    >
      <h2>Inloggning</h2>
      <div>
        <label for="">E-post</label>
        <input
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors && errors.email }"
          v-model="email"
        />
        <div class="invalid-feedback" v-if="errors && errors.email">
          {{ errors.email.msg }}
        </div>
      </div>

      <div class="form-group">
        <label for="">Lösenord</label>
        <input
          type="password"
          class="form-control"
          :class="{ 'is-invalid': errors && errors.password }"
          v-model="password"
        />
        <div class="invalid-feedback" v-if="errors && errors.password">
          {{ errors.password.msg }}
        </div>
      </div>

      <input v-if="!$auth.loggedIn" type="submit" value="Logga in" />
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
      this.$auth
        .loginWith("local", {
          data: {
            email: this.email,
            password: this.password
          }
        })
        .catch(error => {
          console.log(error);
          if (error.response.data.message) {
            this.login_error = error.response.data.message;
          }
        });
    }
  }
};
</script>

<style scoped></style>
