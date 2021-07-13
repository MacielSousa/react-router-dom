import  React from 'react';
import PropTypes from 'prop-types';
function Button(props) {
  return <div>
    <button style={{
        margin: props.margin,
        width:`${props.width}px`,
         height: `${props.width/3}px`}}>
        {props.children}
    </button>
  </div>

}

// Definindo valor padrão para margem
Button.defaultProps = {
    margin: '10px',
};

Button.propTypes = {
    width: PropTypes.number.isRequired,
    margin: PropTypes.string,
}
  


export default Button;