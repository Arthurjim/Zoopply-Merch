import React from 'react';
import banner from '../static/banner.png'
import '../styles/components/Carousel.css'
const Carousel = () => {
   return ( 
      <div className="carousel">
      <div className="banner" >
        <img src={banner} alt="zoopply" />
        <a href="#"  className="carousel__link">Productos</a>
      </div>
      
    </div>
    );
}
 
export default Carousel;