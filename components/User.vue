<template>
  <div class="recepie-wrapper">
    <div class="recepie-box-one">
      <h3>{{ currentUser.user_name }}</h3>
      <br />
    </div>
    <div class="recepie-box-two">
      <h4>E-post</h4>
      <p style="white-space: pre-line">{{ currentUser.email }}</p>
      <br />
    </div>
    <!-- <div class="recepie-box-three">
      <h4>Lösenord</h4>
      <p style="white-space: pre-line">{{ currentUser.password }}</p>
      <br />
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    currentUser: {
      user_name: String,
      email: String,
    //   password: String
    }
  },
  methods: {
    
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
