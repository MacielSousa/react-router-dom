import  React from 'react';

function Button(props) {
  return <div>
    <button style={{width:`${props.width}px`, height: `${props.width/3}px`}}>{props.children}</button>
  </div>

}

export default Button;