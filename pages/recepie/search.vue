<template>
  <div>
    <h2>Sök recept</h2>
    <div v-if="$auth.loggedIn">
      <p>Inloggad</p>
    </div>
    <input type="text" v-model="searchWord" v-on:input="search"/>
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


    
    <div v-if="testRecepies.length">
      <!-- <nuxt-link
          class="list-group-item list-group-item-action"
          :to="'/articles/' + recepie._id"
          v-for="recepie in recepies"
          :key="recepie._id"
        >
         {{recepie.title}}
          
        </nuxt-link> -->
      <ul v-for="testRecepie in testRecepies" :key="testRecepie._id">
        <li>
          {{ testRecepie.title }}
        </li>
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
      testRecepies: [],
      searchWord: null,
      recepies: []
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
        if (this.searchWord == null) {
          newArray = null;
          break;
        }
        if (oldArray[i].title.includes(this.searchWord)) {
          newArray.push(oldArray[i]);
        }
      }
      this.testRecepies = newArray;
    }
  },
  
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

<style></style>
