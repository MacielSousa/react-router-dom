import React from 'react';
import './buttom.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (<>
        <div className="botoes">
            <Link to="/" ><button className="btn">Produtos</button></Link>
            <Link to="contato" ><button className="btn">Contato</button></Link>
        </div>
    </>)
}

export default Header;