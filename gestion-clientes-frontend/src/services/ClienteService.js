import axios from 'axios'

const CLIENTE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/clientes'

class ClienteService {
  getAllClientes() {
    return axios.get(CLIENTE_BASE_REST_API_URL)
  }

  createCliente(cliente) {
    return axios.post(CLIENTE_BASE_REST_API_URL, cliente)
  }

  updateCliente(clienteId, cliente) {
    return axios.put(CLIENTE_BASE_REST_API_URL + '/' + clienteId, cliente)
  }

  getClienteById(id) {
    return axios.get(CLIENTE_BASE_REST_API_URL + '/' + id)
  }

  deleteCliente(id) {
    return axios.delete(CLIENTE_BASE_REST_API_URL + '/' + id)
  }
}

export default new ClienteService()
