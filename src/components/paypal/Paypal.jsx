 import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer} from '@paypal/react-paypal-js';

import "./paypal.css";

// const clientId =  process.env.REACT_APP_PAYPAL_CLIENT_ID;

 const Paypal = () => {

   
     return (
         <div className='paypal-container'>
            
              <PayPalScriptProvider options={{ "clientId":"AYrwcioDUmu1J1Qm2SAtbOkDWg_wyr1kd9oLvz88k_mVCxuf--5IlpoEsmUvB6rXw1yETYiicNgaJdUG"}}>
                <div  className='container-buttom'>
                 <PayPalButtons
                     createOrder={(data, actions) => {
                         return actions.order.create({
                             purchase_units: [
                                 {
                                     amount: {
                                         value: "10.00",
                                     },
                                 },
                             ],
                         });
                     }}
                       
                     onApprove={(data, actions) => {
                         return actions.order.capture().then((details) => {
                             const name = details.payer.name.given_name;
                             alert(`Transaccion completada por ${name}`);
                         });
                     }}
                 />
                 </div>
             </PayPalScriptProvider> 
             
         </div>
     )
 }

 export default Paypal