import  React from 'react';
import styles from './Contato.module.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import foto from './img/contato.jpg';
import Head from './Head';

const  Contato = () => {
  return (
    <section className={styles.contato}>
        <Head title="Shoppe | Contato" description="Entre em contato"/>
        <img  src={foto} alt={"Maquina de Escrever"}/>
        <div>
            <h1>Entre em Contato.</h1>
            <ul className={styles.dados + " animeLeft"}>
                <li>
                    joao@contato.com
                </li>
                <li>
                    10101010101010
                </li>
                <li>
                    Rua Bem Ali
                </li>
            </ul>
        </div>
        <h1>Contato</h1>
    </section>
  );

}

export default Contato;