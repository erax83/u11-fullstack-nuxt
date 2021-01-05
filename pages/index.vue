<template>
  <div class="box-wrapper">
    <div class="box-one">
      <h2>Välkommen till Receptcirkeln!</h2>
      <p>
        Här på Receptcirkeln kan du dela med dig av dina favoritrecept och
        samtidigt ta del av den ständigt växande receptsamlingen som skapas av
        Receptcirkelns medlemmar.
      </p>
      <br>
    </div>

    <div class="box-two">
      <h2>Nya Recept</h2>

      <div class="recepie-list" v-if="recepies.length">
        <ul v-for="recepie in recepies" :key="recepie._id">
          <li @click="showRecepie(recepie)">
            {{ capitalize_Words(recepie.title) }}
          </li>
        </ul>
      </div>
      <div v-else>
        No records found.
      </div>
    </div>

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
    capitalize_Words(str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
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

.box-wrapper {
  display: grid;
  grid-gap: 20px;
}

@media only screen and (max-width: 300px) {
  .box-wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
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
    grid-column-end: 7;
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

@media only screen and (min-width: 1400px) {
  .box-wrapper {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    /* grid-gap: 10px; */
  }

  .box-one {
    grid-column-start: 1;
    grid-column-end: 6;
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
