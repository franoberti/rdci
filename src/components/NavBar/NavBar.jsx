import React from 'react'
import './style.css'

const NavBar = () => {

  return (
    <>
      <div className='navBar'>

        <div className='container'>
          <div className='d-flex'>
            <a className='logo text-primary' >Red De Consultoría Interdisciplinaria</a>
            <div className='col-2'></div>
            <div className='col-4 d-flex align-items-center justify-content-between'>
              <div class="itemNav">
                <a className='itemNavText' href="#razonDeSer">Razon de Ser</a>
              </div>
              <div class="itemNav">
                <a className='itemNavText' href="#servicios">Servicios</a>
              </div>
              <div class="itemNav">
                <a className='itemNavText' href="#nosotros">Nosotros</a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>

  )
}

export default NavBar
