import React from 'react';
import './style.css'
import imgServ1 from '../../assets/imgServ1.png'; 
import imgServ2 from '../../assets/imgServ2.png'; 
import imgServ3 from '../../assets/imgServ3.png'; 

const Servicios = () => {
  return (
    <div className="serviciosContainer">
      {/* Contenido de tu componente de servicios */}
      <h3 className='sectionTitleService '>Nuestros Servicios</h3>
      <div className="imagenesContainer">
        <div className="imagenWrapper">
          <img src={imgServ1} alt="Imagen 1" className="imagenRedonda" />
          <p className="descripcionImagen">Consultoría contable, impositiva y administrativa</p>
        </div>
        <div className="imagenWrapper">
          <img src={imgServ2} alt="Imagen 1" className="imagenRedonda" />
          <p className="descripcionImagen">Consultoría en gestión organizacional e imagen institucional</p>
        </div>
        <div className="imagenWrapper">
          <img src={imgServ3} alt="Imagen 1" className="imagenRedonda" />
          <p className="descripcionImagen">Consultoría en gestión de catastro, desarrollo urbano e impacto ambiental</p>
        </div>
        {/* Repite el patrón para otras imágenes */}
      </div>
    </div>
  );
};

export default Servicios;