import  React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './Correcao Desafio Router 1/Footer';
import Header from './Correcao Desafio Router 1/Header';
import Produtos from './Correcao Desafio Router 1/Produtos';
import './App.css';
import Contato from './Correcao Desafio Router 1/Contato';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Produtos />} />
              <Route path="contato" element={<Contato />} />
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  );

}

export default App;
