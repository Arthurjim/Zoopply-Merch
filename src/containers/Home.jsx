import React from 'react';
import {Helmet} from 'react-helmet';
import Products from '../components/Products'
import initialState from '../initialState.js'
const Home = () => {
   return ( 
      <>
         <Helmet>
            <title>Zoopply - Productos</title>
            
         </Helmet>
         <Products products={initialState.products}/>
      </>

    );
}
 
export default Home;