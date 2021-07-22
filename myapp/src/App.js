import  React from 'react';
import Produtos from './Produtos';

const App = () =>  {

  const [ativar, setAtivar] = React.useState(true);

  return (
    <>
      <div>
        {ativar && <Produtos titulo="Esses são os Produtos"/> }
        <button onClick={() => setAtivar(!ativar)} style={{marginTop: '15px'}}>Toggle</button>
      </div>
    </>
  )
}



export default App;
