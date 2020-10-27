<template>
  <div>
    <h2>Registrering</h2>
    
    <form action="" method="post" @submit.prevent="submitForm()">
      <div>
        <label for>Användarnamn</label>
        <input type="text" v-model="user_name" />
      </div>
      <div>
        <label for>E-post</label>
        <input type="text" v-model="email" />
      </div>
      <div>
        <label for>Lösenord</label>
        <input type="text" v-model="password" />
      </div>
      <input type="submit" value="Registrera" />
      
      <div
        v-if="$auth.loggedIn">
        <p>Inloggad</p>
      </div>
      <nuxt-link to="/">Avbryt</nuxt-link>
    </form>
    
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  
  data() {
    return {
      errors: null,
      user_name: null,
      email: null,
      password: null,
      status: false
    };
  },
  methods: {
    submitForm() {
      auth: 'guest';
      console.log(this.user_name);
      this.$axios.post( '/api/users/register', {
          user_name: this.user_name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response)
          if(response.data._id){
            this.$router.push({ name:'user-login', params:{ registered:'yes' } })
            
            this.$auth.loginWith('local', {
                data: {
                  email: this.email,
                  password: this.password
                }
              })
              .catch( (error) => {
                console.log(error)
              })
              
          }
        })
        .catch( (error) => {
          console.log(error)
          if(error.response.data.errors){
            this.errors = error.response.data.errors
          }
        });
    }
  }
}
</script>

<style>
</style>