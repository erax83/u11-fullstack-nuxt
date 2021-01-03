<template>
  <div class="recepie-wrapper">
    <div class="recepie-box-one">
      <h3>{{ capitalize_Words(currentRecepie.title) }}</h3>
      <br />
    </div>
    <div class="recepie-box-two">
      <h4>Ingredienser</h4>
      <p style="white-space: pre-line">{{ currentRecepie.ingrediences }}</p>
      <br />
    </div>
    <div class="recepie-box-three">
      <h4>Instruktioner</h4>
      <p style="white-space: pre-line">{{ currentRecepie.instructions }}</p>
      <br />
    </div>
    <div class="recepie-box-four">
      <h4>Skapat av</h4>
      <nuxt-link :to="'/user/userAccount/'">{{
        currentRecepie.author
      }}</nuxt-link>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentRecepie: {
      title: String,
      ingrediences: String,
      instructions: String,
      author: String
    }
  },
  methods: {
    capitalize_Words(str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  }
};
</script>

<style scoped>
@media only screen and (min-width: 700px) {
  .recepie-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    /* grid-gap: 10px; */
  }

  .recepie-box-one {
    grid-column-start: 1;
    grid-column-end: 2;
    /* grid-row-start: 1; */
  }

  .recepie-box-two {
    grid-column-start: 1;
    grid-column-end: 2;
    /* grid-row-start: 2; */
  }

  .recepie-box-three {
    grid-column-start: 2;
    grid-column-end: 3;
    /* grid-row-start: 2; */
  }

  .recepie-box-four {
    grid-column-start: 2;
    grid-column-end: 3;
    /* grid-row-start: 2; */
  }
}

@media only screen and (min-width: 1100px) {
  .recepie-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    /* grid-gap: 10px; */
  }

  .recepie-box-one {
    grid-column-start: 1;
    grid-column-end: 3;
    /* grid-row-start: 1; */
  }

  .recepie-box-two {
    grid-column-start: 1;
    grid-column-end: 3;
    /* grid-row-start: 2; */
  }

  .recepie-box-three {
    grid-column-start: 3;
    grid-column-end: 6;
    /* grid-row-start: 2; */
  }

  .recepie-box-four {
    grid-column-start: 3;
    grid-column-end: 6;
    /* grid-row-start: 2; */
  }
}
</style>
