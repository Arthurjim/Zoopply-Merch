import React,{useContext} from 'react';
import Product from './Product';
import AppContext from '../context/AppContext'
import '../styles/components/Products.css'
const Products = () => {
   const {state, addToCart}=useContext(AppContext);
   const {products}=state;

   const hanldeAddToCart = (product)=>()=>{
      addToCart(product)
   }

   return ( 
      <div className="Products">
         <div className="Products-items">
            {products.map(product=>(
               <Product key={product.id} product={product} hanldeAddToCart={hanldeAddToCart} />
            ))}
         </div>
      </div>
    );
}
 
export default Products;