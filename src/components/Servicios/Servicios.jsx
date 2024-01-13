import React from 'react';
import styles from './servicios.module.css'
import imgServ1 from '../../assets/imgServ1.png'; 
import imgServ2 from '../../assets/imgServ2.png'; 
import imgServ3 from '../../assets/imgServ3.png'; 

const Servicios = () => {
  return (
    <div className={`${styles.serviciosContainer}`}>
      <h3 className={`${styles.sectionTitleService}`}>Nuestros Servicios</h3>
      <div className={`${styles.imagenesContainer}`}>
        <div className={`${styles.imagenWrapper}`}>
          <img src={imgServ1} alt="Imagen 1" className={`${styles.imagenRedonda}`} />
          <p className={`${styles.descripcionImagen}`}>Consultoría contable, impositiva y administrativa</p>
        </div>
        <div className={`${styles.imagenWrapper}`}>
          <img src={imgServ2} alt="Imagen 2" className={`${styles.imagenRedonda}`} />
          <p className={`${styles.descripcionImagen}`}>Consultoría en gestión organizacional e imagen institucional</p>
        </div>
        <div className={`${styles.imagenWrapper}`}>
          <img src={imgServ3} alt="Imagen 3" className={`${styles.imagenRedonda}`} />
          <p className={`${styles.descripcionImagen}`}>Consultoría en gestión de catastro, desarrollo urbano e impacto ambiental</p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;