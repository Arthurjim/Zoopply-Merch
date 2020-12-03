import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddres from '../hooks/useGoogleAddress';
import '../styles/components/Success.css'
const Success = () => {
const {state} = useContext(AppContext);
const {buyer}= state;
const address2 = [buyer.payload.address,buyer.payload.city, buyer.payload.state]

const location = useGoogleAddres(address2);

   console.log(buyer.payload.address,buyer.payload.city, buyer.payload.state)
   return ( 
     <div className="Success">
        <div className="Success-content">
           <h2>{` ${buyer.payload.name},Gracias por tu compra`}</h2>
           <span>Tu pedido llegara en 3 días a tu direccion</span>
           <div className="Success-map">
               <Map data={location}/>
           </div>
        </div>
     </div>
    );
}
 
export default Success;