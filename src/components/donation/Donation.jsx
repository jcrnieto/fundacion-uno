import MercadoPago from '../mercadoPago/MercadoPago';
import Paypal from '../paypal/Paypal';
import './donation.css';
import { BsWhatsapp } from 'react-icons/bs';

const Donation = () => {
  return (
    <div className='donation-container'>
    <h2 className='title-donation'>Colaborá con la Fundación</h2>
       {/* <Paypal/> */}
       <MercadoPago/>
       <div className='container-button-whatsapp'>
       <a href="https://wa.me/+543516468746" target="_blank" rel="noreferrer" className='link-contact'>
          <button className='button-whatsapp'>
            
              <i className='icon-whatsapp'><BsWhatsapp/></i>
              <p className='text-whatsapp'>Whatsapp</p>
            
          </button>
          </a>
       </div>
    </div>
  )
}

export default Donation