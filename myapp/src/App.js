import  React from 'react';

const App = () =>  {
  const [contar, setContar] = React.useState(0);
  function aumentar(){
    setContar(contar + 1);
  }
  function diminuir() {
    setContar(contar - 1);
  }

  return (
    <div>
      <button onClick={aumentar} style={{marginRight: '10px'}}>+</button>
      <button onClick={diminuir}>-</button>
      <p>{contar}</p>
    </div>
  )
}



export default App;
