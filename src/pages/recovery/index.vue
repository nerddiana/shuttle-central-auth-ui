<template>
  <h1>Recupera tu cuenta</h1>
  <form @submit.prevent="recovery">
    <legend>
      Introduce tu correo para recibir un enlace de acceso temporal.
    </legend>
    <div v-show="$store.state.alerts.alert">
      {{ $store.state.alerts.alert }}
    </div>
    <input type="email" v-model="email" />
    <input type="submit" value="Enviar" />
  </form>
  <router-link to="/">Volver</router-link>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
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

