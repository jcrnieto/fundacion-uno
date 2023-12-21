import logo from "../../image/logo-app.png";
import {NavLink} from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GrLocation } from "react-icons/gr"; import { FaYoutubeSquare } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (

    <nav className='container-footer'>
        <div>
           <NavLink to='/'><img src={logo} alt='' className='logo'/></NavLink>
        </div>
        <div className='container-category'>
           <ul className='list-category'>
               <li className='items category'>CATEGORIAS</li>
               <li className='items'><NavLink to='/' className="navlink">Inicio</NavLink></li>
               <li className='items'><NavLink  to='/QuienesSomos' className="navlink">Quienes Somos</NavLink></li>
               <li className='items'><NavLink  to='/' className="navlink">Contacto</NavLink></li>
           </ul>
        </div>
        <div className="container-contact">
        <ul className="ul-contact">
              <li className='item contact'>CONTACTANOS</li>
              <li>
                <i className="icons-contact"><FaWhatsapp/></i>
                <a className='celular' href="https://wa.me/+543512216357" target="_blank" rel="noreferrer">5493512216357</a>
              </li>
              <li >
                <i className="icons-contact"><SiGmail/></i>
                <a className='email' href="https://somosunoservicio@gmail.com" target="_blank" rel="noreferrer">somosunoservicio@gmail.com</a>
              </li>
              <li>
                <i className="icons-contact"><GrLocation/></i>
                <a className='ubication' href="/"> Córdoba </a>
             </li>
           </ul>
        </div>
        <div className="container-siguenos">
        <ul className='ul-siguenos'>
             <li className='item siguenos'>SIGUENOS</li>
             <li>
                <a href="https://www.youtube.com/@unosomos8137" target="_blank" rel="noreferrer">
                  <i className="icons youtube"><FaYoutubeSquare size={30}/></i>
                </a>
                <a href="https://instagram.com/fundacion.uno.somostodos?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer">
                  <i className="icons instagram"><FaInstagram size={30}/></i>
                </a>
            </li>
        </ul>
        </div>
    </nav>
 );
}

export default Footer;