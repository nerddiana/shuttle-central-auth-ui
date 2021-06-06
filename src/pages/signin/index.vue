<template>
  <div class="w-screen h-screen flex justify-center items-center border-box">
    <div class="text-center flex flex-col border rounded p-8">
      <h1 class="text-2xl font-bold">Acceder</h1>
      <form class="flex flex-col w-60" @submit.prevent="signin">
        <legend class="text-md mt-3 mb-4">A continuación puede acceder a su cuenta</legend>
        <div v-show="$store.state.alerts.alert">
          <alert
            :alert-type="$store.state.alerts.alert?.type"
            :title="$store.state.alerts.alert?.title"
            :message="$store.state.alerts.alert?.message"
          />
        </div>
        <input class="border border-gray-400 rounded mt-2 px-2 py-1" type="text" name="username" placeholder="demo@demo.com" v-model="username" />
        <input class="border border-gray-400 rounded mt-2 px-2 py-1" type="password" name="password" placeholder="******" v-model="password" />
        <input class="border border-gray-400 rounded mt-4 px-2 py-1" type="submit" value="Continuar" />
      </form>
      <div class="mt-8">
        <p>¿Olvidaste tu contraseña?</p>
        <router-link class="text-blue-400" to="/recovery">Recuperar cuenta</router-link>
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
