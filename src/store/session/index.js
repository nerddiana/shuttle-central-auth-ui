import parseJwt from '../../utils/jwt_decode.js'

export default {
  namespaced: true,
  state() {
    return {
      access_token: '',
      session: null
    }
  },
  getters: {
    getAccessToken(state) {
      return state.access_token
    },
    getSession(state) {
      return state.session
    }
  },
  mutations: {
    setAccessToken(state, token) {
      state.access_token = token
    },
    setSession(state, session) {
      state.session = session
    }
  },
  actions: {
    loadAccessToken(ctx) {
      const token = localStorage.getItem('access_token')
      ctx.commit('setAccessToken', token)
      const session = parseJwt(token)
      ctx.commit('setSession', session)
    }
  }
}
