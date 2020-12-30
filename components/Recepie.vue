<template>
  <div>
    <h2>Recept Component</h2>
    <h2>{{ currentRecepie.title }}</h2>
    <p>{{ currentRecepie.ingrediences }}</p>
    <p>{{ currentRecepie.instructions }}</p>
    <p>{{ currentRecepie.author }}</p>

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
