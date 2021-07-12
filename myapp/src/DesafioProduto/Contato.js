import React from 'react';
import './Contato.css'
import PhotoContato from './contato.jpg';
import {Helmet} from 'react-helmet';
const Contato = () => {
    
    return (
    <>
    <Helmet>
    <title>Ranaki | Contato</title>
    </Helmet>
    <div className="contato">
        <div className="contatoPhto">
            <img src={PhotoContato}/>
        </div>
        <div className="contatoInfo">
            <h3>Entre em contato</h3>
            <p><span style={{color: '#C0C0C0'}}>-</span> Email: maciel@maciel.com.br</p>
            <p><span style={{color: '#C0C0C0'}}>-</span> 9999-9999</p>
            <p><span style={{color: '#C0C0C0'}}>-</span> Rua Ali Proximo, 1010</p>
        </div>
    </div> 
    </>
    );
}

export default Contato;