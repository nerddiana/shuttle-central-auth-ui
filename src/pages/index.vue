<template>
  <div class="w-screen h-screen flex justify-center items-center border-box">
    <div class="text-center flex flex-col border rounded p-8">
      <h1 class="text-4xl font-bold">Hola, {{ $store.state.session.session?.name }}</h1>
      <div>
        <h2 class="text-2xl mt-2 font-medium">¿Qué desea hacer hoy?</h2>
        <div class="mt-8 flex flex-col gap-4">
          <router-link class="bg-green-300 py-3" to="/password">Cambiar contraseña</router-link>
          <button class="bg-green-300 py-3" @click="signout">Salir</button>
        </div>
      </div>
    </div>
  </div>
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