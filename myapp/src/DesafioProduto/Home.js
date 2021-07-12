import React from 'react';
import Produtos from './Produtos';
import {Helmet} from 'react-helmet';

const Home = () =>{
    return (<>
        <Helmet>
         <title>Ranaki</title>
       </Helmet>
        <Produtos />
    </>)
}

export default Home;