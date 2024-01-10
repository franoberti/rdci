import React from 'react'
import styles from './navbar.module.css'

const NavBar = () => {

  return (
    <div className={`${styles.navBar}`}>
      <div className={`container`}>

        <div className={`d-flex`}>
          
          <a className={`${styles.logo} text-primary`}>Red De Consultoría Interdisciplinaria</a>
          <div className='col-2'></div>
          
          <div className='col-4 d-flex align-items-center justify-content-between'>
            <div className={`${styles.itemNav}`}>
              <a className={`${styles.itemNavText}`} href="#razonDeSer">Razon de Ser</a>
            </div>
            <div className={`${styles.itemNav}`}>
              <a className={`${styles.itemNavText}`} href="#servicios">Servicios</a>
            </div>
            <div className={`${styles.itemNav}`}>
              <a className={`${styles.itemNavText}`} href="#nosotros">Nosotros</a>
            </div>

          </div>
        
        </div>

      </div>

    </div>

  )
}

export default NavBar
