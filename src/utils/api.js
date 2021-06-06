import axios from 'axios'

const api = axios.create({
  baseURL: 'https://shuttle-central-keycloak.herokuapp.com/auth',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

export default api