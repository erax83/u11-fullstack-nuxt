<template>
  <div>
    <h2>Sök recept</h2>
    <div v-if="$auth.loggedIn">
      <p>Inloggad</p>
    </div>
    <input type="text" v-model="searchWord" v-on:input="search" />
    <!-- <div v-if="recepies.length"> -->
    <!-- <nuxt-link
          class="list-group-item list-group-item-action"
          :to="'/articles/' + recepie._id"
          v-for="recepie in recepies"
          :key="recepie._id"
        >
         {{recepie.title}}
          
        </nuxt-link> -->
    <!-- <ul v-for="recepie in recepies" :key="recepie._id">
        <li>
          {{ recepie.title }}
        </li>
      </ul>
    </div>
    <div v-else>
      No records found.
    </div> -->

    <div class="search-list" v-if="testRecepies.length">
      <!-- <nuxt-link
          class="list-group-item list-group-item-action"
          :to="'/articles/' + recepie._id"
          v-for="recepie in recepies"
          :key="recepie._id"
        >
         {{recepie.title}}
          
        </nuxt-link> -->
      <ul  v-for="testRecepie in testRecepies" :key="testRecepie._id">
        <li @click="showRecepie(testRecepie)">
          {{ testRecepie.title }}
        </li>
      </ul>
    </div>
    <div v-else>
      Inga recept hittade.
    </div>
    <hr>
    <div v-if="this.currentRecepie != null">
      <Recepie :currentRecepie="this.currentRecepie" />
    </div>
  </div>
</template>

<script>
import Recepie from "~/components/Recepie.vue";

export default {
  middleware: "auth",
  components: { Recepie },
  data() {
    return {
      testRecepies: [],
      searchWord: null,
      recepies: [],
      currentRecepie: null
    };
  },
  async asyncData(context) {
    const { data } = await context.$axios.get("/api/recepies");
    return {
      recepies: data
    };
  },
  methods: {
    search() {
      var oldArray = this.recepies;
      var newArray = [];

      for (var i = 0; i < oldArray.length; i++) {
        if (
          oldArray[i].title
            .toLowerCase()
            .includes(this.searchWord.toLowerCase())
        ) {
          newArray.push(oldArray[i]);
        }
      }
      this.testRecepies = newArray;
    },
    showRecepie: function(recepie) {
      this.currentRecepie = recepie;
      console.log(this.currentRecepie);
    }
  }

  // async asyncData(context) {
  //   const { data } = await context.$axios.get("/api/recepies");
  //   var allRecepies = [];
  //   var searchArray = [];
  //   allRecepies = data;
  //   for (var i = 0; i < allRecepies.length; i++) {
  //       if(allRecepies[i].title.includes(this.searchWord)) {
  //         searchArray.push(allRecepies[i])
  //       }
  //   }
  //   return {
  //     recepies: searchArray
  //   };
  // }
};
</script>

<style scoped>
.search-list {
  height: 100px;
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
}
</style>
