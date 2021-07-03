import React from 'react'
import { useNavigate } from 'react-router-dom';



function Login() {

    const navigate = useNavigate();

    function handleClick() {
        console.log('Fazer Login');
        navigate('/sobre');
    }
  return (
      <div>
          <button onClick={handleClick}>Login</button>
      </div>
  );
}

export default Login;