import  React from 'react';



function  reducer(state, action) {
  console.log(action);

  switch (action) {
    case 'aumentar':
     return state+1;
    case 'diminuir':
      return state-1;
      default:
        throw new Error();
  }
}

const App = () =>  {
  const [state, dispath] = React.useReducer(reducer, 0);
  
  return (
    <div>
      <button onClick={() => dispath('aumentar')} style={{marginRight: '10px'}}>+</button>
      <button onClick={() => dispath('diminuir')}>-</button>
      <p>{state}</p>
    </div>
  )
}



export default App;
