<template>
  <div>
    <h2>Recept</h2>
    <div>
      <div class="recepie-list" v-if="recepies.length">
        <ul v-for="recepie in recepies" :key="recepie._id">
          <li @click="showRecepie(recepie)">
            {{ recepie.title }}
          </li>
        </ul>
      </div>
      <div v-else>
        No records found.
      </div>
    </div>
    <hr>
    <div v-if="this.currentRecepie != null">
      <Recepie :currentRecepie="this.currentRecepie"/>
    </div>
  </div>
</template>

<script>
import Recepie from "~/components/Recepie.vue";

export default {
  components: { Recepie },
  middleware: "auth",
  components: {
    Recepie
  },
  data() {
    return {
      testRecepies: null,
      recepies: [],
      recepieToggle: false,
      currentRecepie: null
    };
  },
  methods: {
    toggle: function(event) {
      event.target.classList.toggle("is-open");
    },
    showRecepie: function(recepie) {
      this.currentRecepie = recepie;
      console.log(this.currentRecepie);
    }
    // addRecepies: function(data) {
    //   this.$store.commit("changeRecepies", data);
    // }
  },
  async asyncData(context) {
    const { data } = await context.$axios.get("/api/recepies");
    // await addRecepies(data);
    const reverseData = await data.reverse();
    const latestData = await reverseData.slice(0, 9);
    return {
      recepies: latestData
    };
  }
};
</script>

<style scoped>
.recepie-list {
  height: 100px;
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
}
</style>
