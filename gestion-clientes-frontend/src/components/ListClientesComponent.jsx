import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ClienteService from '../services/ClienteService.js'

const ListClientesComponent = () => {
  const [clientes, setclientes] = useState([])

  useEffect(() => {
    listarClientes()
  }, [])

  const deleteCliente = id => {
    const confirmacion = confirm('¿Estás seguro de que lo quieres borrar?')
    if (confirmacion) {
      ClienteService.deleteCliente(id)
        .then(response => {
          listarClientes(response.data)
          alert('Borrado')
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      alert('Usuario no borrado')
    }
  }

  const listarClientes = () => {
    ClienteService.getAllClientes()
      .then(response => {
        setclientes(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className='container'>
      <h2 className='text-center '>Lista de clientes</h2>
      <div className='d-flex'>
        <Link
          to='/add-cliente'
          className='btn btn-primary m-2'
        >
          Agregar cliente
        </Link>
      </div>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.apellido}</td>
              <td>{cliente.email}</td>
              <td>
                <Link
                  className='btn btn-info'
                  to={`/edit-cliente/${cliente.id}`}
                >
                  Actualizar
                </Link>
                &nbsp;&nbsp;
                <button
                  className='btn btn-danger'
                  onClick={() => deleteCliente(cliente.id)}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListClientesComponent
