<template>
  <div>
    <h2>Recept</h2>
    <div>
      <div v-if="recepies.length">
        <!-- <nuxt-link
          class="list-group-item list-group-item-action"
          :to="'/articles/' + recepie._id"
          v-for="recepie in recepies"
          :key="recepie._id"
        >
         {{recepie.title}}
          
        </nuxt-link> -->
        <ul v-for="recepie in recepies" :key="recepie._id">
          <li>
            {{ recepie.title }}
          </li>
        </ul>
      </div>
      <div v-else>
        No records found.
      </div>
    </div>
    <div v-if="$auth.loggedIn">
      <p>Inloggad</p>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      testRecepies: null,
      recepies: []
    };
  },
  async asyncData(context) {
    const { data } = await context.$axios.get("/api/recepies");
    return {
      recepies: data
    };
  }
};
</script>

<style></style>
