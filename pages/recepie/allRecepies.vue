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
          <li @click="showRecepie(recepie)">
            {{ recepie.title }}
            
            <!-- <nuxt-link to="/recepie/oneRecepie">{{recepie.title}}</nuxt-link> -->

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
    <div v-if="$auth.loggedIn">
      <p>{{ $auth.user }}</p>
    </div>
    <div>
      <Recepie :currentRecepie="this.currentRecepie"/>
    </div>
  </div>
</template>

<script>
// import Recepie from 'components/Recepie.vue';
// import oneRecepie from './oneRecepie.vue';
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
      currentRecepie: Object
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
    return {
      recepies: data
    };
  }
};
</script>

<style></style>
