<template>
    <h1>Hola {{ $store.state.session.session?.name }}, has iniciado sesión</h1>
    <button @click="signout">Salir</button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    signout() {
      this.$store.dispatch('session/signOut')
    }
  }
})
</script>


<route lang="yaml">
meta:
  requiresAuth: true
</route>