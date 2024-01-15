import React from 'react'
import Navbar from '../NavBar/NavBar'
import Servicios from '../Servicios/Servicios'
import Nosotros from '../Nosotros/Nosotros'
import WhatsappFlotante from '../WhatsappFlotante/WhatsappFlotante'
import styles from './home.module.css'

const Home = () => {

  return (

    <>
      <div className={`${styles.backgroundContainer}`}>

        <div className={`${styles.background}`} >

          <Navbar />

          <div className={`${styles.centeredDivContainer}`}>
            <div className={`${styles.centeredDiv}`}>
              <h1 className={`${styles.title}`}>RED DE CONSULTORES INTERDISCIPLINARIOS</h1>
              <div className={`${styles.line}`}></div>
              <h2 className={`${styles.subtitle}`}>Gestión Integral de Organizaciones</h2>
            </div>
          </div>

        </div>

      </div>

      <div className={`${styles.sectionContainer}`} id='razonDeSer'>
        <h3 className={`${styles.sectionTitle}`}>La excelencia es la razón de ser de nuestra RED</h3>
        <h4 className={`${styles.sectionSubtitle}`}>Consultoría con resultados comprobados</h4>
        <div className={`${styles.paragraph}`}>
          <p className={`${styles.sectionParagraph}`}>
            <strong>RCI</strong> es un selecto grupo de profesionales expertos reconocidos
          </p>
          <p className={`${styles.sectionParagraph}`}>
            por su capacidad y su compromiso inquebrantable con la calidad
          </p>
          <p className={`${styles.sectionParagraph}`}>
            y seguridad en la Gestión Integral de Organizaciones.
          </p>
        </div>
        <div className={`${styles.paragraphMobile}`}>
          <p><strong>RCI</strong> es un selecto grupo de profesionales expertos reconocidos por su capacidad y su compromiso inquebrantable con la calidad y seguridad en la Gestión Integral de Organizaciones.</p>
        </div>

      </div>

      <div id="servicios">
        <Servicios />
      </div>

      <div id="nosotros">
        <Nosotros />
      </div>

      <WhatsappFlotante />

    </>

  )
}

export default Home
