<template>
  <div>
    <h2>{{ currentRecepie.title }}</h2>
    <h4>Ingredienser</h4>
    <p style="white-space: pre-line">{{ currentRecepie.ingrediences }}</p>
    <br />
    <h4>Instruktioner</h4>
    <p style="white-space: pre-line">{{ currentRecepie.instructions }}</p>
    <br />
    <h4>Skapat av</h4>
    <nuxt-link to="/user/userAccount" :currentAuthor="this.currentRecepie">{{ currentRecepie.author }}</nuxt-link>
    <br />
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
  }
};
</script>

<style></style>
