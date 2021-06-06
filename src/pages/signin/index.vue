<template>
  <h1>Acceder</h1>
  <form @submit.prevent="signin">
    <legend>Introduce tus credenciales y haz click en continuar</legend>
    <div v-show="$store.state.alerts.alert">
      {{ $store.state.alerts.alert }}
    </div>
    <input type="text" name="username" v-model="username" />
    <input type="text" name="password" v-model="password" />
    <input type="submit" value="Continuar" />
  </form>
  <router-link to="/recovery">Recuperar cuenta</router-link>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signin() {
      this.$store.dispatch('session/signIn', {
        username: this.username,
        password: this.password
      })
    }
  },
  beforeUnmount() {
    this.$store.commit('alerts/clear')
  }
})
</script>
