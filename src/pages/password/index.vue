<template>
  <h1>Cambiar contraseña</h1>
  <form @submit.prevent="updatePassword">
    <legend>Introduce tu nueva contraseña</legend>
    <div v-show="$store.state.alerts.alert">
      {{ $store.state.alerts.alert }}
    </div>
    <input type="text" v-model="password" />
    <input type="text" v-model="repassword" />
    <input type="submit" value="Guardar cambios" />
    <router-link to="/">Ir al inicio</router-link>
  </form>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      password: '1234',
      repassword: '1234'
    }
  },
  methods: {
    updatePassword() {
      this.$store.dispatch('password/savePassword', {
        password: this.password,
        repassword: this.repassword
      })
    }
  },
  beforeUnmount() {
    this.$store.commit('alerts/clear')
  }
})
</script>

<route lang="yaml">
meta:
  requiresAuth: true
</route>
