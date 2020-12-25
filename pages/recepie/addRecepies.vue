<template>
  <div>
    <h1>Lägg till recept</h1>
    <form action="" method="post" @submit.prevent="submitForm()">
      <div>
        <label for>Recept Titel</label>
        <input type="text" v-model="title" />
      </div>
      <div>
        <label for>Ingredienser</label>
        <input type="text" v-model="ingrediences" />
      </div>
      <div>
        <label for>Instruktioner</label>
        <input type="text" v-model="instructions" />
      </div>
      <input type="submit" value="Registrera" />

      <div v-if="$auth.loggedIn">
        <p>Inloggad</p>
      </div>
      <nuxt-link to="/">Avbryt</nuxt-link>
    </form>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    // auth: "guest";
    return {
      errors: null,
      title: null,
      ingrediences: null,
      instructions: null,
      myRecepies: null,
      status: false,
      recepieId: null,
      // author: this.$auth.user.user_name
    };
  },
  methods: {
    submitForm() {
      auth: "guest";
      console.log(this.title);

      this.$axios
        .post("/api/recepies/add", {
          title: this.title,
          ingrediences: this.ingrediences,
          instructions: this.instructions,
          author: this.$auth.user.user_name
        })
        .then(response => {
          // const test = JSON.stringify(response);
          // console.log('Test: ' + test);
          // console.log(response);
          // console.log("Recepie id: " + response);
          // console.log('auth: ' + $auth.user);
          console.log("Recepie id: " + response.data._id);
          this.recepieId = response.data._id;
          alert('Recept registrerat!')
          this.addToUser();
          window.location.reload(true);
        });
    },
    addToUser() {
      auth: "guest";
      const userId = this.$auth.user._id;
      console.log("Auth id: " + this.$auth.user.user_name);
      console.log("RecepieId: " + this.recepieId);

      // this.$axios
      //   .put("/api/users/update" + this.$route.params.id, {
      //     $push: {
      //       recepieId: this.recepieId
      //     }
          
      //   })
      //   .then(response => {
      //     console.log("put then: ");
      //     console.log(response);
      //     if (response.data._id) {
      //       this.$router.push({ name: "users", params: { created: "yes" } });
      //     }
      //   })
      //   .catch(error => {
      //     console.log("put error: ");
      //     console.log(error);
      //     if (error.response.data.errors) {
      //       this.errors = error.response.data.errors;
      //     }
      //   });
    }
  }
};
</script>

<style></style>
