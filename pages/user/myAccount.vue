<template>
  <div>
    <h2>Mitt Konto</h2>
    <div v-if="$auth.loggedIn">
      <p>Inloggad</p>
    </div>

    <button @click="getMyRecepies">Click</button>
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
        <!-- <li>
          <nuxt-link to="/recepie/oneRecepie" :recepie="recepie" :key="recepie._id">One Recepie</nuxt-link>
        </li> -->
       
      </ul>
    </div>
    <div v-else>
      No records found.
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      allRecepies: Array,
      recepies: Array
    };
  },
  async asyncData(context) {
    // auth: "guest";
    const { data } = await context.$axios.get("/api/recepies");

    return {
      allRecepies: data
    };
  },
  methods: {
    getMyRecepies() {
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
    }
  }
};
</script>

<style></style>
