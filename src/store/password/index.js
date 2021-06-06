import {router} from "../../router.js"
import api from '../../utils/api.js'

export default {
  namespaced: true,
  actions: {
    savePassword(ctx, password) {
      const userUUID = ctx.rootState.session.session.sub
      const apiUrl = `/admin/realms/master/users/${userUUID}/reset-password`
      api
        .put(apiUrl, {
          type: "password",
          value: password, 
          temporary: false
        })
        .then(res => {
          if (res.status === 204) {
            console.log('updated! ')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
