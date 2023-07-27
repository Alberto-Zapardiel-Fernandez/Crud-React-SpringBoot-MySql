import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import ClienteService from '../services/ClienteService.js'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const AddClienteComponent = () => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  const saveOrUpdateCliente = e => {
    e.preventDefault()
    const cliente = { nombre, apellido, email }

    if (id) {
      ClienteService.updateCliente(id, cliente)
        .then(response => {
          console.log(response.data)
          navigate('/clientes')
        })
        .catch(err => console.log(err))
    } else {
      ClienteService.createCliente(cliente)
        .then(response => {
          console.log(response.data)
          navigate('/clientes')
        })
        .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    ClienteService.getClienteById(id)
      .then(response => {
        setNombre(response.data.nombre)
        setApellido(response.data.apellido)
        setEmail(response.data.email)
      })
      .catch(err => console.log(err))
  }, [id])

  const title = () => {
    if (id) {
      return <h2 className='text-center'>Actualizar cliente</h2>
    } else {
      return <h2 className='text-center'>Agregar cliente</h2>
    }
  }

  return (
    <div>
      <h1>Registro de clientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3'>
            {title()}
            <div className='card-body'>
              <form action=''>
                <div className='form-group mb-2'>
                  <label
                    className='form-label'
                    htmlFor='nombre'
                  >
                    Nombre
                  </label>
                  <input
                    type='text'
                    name='nombre'
                    placeholder='Digite su nombre'
                    className='form-control'
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                  />
                </div>
                <div className='form-group mb-2'>
                  <label
                    className='form-label'
                    htmlFor='Apellido'
                  >
                    Apellido
                  </label>
                  <input
                    type='text'
                    name='Apellido'
                    placeholder='Digite su Apellido'
                    className='form-control'
                    value={apellido}
                    onChange={e => setApellido(e.target.value)}
                  />
                </div>
                <div className='form-group mb-2'>
                  <label
                    className='form-label'
                    htmlFor='Email'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    name='Email'
                    placeholder='Digite su Email'
                    className='form-control'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <button
                  className='btn btn-success'
                  onClick={e => saveOrUpdateCliente(e)}
                >
                  Guardar
                </button>
                &nbsp;&nbsp;
                <Link
                  to='/clientes'
                  className='btn btn-danger'
                >
                  Cancelar
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddClienteComponent
