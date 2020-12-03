import React from 'react';
import iconTwitter from '../static/twitter-icon.png'
import iconGoogle from '../static/google-icon.png'
import '../styles/components/Footer.css'
const Footer = () => {
   return ( 
      <div className="footer">
      <p>Zooply@gmail.com</p>
      <img src={iconTwitter} alt="twitter"/>
      <img src={iconGoogle} alt="google"/>
  
    </div>
    );
}
 
export default Footer;