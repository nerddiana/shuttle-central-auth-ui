import axios from 'axios'

const api = axios.create({
  baseURL: 'https://shuttle-central-keycloak.herokuapp.com/auth'
});

export default api