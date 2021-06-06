import api from '../../utils/api.js'

export default {
  namespaced: true,
  actions: {
    savePassword(ctx, { password, repassword }) {
      if (password.length < 8) {
        ctx.commit('alerts/setAlert', {
          type: 'error',
          title: 'Introduzca una contraseña válida',
          message: 'Su contraseña debe ser mayor a 8 caractéres'
        }, {
          root: true
        })
        return;
      }

      const hasLowercase = (str) => /^(?=.*[a-z]).+$/.test(str);
      if (!hasLowercase(password)) {
        ctx.commit('alerts/setAlert', {
          type: 'error',
          title: 'Introduzca una contraseña válida',
          message: 'Su contraseña debe contener al menos una letra minúscula'
        }, {
          root: true
        })
        return;
      }

      const hasUpercase = (str) => /^(?=.*[A-Z]).+$/.test(str);
      if (!hasUpercase(password)) {
        ctx.commit('alerts/setAlert', {
          type: 'error',
          title: 'Introduzca una contraseña válida',
          message: 'Su contraseña debe contener al menos una letra mayúscula'
        }, {
          root: true
        })
        return;
      }

      const hasNumbers = (str) => /^(?=.*[0-9]).+$/.test(str);
      if (!hasNumbers(password)) {
        ctx.commit('alerts/setAlert', {
          type: 'error',
          title: 'Introduzca una contraseña válida',
          message: 'Su contraseña debe contener al menos un número'
        }, {
          root: true
        })
        return;
      }

      if (password !== repassword) {
        ctx.commit('alerts/setAlert', {
          type: 'error',
          title: 'Las contraseñas no coinciden',
          message: 'Verifique de nuevo su contraseña'
        }, {
          root: true
        })
        return;
      }

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
            ctx.commit('alerts/setAlert', {
              type: 'success',
              title: 'Contraseña actualizada',
              message: 'Su contraseña ha sido actualizada con éxito'
            }, {
              root: true
            })
          }
        })
        .catch(err => {
          ctx.commit('alerts/setAlert', {
            type: 'error',
            title: 'Lo sentimos',
            message: 'Su contraseña no pudo ser actualizada'
          }, {
            root: true
          })
        })
    }
  }
}
