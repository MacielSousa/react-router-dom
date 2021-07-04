import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'

function Home() {
  return (
      <div>
        <Head title="Home" description="Essa é a descrição da Home"/>
          <h1>Home</h1>
          <p>Essa é a Home</p>
          <Link to="produto/notebook">Notebook</Link> {'  '}
          <Link to="produto/smartphone">SmatPhone</Link>
      </div>
  );
}

export default Home;