<template>
  <div>
    <h2>Mitt Konto</h2>
    <div v-if="$auth.loggedIn">
      <p>Inloggad</p>
    </div>

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
        <li @click="showRecepie(recepie)">
          {{ recepie.title }}
        </li>
        <div v-if="$auth.user.user_name == recepie.author">
          <button v-on:click="deleteRecepie(recepie._id)">
            Delete recepie
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
    <div>
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
      currentRecepie: Object
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
    showRecepie: function(recepie) {
      this.currentRecepie = recepie;
    },
    deleteRecepie(recepieId) {
      auth: "guest";
      if (confirm("Are you sure?") === true) {
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

<style></style>
