<template>
  <div>
    <h2>Sida</h2>
    <h4>Mina recept:</h4>
    <h4>{{ currentAuthor.author }}</h4>
    <div class="recepie-list" v-if="recepies.length">
      <!-- <nuxt-link
          class="list-group-item list-group-item-action"
          :to="'/articles/' + recepie._id"
          v-for="recepie in recepies"
          :key="recepie._id"
        >
         {{recepie.title}}
          
        </nuxt-link> -->
      <ul v-for="recepie in recepies" :key="recepie._id">
        <li @click="showRecepie(recepie)">
          {{ recepie.title }}
        </li>

        <!-- <li>
          <nuxt-link to="/recepie/oneRecepie" :recepie="recepie" :key="recepie._id">One Recepie</nuxt-link>
        </li> -->
      </ul>
    </div>
    <div v-else>
      Inga recept hittade.
    </div>
    <hr />
    <!-- <div v-if="this.currentRecepie != null">
      <Recepie :currentRecepie="this.currentRecepie" />
    </div> -->
  </div>
</template>

<script>
import Recepie from "~/components/Recepie.vue";
export default {
  middleware: "auth",
  components: { Recepie },
  data() {
    return {
      allRecepies: Array,
      recepies: Array,
      currentRecepie: null
    };
  },
  props: {
    currentAuthor: {
        author: String
    }
  },
  async asyncData(context) {
    // auth: "guest";
    const { data } = await context.$axios.get("/api/recepies");
    // await this.allRecepies = data;
    return {
      allRecepies: data
    };
  },
  mounted() {
    auth: "guest";
    var oldArray = this.allRecepies;
    var newArray = [];
    for (var i = 0; i < oldArray.length; i++) {
      if (oldArray[i].author == this.currentAuthor.author) {
        newArray.push(oldArray[i]);
      }
    }
    console.log('Current author: ' + this.currentAuthor.author);
    console.log("Mina recept: " + newArray);
    console.log("Alla recept: " + this.allRecepies);

    this.recepies = newArray;
  },
  methods: {
    showRecepie: function(recepie) {
      this.currentRecepie = recepie;
    }
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
