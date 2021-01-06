<template>
  <div>
    <h2>Lägg till recept</h2>
    <br />
    <form action="" method="post" @submit.prevent="submitForm()">
      <label for="title"><h4>Recept Titel</h4></label>
      <input id="title" type="text" v-model="title" />
      <br />
      <br />
      <label for="ingrediences"><h4>Ingredienser</h4></label>
      <p>
        Ange ett mått eller antal samt ingrediens per rad.
      </p>
      <p>Exempel:</p>
      <p>100 g smör</p>
      <p>1 dl mjöl</p>
      <textarea
        id="ingrediences"
        type="text"
        rows="10"
        cols="30"
        v-model="ingrediences"
      />
      <br />
      <br />
      <label for="instructions"><h4>Instruktioner</h4></label>
      <p>Använd nummer, punkt och ny rad för varge nytt moment.</p>
      <p>Exempel:</p>
      <p>1. Smält smöret</p>
      <p>2. Blanda mjöl, socker och salt i en bunke.</p>
      <textarea
        id="instructions"
        type="text"
        rows="10"
        cols="30"
        v-model="instructions"
      />
      <br />
      <input id="submit-button" type="submit" value="Registrera" />
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
      myRecepies: null,
      status: false,
      recepieId: null
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
          alert("Recept registrerat!");
          this.addToUser();
          window.location.reload(true);
        });
    },
    addToUser() {
      auth: "guest";
      const userId = this.$auth.user._id;
      console.log("Auth id: " + this.$auth.user.user_name);
      console.log("RecepieId: " + this.recepieId);
    }
  }
};
</script>

<style scoped>
form {
  max-width: 600px;
}

#submit-button {
  background-color: steelblue; /* Green */
  border: none;
  color: white;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 2px;
}

#submit-button:hover {
  cursor: pointer;
  color: rgb(213, 221, 231);
}
</style>
