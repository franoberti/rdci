import React, { useState, useRef, useEffect } from 'react'
import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

  const [visibleNavbar, setVisibleNavBar] = useState(false)
  
  const miEtiquetaRef = useRef(null);
  const miEtiquetaRef2 = useRef(null);

  const handleClickBars = () => {
    setVisibleNavBar(!visibleNavbar)
  }

  const handleClickHome = () => {
    // Desplázate al inicio de la página
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Esto hará que el desplazamiento sea suave
    });
  };

  useEffect(() => {
    // Función de manejo de clic para el documento
    function handleDocumentClick(event) {
      // Verificar si el clic ocurrió fuera de la etiqueta específica
      if ((visibleNavbar && miEtiquetaRef.current && !miEtiquetaRef.current.contains(event.target)) &&
        (miEtiquetaRef2.current && !miEtiquetaRef2.current.contains(event.target))) {
        // Realiza la acción que deseas aquí
        setVisibleNavBar(false)
        // Puedes realizar la acción que desees aquí
      }
    }

    // Agregar el event listener al documento si visibleNavbar es true
    if (visibleNavbar) {
      document.addEventListener('click', handleDocumentClick);
    }


    // Limpiar el event listener al desmontar el componente
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [visibleNavbar]);

  return (
    <>

      <div className={`${styles.navBar}`}>


        <div className={`container-fluid`}>

          <div className={`${styles.navContainer}`}>

            <a className={`${styles.logo} text-primary`} onClick={handleClickHome}>Red De Consultoría Interdisciplinaria</a>
            <a className={`${styles.logoMobile} text-primary`} onClick={handleClickHome}>RDCI</a>

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
              <FontAwesomeIcon icon={faBars} className={`${styles.bars}`} onClick={handleClickBars}  ref={miEtiquetaRef2} />
            </div>

          </div>

        </div>

        {
          visibleNavbar ?

            <div className={`${styles.optionsMobile}`} ref={miEtiquetaRef}>
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
            :
            <></>
        }

      </div>

    </>

  )
}

export default NavBar
