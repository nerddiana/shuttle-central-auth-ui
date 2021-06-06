<template>
  <h1>account</h1>
  <form @submit.prevent="signin">
    <legend>Sign In</legend>
    <div v-show="$store.state.alerts.alert">
      {{ $store.state.alerts.alert }}
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
