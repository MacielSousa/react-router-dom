import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
      <div>
          <h1>Home</h1>
          <p>Essa é a Home</p>
          <Link to="produto/notebook">Notebook</Link> {'  '}
          <Link to="produto/smartphone">SmatPhone</Link>
      </div>
  );
}

export default Home;