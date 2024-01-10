import React from 'react';
import img1 from '../../assets/gustavoCorradini.png'; // Importa tus imágenes
import img2 from '../../assets/pabloAran.png';
import img3 from '../../assets/marceloLerda.png';
import img4 from '../../assets/isabelCarbonell.png';
import img5 from '../../assets/fernandaDelFranco.png';
import styles from './nosotros.module.css'

const Nosotros = () => {
    return (
        <div className={`${styles.nosotrosContainer} sectionContainer`} id='nosotros'>
            <h3 className={`sectionTitle`}>Nosotros</h3>
            <div className={`${styles.imagenRow}`}>
                <div>
                    <h4 className={`${styles.subtituloImagen}`}>Director de Proyectos</h4>
                    <div className={`${styles.imagenWrapper}`}>
                        <div className={`${styles.imagenNombre}`}>
                            <img src={img1} alt="Imagen 1" className={`${styles.imagenRedonda}`} />
                            <p>Lic. Gustavo Corradini</p>
                        </div>
                        <div className={`${styles.descripcionImagen}`}>
                            <p>Consultor Especialista en Gestión de Organizaciones.</p>
                            <p>Director del Área Capacitación de la Red. </p>
                            <p>Implementación de planes de negocios y formación de equipos profesionales y de atención al público.</p>
                            <p>Estudios de mercado y sondeos de opinión político. </p>
                            <p>Experiencia en el ámbito de organizaciones públicas, sectoriales y privadas.</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className={`${styles.imagenRow}`}>
                <div>
                    <h4 className={`${styles.subtituloImagen}`}>Responsable Relaciones Institucionales </h4>
                    <div className={`${styles.imagenWrapper}`}>
                        <div className={`${styles.imagenNombre}`}>
                            <img src={img2} alt="Imagen 2" className={`${styles.imagenRedonda}`} />
                            <p>Pablo Arán</p>
                        </div>
                        <div className={`${styles.descripcionImagen}`}>
                            <p>Consultor Especialista en RRPP.</p>
                            <p>Director del Área Relaciones Institucionales de la Red.</p>
                            <p>Formador de equipos profesionales comerciales.</p>
                            <p>Experiencia en el ámbito de organizaciones públicas, y privadas.</p>

                        </div>
                    </div>

                </div>

                <div>
                    <h4 className={`${styles.subtituloImagen}`}>Especialista en Proyectos Contables e Impositivos</h4>
                    <div className={`${styles.imagenWrapper}`}>
                        <div className={`${styles.imagenNombre}`}>
                            <img src={img3} alt="Imagen 3" className={`${styles.imagenRedonda}`} />
                            <p>Cr. Marcelo Lerda</p>
                        </div>
                        <div className={`${styles.descripcionImagen}`}>
                            <p>Consultor Especialista en Administración Tributaria. </p>
                            <p>Director del Área Impositiva y Fiscal de la Red. </p>
                            <p>Implementación de planes de mejora fiscal en organizaciones de índole pública y privada. </p>
                            <p>Experiencia en análisis y gestión financiera.</p>
                            <p>Capacitador en áreas de competencia fiscal, laboral y financiera.</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className={`${styles.imagenRow}`}>
                <div>
                    <h4 className={`${styles.subtituloImagen}`}>Especialista en Proyectos de Formación</h4>
                    <div className={`${styles.imagenWrapper}`}>
                        <div className={`${styles.imagenNombre}`}>
                            <img src={img4} alt="Imagen 4" className={`${styles.imagenRedonda}`} />
                            <p>Lic. María Isabel Carbonell</p>
                        </div>
                        <div className={`${styles.descripcionImagen}`}>
                            <p>Consultora y asesora experta en gestión de proyectos de integración inclusiva y equidad, Gestión del Cambio, Cultura Organizacional, Desarrollo Sostenible y Economía Circular en organizaciones públicas y privadas.</p>
                            <p>Experta en habilidades estratégicas directivas.</p>
                            <p>Investigadora y docente de grado y post grado en Universidades Iberoamericanas.</p>
                            <p>Ha desarrollado y liderado proyectos de integración en el tercer sector sobre temáticas de desarrollo regional, circular, inclusión y equidad, bajo la aplicación de la agenda 2030, con sus correspondientes mediciones e impacto. </p>

                        </div>
                    </div>

                </div>

                <div>
                    <h4 className={`${styles.subtituloImagen}`}>Especialista en Proyectos Urbanos</h4>
                    <div className={`${styles.imagenWrapper}`}>
                        <div className={`${styles.imagenNombre}`}>
                            <img src={img5} alt="Imagen 5" className={`${styles.imagenRedonda}`} />
                            <p>Arq. María Fernanda del Franco</p>
                        </div>
                        <div className={`${styles.descripcionImagen}`}>
                            <p>Especialista en gestión catastral y desarrollo urbano. </p>
                            <p>Directora del Área Urbanística de la Red. </p>
                            <p>Experiencia en planeamiento y desarrollo de obras públicas y privadas.</p>
                            <p>Experiencia en mejoras del sistema catastral en comunas y municipios.</p>
                            <p>Experiencia en estudios de impacto ambiental. </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Nosotros;