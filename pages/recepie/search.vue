<template>
  <div class="box-wrapper">
    <div class="box-one">
      <h2>Sök recept</h2>
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
    </div>

    <div
      class="recepie-list box-two"
      v-if="
        testRecepies != null && this.searchWord != '' && this.searchWord != ' '
      "
    >
      <!-- <nuxt-link
          class="list-group-item list-group-item-action"
          :to="'/articles/' + recepie._id"
          v-for="recepie in recepies"
          :key="recepie._id"
        >
         {{recepie.title}}
          
        </nuxt-link> -->

      <ul v-for="testRecepie in testRecepies" :key="testRecepie._id">
        <li @click="showRecepie(testRecepie)">
          {{ capitalize_Words(testRecepie.title) }}
        </li>
      </ul>
    </div>
    <!-- <div v-else>
      Inga recept hittade.
    </div> -->
    <div class="box-three" v-if="this.currentRecepie != null">
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
      testRecepies: null,
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
    capitalize_Words(str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
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
      this.testRecepies = newArray.slice(0, 20);
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
/* .box-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
}

.box-one {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
}

.box-two {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
} */

@media only screen and (max-width: 300px) {
  .box-wrapper {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    /* grid-gap: 10px; */
  }

  .box-one {
    grid-column-start: 1;
    grid-column-end: 2;
    /* grid-row-start: 1; */
  }

  .box-two {
    grid-column-start: 1;
    grid-column-end: 2;
    /* grid-row-start: 2; */
  }

  .box-three {
    grid-column-start: 1;
    grid-column-end: 2;
    /* grid-row-start: 2; */
  }
}

@media only screen and (min-width: 301px) {
  .box-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    /* grid-gap: 10px; */
  }

  .box-one {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
  }

  .box-two {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
  }

  .box-three {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
  }
}

@media only screen and (min-width: 500px) {
  .box-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    grid-gap: 10px;
  }

  .box-one {
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-gap: 10px;
  }

  .box-two {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
  }

  .box-three {
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 2;
  }
}

@media only screen and (min-width: 900px) {
  .box-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    /* grid-gap: 10px; */
  }

  .box-one {
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row-start: 1;
  }

  .box-two {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 2;
  }

  .box-three {
    grid-column-start: 5;
    grid-column-end: 13;
    grid-row-start: 2;
  }
}

@media only screen and (min-width: 1200px) {
  .box-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    /* grid-gap: 10px; */
  }

  .box-one {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
  }

  .box-two {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
  }

  .box-three {
    grid-column-start: 4;
    grid-column-end: 13;
    grid-row-start: 2;
  }
}
</style>
