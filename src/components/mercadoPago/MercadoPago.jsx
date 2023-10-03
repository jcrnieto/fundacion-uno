import { useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import './mercadoPago.css';

const MercadoPago = () => {
    const [amount, setAmount] = useState(0);
    const [preferenceId, setPreferenceId] = useState(null);

    initMercadoPago('TEST-69f546c4-9f5e-46b4-a8d0-26712d5be98a');

    const createPreference = async () => {
        try {
            const response = await axios.post("http://localhost:8080/create_preference", {
                description: "donacion",
                price: amount,
                quantity: 1
            });

            const { id } = response.data;
            return id;
        } catch (error) {
            console.log(error)
        }
    }

    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
        }
    }

    return (
        <div className='container-mercado-pago'>
            <h3 className='text-mercado-pago'>Podes hacer tu donacion con mercado pago</h3>
            <div className="container-amount-donation">
            <label>Monto de la donación:</label>
                <input 
                   required="" 
                   type="number" 
                   className="input-donation" 
                   value={amount} 
                   onChange={(e) => setAmount(e.target.value)}
                   placeholder='coloque un monto'
                />
            </div>
            <button onClick={handleBuy} className='button-redirect'> Ir a mercado pago </button>

            {preferenceId &&
                <Wallet initialization={{ preferenceId }} className='button-mercado-pago' />
            }
        </div>
    )
}

export default MercadoPago