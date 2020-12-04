import React from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';
import About from '../containers/About'
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information'
import Payment from '../containers/Payment';
import Success from '../containers/Success'
import NotFound from '../containers/NotFound'
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useIntialState from '../hooks/useInitialState';
import Contacts from '../containers/Contacts';


const App = () => {
   const initialState = useIntialState();
   return ( 
   <AppContext.Provider value={initialState}>
      {/**Encapsulando la navegacion*/}
      <HashRouter>
         {/**Mostrar la primer ruta que coincida */}
         <Layout>
      
            <Switch>
               <Route exact path="/" component={About}/>
               <Route exact path="/Products" component={Home}/>
               <Route exact path="/Members" component={Contacts} />
               <Route exact path="/checkout" component={Checkout}/>
               <Route exact path="/checkout/information" component={Information}/>
               <Route exact path="/checkout/payment" component={Payment}/>
               <Route exact path="/checkout/success" component={Success}/>
               <Route  component={NotFound}/>


            </Switch>
         </Layout>
      </HashRouter>
   </AppContext.Provider>
    );
}
 
export default App;