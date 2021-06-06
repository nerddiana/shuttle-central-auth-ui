<template>
  <h1>account</h1>
  <form @submit.prevent="signin">
    <legend>Sign In</legend>
    <div v-show="$store.state.session.errors.error">
      {{ $store.state.session.errors.error }}
    </div>
    <input type="text" name="username" v-model="username" />
    <input type="text" name="password" v-model="password" />
    <input type="submit" value="sign in" />
  </form>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      username: 'demo',
      password: '1234'
    }
  },
  methods: {
    signin() {
      this.$store.dispatch('session/signIn', {
        username: this.username,
        password: this.password
      })
    }
  }
})
</script>
