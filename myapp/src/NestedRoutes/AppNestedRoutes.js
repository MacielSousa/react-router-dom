import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Header from './Header';
import NaoEncotrada from './NaoEncotrada';
import Login from './login';
import Produto from './Produto';

import ProdutoDescricao from './ProdutoDescricao'
import ProdutoAvaliacao from './PordutoAvaliacao'
import ProdutoCustomizado from './ProdutoCustomizado';

function AppNestedRoutes() {
  return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="sobre" element={<Sobre />}/>
          <Route path="login" element={<Login />}/>
          <Route path="produto/:id/*" element={<Produto />}>
              <Route path="" element={<ProdutoDescricao />}/>
              <Route path="avaliacao" element={<ProdutoAvaliacao />}/>
              <Route path="customizado" element={<ProdutoCustomizado />}/>
          </Route>
          <Route path="*" element={<NaoEncotrada />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default AppNestedRoutes;