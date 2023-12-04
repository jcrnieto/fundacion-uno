import MercadoPago from '../mercadoPago/MercadoPago';
//import Paypal from '../paypal/Paypal';
import './donation.css';
import { BsWhatsapp } from 'react-icons/bs';
import {NavLink} from 'react-router-dom';

const Donation = () => {
  return (
    <div className='donation-container' id="donation">
      <h2 className='title-donation'>Colaborá con la Fundación</h2>
      {/* <Paypal/> */}
      <MercadoPago />
      <div className='container-button-whatsapp'>
        <a href="https://wa.me/+5493512216357" target="_blank" rel="noreferrer" className='link-contact'>
          <button className='button-whatsapp'>
            <i className='icon-whatsapp'><BsWhatsapp /></i>
            <p className='text-whatsapp'>Whatsapp</p>
          </button>
        </a>
      </div>
      <div className='container-trees'>
        <h2 className='text-trees'>Tambien podes colaborar con la fundación con la compra de arbolitos!!!</h2>
        <div className='container-info-trees'>
          <h3 className='info-trees'>Para mas informacion</h3>
          <NavLink to='/arbolitos'>
          <button className='button-trees'>Hacé click acá</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Donation