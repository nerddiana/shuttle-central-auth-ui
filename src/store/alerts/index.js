export default {
  namespaced: true,
  state() {
    return {
      alert: null
    }
  },
  mutations: {
    setAlert(state, alert) {
      state.alert = alert
    },
    clear(state) {
      state.alert = null
    }
  }
}