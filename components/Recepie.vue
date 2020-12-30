<template>
  <div>
    <h2>{{ currentRecepie.title }}</h2>
    <br>
    <p style="white-space: pre-line">{{ currentRecepie.ingrediences }}</p>
    <br>
    <p style="white-space: pre-line">{{ currentRecepie.instructions }}</p>
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
