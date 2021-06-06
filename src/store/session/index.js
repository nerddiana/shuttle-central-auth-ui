import {router} from "../../router.js"
import parseJwt from '../../utils/jwt_decode.js'
import api from '../../utils/api.js'

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
    async signIn(ctx, data) {
      const apiUrl = '/realms/master/protocol/openid-connect/token'

      const params = new URLSearchParams();

      params.append('username', data.username);
      params.append('password', data.password);
      params.append('grant_type', 'password');
      params.append('client_id', 'demoapp');

      api
        .post(apiUrl, params)
        .then(res => {
          ctx.dispatch('saveAccessToken', res.data.access_token)
        })
        .catch(err => {
          if (err.response.status === 401) {
            // Unauthorized
            ctx.commit('alerts/setAlert', {
              title: 'Las credenciales no coinciden',
              message: 'Por favor, revise sus credenciales'
            }, {
              root: true
            })
          } else {
            // Unhandled error
            ctx.commit('alerts/setAlert', {
              title: 'Error desconocido',
              message: 'Por favor, intente mas tarde'
            }, {
              root: true
            })
          }
        })
    },
    signOut(ctx) {
      localStorage.removeItem('access_token')
      router.push('/signin')
    },
    async saveAccessToken(ctx, token) {
      console.log('saveAccessToken')
      localStorage.setItem('access_token', token)
      await ctx.dispatch('loadAccessToken')
      console.log('redirect to home')
      router.push('/')
    },
    loadAccessToken(ctx) {
      console.log('loadAccessToken')
      const token = localStorage.getItem('access_token')
      ctx.commit('setAccessToken', token)
      if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      }
      const session = parseJwt(token)
      ctx.commit('setSession', session)
    }
  }
}
