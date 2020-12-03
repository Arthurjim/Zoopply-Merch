import React,{useRef, useContext} from 'react';
import { Link,useHistory } from 'react-router-dom';
import '../styles/components/Information.css';
import AppContext from '../context/AppContext'
const Information = () => {
   const {state, addToBuyer} = useContext(AppContext);
   const form= useRef(null);
   const history =useHistory()
   const {cart}=state;
   const hanldeSubmit =()=>{
      const formData = new FormData(form.current)//estamos pasando todos los datos del form
      const buyer ={
         'name': formData.get('name'),
         'email':formData.get('email'),
         'address':formData.get('address'),
         'apto':formData.get('apto'),
         'city':formData.get('city'),
         'country':formData.get('country'),
         'state':formData.get('state'),
         'cp':formData.get('cp'),
         'phone':formData.get('phone'),
      }
      addToBuyer(buyer);
      history.push('/checkout/payment')
   }
   return (
      <div className="Information">
         <div className="Information-content">
            <div className="Information-head">
               <h2>Información de contacto:</h2>
            </div>
            <div className="Information-form">
               <form ref={form}>
                  <input type="text" placeholder="Nombre completo" name="name" required />
                  <input type="text" placeholder="Correo Electronico" name="email" required />
                  <input type="text" placeholder="Direccion" name="address"required />
                  <input type="text" placeholder="apto" name="apto" required/>
                  <input type="text" placeholder="Ciudad" name="city" required/>
                  <input type="text" placeholder="Pais" name="country" required/>
                  <input type="text" placeholder="Estado" name="state" required />
                  <input type="text" placeholder="Codigo postal" name="cp" required />
                  <input type="text" placeholder="Telefono" name="phone" required/>
               </form>
            </div>
            <div className="Information-buttons">
               <div className="Information-back">
                <Link to="/checkout">
                  Regresar
                </Link>
               </div>
               <div className="Information-next">
                 <button type="button" onClick={hanldeSubmit}>
                    Pagar
                 </button>
                  
               </div>
            </div>
         </div>
         <div className="Information-sidebar">
            <h3>Pedido:</h3>
            {cart.map(item=>(
               <div className="Information-item" key={item.id}>
               <div className="Information-element">
                  <h4>{item.title}</h4>
                  <span>${item.price}</span>
               </div>
            </div>
            ))}
            
         </div>
      </div>
   );
};

export default Information;