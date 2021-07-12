import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Produtos from './Produtos';
import Produto from './Produto';
import NaoEncotrada from './NaoEncotrada';
import Home from './Home';
import Contato from './Contato';
import Header from './Header';


const AppProduto = () => {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="contato" element={<Contato />}/>
          <Route path="produto/:id" element={<Produto />}/>
          <Route path="*" element={<NaoEncotrada />}/>
        </Routes>
      </BrowserRouter>
    );
}

export default AppProduto;