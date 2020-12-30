<template>
  <div>
    <h2>{{ currentRecepie.title }}</h2>
    <br>
    <p>{{ currentRecepie.ingrediences }}</p>
    <br>
    <p>{{ currentRecepie.instructions }}</p>
    <br>

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
