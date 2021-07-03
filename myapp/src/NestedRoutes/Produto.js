import React from 'react'
import { useLocation, useParams, Routes, Route, NavLink, Outlet } from 'react-router-dom';



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
          <Outlet />
      </div>
      
  );
}

export default Produto;