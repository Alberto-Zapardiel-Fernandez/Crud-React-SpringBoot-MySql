import './App.css'
import ListClientesComponent from './components/ListClientesComponent.jsx'
import HeaderComponent from './components/HeaderComponent.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddClienteComponent from './components/AddClienteComponent'
import React from 'react'

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={<ListClientesComponent />}
            ></Route>
            <Route
              path='/clientes'
              element={<ListClientesComponent />}
            ></Route>
            <Route
              path='/add-cliente'
              element={<AddClienteComponent />}
            ></Route>
            <Route
              path='/edit-cliente/:id'
              element={<AddClienteComponent />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
