import React from 'react'
import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

  return (
    <div className={`${styles.navBar}`}>
      <div className={`container-fluid`}>

        <div className={`${styles.navContainer}`}>

          <a className={`${styles.logo} text-primary`}>Red De Consultoría Interdisciplinaria</a>
          <a className={`${styles.logoMobile} text-primary`}>RDCI</a>

          <div className={`${styles.items} `}>
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

          <div className={`${styles.itemsMobile}`}>
            <FontAwesomeIcon icon={faBars} className={`${styles.bars}`} />
          </div>

        </div>

      </div>

    </div>

  )
}

export default NavBar
