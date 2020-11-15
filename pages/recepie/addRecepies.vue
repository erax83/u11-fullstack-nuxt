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
    return {
      errors: null,
      title: null,
      ingrediences: null,
      instructions: null,
      status: false
    };
  },
  methods: {
    submitForm() {
      auth: "guest";
      console.log(this.title);
      this.$axios.post("/api/recepies/add", {
        title: this.title,
        ingrediences: this.ingrediences,
        instructions: this.instructions
      });
    }
  }
};
</script>

<style></style>
