export default {
  namespaced: true,
  state() {
    return {
      error: null
    }
  },
  mutations: {
    setError(state, error) {
      state.error = error
    }
  }
}