import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext'
import '../styles/components/Header.css'
import logo from '../static/logo.png'


const Header = () => {
   const { state } = useContext(AppContext);
   const { cart } = state;
   return (
      <header>
         <div className="logo">
            <img src={logo} alt="logo" />
         </div>
         <div className="menu">
            <ul>
              <Link to="/"> 
               <li>Inicio</li>
              </Link>
              <Link to="/products">
                 <li>Nuestros productos</li>
              
              </Link>
               <Link to="/">
                  <li>Contactos</li>

               </Link>
               <Link to="/checkout">
                  <li >
                  <i className="fas fa-shopping-basket" />
                     {
                        cart.length > 0 && <div className="Header-alert">{cart.length}</div>

                     }
                  </li>
               </Link>

            </ul>
         </div>

      </header>
   );
}


export default Header;