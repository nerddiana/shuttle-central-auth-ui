<template>
  <div class="w-screen h-screen flex justify-center items-center border-box">
    <div class="text-center flex flex-col border rounded p-8">
      <h1 class="text-2xl font-bold">Cambiar contraseña</h1>
      <form class="flex flex-col w-60" @submit.prevent="updatePassword">
        <legend class="text-md mt-3 mb-4">Introduzca su nueva contraseña</legend>
        <div v-show="$store.state.alerts.alert">
          <alert
            :alert-type="$store.state.alerts.alert?.type"
            :title="$store.state.alerts.alert?.title"
            :message="$store.state.alerts.alert?.message"
          />
        </div>
        <input class="border border-gray-400 rounded mt-2 px-2 py-1" type="password" placeholder="Nueva contraseña" v-model="password" />
        <input class="border border-gray-400 rounded mt-2 px-2 py-1" type="password" placeholder="Repita su contraseña" v-model="repassword" />
        <input class="border border-gray-400 rounded mt-4 px-2 py-1" type="submit" value="Guardar cambios" />
      </form>
      <div class="mt-8">
        <router-link class="text-blue-400" to="/">Ir al inicio</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import alert from '../../components/alert.vue'

export default defineComponent({
  components: {
    alert
  },
  data() {
    return {
      password: '',
      repassword: ''
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
