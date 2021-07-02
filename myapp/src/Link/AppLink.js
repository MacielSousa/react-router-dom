import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home'
import Sobre from './Sobre'
import Header from './Header'
import NaoEncotrada from './NaoEncotrada';
import Login from './login';

function AppLink() {
  return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="sobre" element={<Sobre />}/>
          <Route path="login" element={<Login />}/>
          <Route path="*" element={<NaoEncotrada />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default AppLink;