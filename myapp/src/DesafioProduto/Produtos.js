import React from 'react';
import './img.css';
import { useLocation, useParams, Routes, Route, NavLink, Outlet, Link } from 'react-router-dom';

const Produtos = () => {
    
    const [dados, setDados] = React.useState(null);
    React.useEffect(() => {
        if(dados === null){
            fetch('https://ranekapi.origamid.dev/json/api/produto')
            .then((resp) => resp.json())
            .then((json) => setDados(json))
        }
    }, [dados]);
    console.log(dados)

    return (
        <div className="container">
            <div className="list-produtor">
                {dados && dados.map(({nome, fotos, id}) => <div key={id} className="image-produto">
                <Link to={`produto/`+id}><img src={fotos[0].src}/></Link>
                <h3>{nome}</h3>
                </div>)}
            </div>
        </div>
    );
}

export default Produtos;