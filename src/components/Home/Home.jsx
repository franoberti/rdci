import React from 'react'
import Navbar from '../NavBar/NavBar'
import Servicios from '../Servicios/Servicios'
import Nosotros from '../Nosotros/Nosotros'
import WhatsappFlotante from '../WhatsappFlotante/WhatsappFlotante'
import './style.css'

const Home = () => {

  return (

    <>
      <div className="backgroundContainer">

        <div className="background" >

          <Navbar />

          <div className="centeredDivContainer">
            <div className="centeredDiv">
              <h1 className="title">RED DE CONSULTORES INTERDISCIPLINARIOS</h1>
              <div className="line"></div>
              <h2 className="subtitle">Gestión Integral de Organizaciones</h2>
            </div>
          </div>

        </div>

      </div>

      <div className="sectionContainer" id='razonDeSer'>
        <h3 className="sectionTitle">La excelencia es la razón de ser de nuestra RED</h3>
        <h4 className="sectionSubtitle">Consultoría con resultados comprobados</h4>
        <div className='paragraph'>
          <p className="sectionParagraph">
            <strong>RCI</strong> es un selecto grupo de profesionales expertos reconocidos
          </p>
          <p className="sectionParagraph">
            por su capacidad y su compromiso inquebrantable con la calidad
          </p>
          <p className="sectionParagraph">
            y seguridad en la Gestión Integral de Organizaciones.
          </p>
        </div>
        <div className='paragraphMobile'>
          <p><strong>RCI</strong> es un selecto grupo de profesionales expertos reconocidos por su capacidad y su compromiso inquebrantable con la calidad y seguridad en la Gestión Integral de Organizaciones.</p>
        </div>

      </div>

      <div id='servicios'>
        <Servicios />
      </div>

      <div id='nosotros'>
        <Nosotros />
      </div>

      <WhatsappFlotante />

    </>

  )
}

export default Home
