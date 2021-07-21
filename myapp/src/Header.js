import  React from 'react';

const Header = ({ contar }) =>  {
  console.log('Header Renderizou', {contar});
  return (
    <div>
        <h1>Header Aqui</h1>
    </div>
  )
}



export default React.memo(Header);