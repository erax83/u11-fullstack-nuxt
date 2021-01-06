<template>
  <div class="box-wrapper">
    <div class="box box-one">
      <h2>Sök recept</h2>
      <input type="text" v-model="searchWord" v-on:input="search" />
      <br />
    </div>

    <div
      class="recepie-list box box-two"
      v-if="
        testRecepies != null && this.searchWord != '' && this.searchWord != ' '
      "
    >
      <ul v-for="testRecepie in testRecepies" :key="testRecepie._id">
        <li @click="showRecepie(testRecepie)">
          {{ capitalize_Words(testRecepie.title) }}
        </li>
      </ul>
    </div>
    <div class="box box-three" v-if="this.currentRecepie != null">
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
};
</script>

<style scoped>
.box-wrapper {
  display: grid;
  grid-gap: 20px;
}

@media only screen and (max-width: 300px) {
  .box-wrapper {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }

  .box-one {
    grid-column-start: 1;
    grid-column-end: 2;
  }

  .box-two {
    grid-column-start: 1;
    grid-column-end: 2;
  }

  .box-three {
    grid-column-start: 1;
    grid-column-end: 2;
  }
}

@media only screen and (min-width: 301px) {
  .box-wrapper {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
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

@media only screen and (min-width: 600px) {
  .box-wrapper {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto;
  }

  .box-one {
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 1;
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
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto;
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
    grid-column-end: 12;
    grid-row-start: 2;
  }
}

@media only screen and (min-width: 1200px) {
  .box-wrapper {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto;
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
    grid-column-end: 12;
    grid-row-start: 2;
  }
}
</style>
