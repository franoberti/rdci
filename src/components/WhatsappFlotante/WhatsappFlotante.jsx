import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styles from './whatsappFlotante.module.css'

const WhatsappFlotante = () => {
    return (
        <div className={`${styles.wppFijo}`}>
            <a
                href="https://api.whatsapp.com/send?phone=+543517014260&text=Hola"
                class="whatsapp"
                target="_blank"
                className={`${styles.wppLogo}`}>
                <FontAwesomeIcon icon={faWhatsapp} className={`${styles.wppLogo}`} target="_blank"/>
            </a>
        </div>
    );
};

export default WhatsappFlotante;