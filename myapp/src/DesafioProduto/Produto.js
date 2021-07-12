import React from 'react';
import './Produto.css'
import { useLocation, useParams, Routes, Route, NavLink, Outlet, Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';
const Produto = () => {

     //Informações dos Paramentros
     const params = useParams();
     console.log('Params: ', params.id)
 
     //Informações da Tota
     const location = useLocation();
     console.log('Location: ',location);

    const [produto, setProduto] = React.useState(null);
    React.useEffect(() => {
        if(produto === null){
            fetch('https://ranekapi.origamid.dev/json/api/produto/'+params.id)
            .then((resp) => resp.json())
            .then((json) => setProduto(json))
        }
    }, [produto]);
    console.log("Produto: ",produto)

    return (
    <>
    <Helmet>
         {produto && <title>Ranaki | {produto.nome}</title>}
    </Helmet>
            <div className="produto" key={ produto && produto.id}>
                <div className="list-produtor" >
                    {produto && <>
                        <div>
                            {produto.fotos.map((foto) => <img src={foto.src}/>)}
                        </div>
                        <div className="info" id="info" key={produto.nome}>
                            <h3>{produto.nome}</h3>
                            <p style={{width: produto.preco.indexOf('.') !== -1 ? '63px' : '46px'}}>R$ {produto.preco}</p>
                            <p>{produto.descricao}</p>
                        </div>
                    </>}
                </div>
            </div>
        </>
    );
}

export default Produto;