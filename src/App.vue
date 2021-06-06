<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    this.$store.dispatch('session/loadAccessToken')
  }
})
</script>
