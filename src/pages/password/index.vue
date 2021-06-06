<template>
  <h1>Cambiar contraseña</h1>
  <form @submit.prevent="updatePassword">
    <legend>Introduce tu nueva contraseña</legend>
    <input type="text" v-model="password" />
    <input type="text" v-model="repassword" />
    <input type="submit" value="Guardar cambios" />
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
      this.$store.dispatch('password/savePassword', this.password)
    }
  }
})
</script>

<route lang="yaml">
meta:
  requiresAuth: true
</route>
