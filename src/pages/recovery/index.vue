<template>
  <div class="w-screen h-screen flex justify-center items-center border-box">
    <div class="text-center flex flex-col border rounded p-8">
    <h1 class="text-2xl font-bold">Recupere su cuenta</h1>
      <form class="flex flex-col w-60" @submit.prevent="recovery">
        <legend class="text-md mt-3 mb-4">
          Introduzca su correo para recibir un enlace de acceso temporal.
        </legend>
        <div v-show="$store.state.alerts.alert">
          <alert
            :alert-type="$store.state.alerts.alert?.type"
            :title="$store.state.alerts.alert?.title"
            :message="$store.state.alerts.alert?.message"
          />
        </div>
        <input class="border border-gray-400 rounded mt-2 px-2 py-1" type="email" placeholder="demo@demo.com" v-model="email" />
        <input class="border border-gray-400 rounded mt-4 px-2 py-1" type="submit" value="Enviar" />
      </form>
      <div class="mt-8">
        <router-link class="text-blue-400" to="/">Volver</router-link>
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
      email: ''
    }
  },
  methods: {
    recovery() {
      const isEmail = (str) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str)
      if (!isEmail(this.email)) {
        this.$store.commit('alerts/setAlert', {
          type: 'error',
          title: 'Introduzca una correo válido',
          message: 'Verifique que su correo está escrito correctamente'
        }, {
          root: true
        })
        return;
      }

      this.$store.commit('alerts/setAlert', {
        type: 'success',
        title: 'Enlace enviado',
        message: 'Enviamos un correo con tu enlace de acceso temporal'
      })
    }
  },
  beforeUnmount() {
    this.$store.commit('alerts/clear')
  }
})
</script>

