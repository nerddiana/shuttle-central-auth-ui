<template>
  <div class="flex flex-col rounded px-3 py-2 mb-3" :class="styles">
    <h4 class="font-semibold w-full text-left">{{ title }}</h4>
    <p v-if="message" class="w-full text-left text-sm">{{ message }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'alert',
  props: {
    alertType: {
      type: String,
      default: 'default'
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    message: {
      type: String,
      default: ''
    }
  },
  computed: {
    styles() {
      return {
        [this.alertType]: true
      }
    }
  }
})
</script>

<style scoped lang="scss">
.default {
  @apply border;
}

.error {
  @apply bg-red-200;
}

.success {
  @apply bg-blue-200;
}
</style>
