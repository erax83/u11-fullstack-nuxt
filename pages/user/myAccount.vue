<template>
  <div class="box-wrapper">
    <div class="box box-one"><h2>Min Sida</h2></div>
    <div class="box box-two">
      <h3>Mina recept:</h3>
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
            {{ capitalize_Words(recepie.title) }}
          </li>
          <div v-if="$auth.user.user_name == recepie.author">
            <button v-on:click="deleteRecepie(recepie._id)">
              Radera Recept
            </button>
          </div>

          <!-- <li>
          <nuxt-link to="/recepie/oneRecepie" :recepie="recepie" :key="recepie._id">One Recepie</nuxt-link>
        </li> -->
        </ul>
      </div>
      <div v-else>
        No records found.
      </div>
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
      allRecepies: Array,
      recepies: Array,
      currentRecepie: null
    };
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
      if (oldArray[i].author == this.$auth.user.user_name) {
        newArray.push(oldArray[i]);
      }
    }
    console.log("Mina recept: " + newArray);
    console.log("user: " + this.$auth.user.user_name);
    console.log("Alla recept: " + this.allRecepies);

    this.recepies = newArray;
  },
  methods: {
    capitalize_Words(str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
    showRecepie: function(recepie) {
      this.currentRecepie = recepie;
    },
    deleteRecepie(recepieId) {
      auth: "guest";
      if (confirm("Är du säker?") === true) {
        this.$axios
          .delete("/api/recepies/" + recepieId)
          .then(response => {
            if (response.data._id) {
              this.$router.push({
                name: "recepies",
                params: { deleted: "yes" }
              });
            }
            alert("Receptet har raderats.");
            window.location.reload(true);
          })
          .catch(error => {
            console.log("delete error " + recepieId);
            console.log(error);
          });
      }
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
    grid-column-end: 6;
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
