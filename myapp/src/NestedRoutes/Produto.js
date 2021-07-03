import React from 'react'
import { useLocation, useParams, Routes, Route, NavLink } from 'react-router-dom';
import ProdutoDescricao from './ProdutoDescricao'
import ProdutoAvaliacao from './PordutoAvaliacao'
import ProdutoCustomizado from './ProdutoCustomizado';


function Produto() {
    //Informações dos Paramentros
    const params = useParams();
    console.log(params);
    
    //Informações da Tota
    const location = useLocation();
    console.log(location);

    const search = new URLSearchParams(location.search)
    console.log(search.get('memoria'));
    
    
  return (
      <div>
          <h1>Produto: {params.id}</h1>
          <nav>
            <NavLink to=""> Descrição </NavLink>
            <NavLink to="avaliacao">Avaliação</NavLink>{' | '}
            <NavLink to="customizado">Customizado</NavLink>
          </nav>
          <Routes>
              <Route path="" element={<ProdutoDescricao />}/>
              <Route path="avaliacao" element={<ProdutoAvaliacao />}/>
              <Route path="customizado" element={<ProdutoCustomizado />}/>
          </Routes>
      </div>
      
  );
}

export default Produto;