import React, {useContext} from 'react';
import {PayPalButton} from 'react-paypal-button';
import AppContext from '../context/AppContext';
import {useHistory} from 'react-router-dom'
import '../styles/components/Payment.css'

const Payment = () => {
   const {state, addNewOrder} =useContext(AppContext);
   const history =useHistory()

const {cart,buyer}=state;

   const paypalOptions={
      clientId:'ARpyunVwzQcFg9kgoycTBPehPj-2zKJFAv97s6NuQNRb_CL1klRTwn_6JiG6NF4moTQMbbpU52mef8Dw',
    
      intent: 'capture',
      currency: 'USD'
   }
   const buttonStyles={
      layout:'vertical',
      shape:'rect'
   }
   const handlePaymentSuccess =(data)=>{
      //nos manda un status complete
      console.log(data)
      if(data.status === 'COMPLETED'){
         const newOrder={
            buyer,
            product:cart,
            payment:data//infromacion que nos regresa paypal
         }
         addNewOrder(newOrder)
         history.push('/checkout/success')
      }
   }
   const handleSumTotal = () => {
      const reducer = (acumulator, currentValue) => acumulator + currentValue.price
      const sum = cart.reduce(reducer, 0)
      return sum;
   }
   return (  
     <div className="Payment">
        <div className="Payment-content">
           <h3>Resumen del pedido:</h3>   
           {cart.map((item)=>(
              <div className="PaymentItem" key={item.title}>
                 <div className="Payment-elemen">
                     <h2>{item.title}</h2>
                     <span>
                        $
                        {' '}
                        {item.price}
                     </span>
                 </div>
              </div>
           ))}
           <div className="Payment-button">
              <PayPalButton
                  paypalOptions={paypalOptions}
                  buttonStyles={buttonStyles}
                  amount={handleSumTotal()}
                  onPaymentStart={()=>console.log('Start Payment')}
                  onPaymentSuccess={data=>handlePaymentSuccess(data)}
                  onPaymentError={error=>console.log(error)}
                  onPaymentCancel={data =>console.log(data)}
              />
           </div>
        </div>
         <div />
     </div>
   );
}
 
export default Payment
