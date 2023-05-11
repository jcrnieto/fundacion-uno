 import logo from '../../image/logo-fundacion.png';
 import { NavLink } from 'react-router-dom';
 import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
 import './navBar.css';


import { useState } from 'react';
import Dropdown  from '../dropdown/DropDown';

const Navbar = () => {
   const [isMobile, setIsmobile] = useState(false);
   const [openToggler, setOpenToggler ] = useState(false);
  
 return(
    <nav className='navbar'>
      <div>
        <NavLink to='/'><img src={logo} alt='' className='log'/></NavLink>
      </div>
      
        <ul className={ isMobile? "nav-links-mobile" : "nav-links"}
         >
          <NavLink to='/quienesSomos' className='link-quienes-somos'>
          <li className='  quienes-somos'>Quienes Somos</li>
          </NavLink>
          <Link  activeClass="active" to="Contacto" spy={true} smooth={true} offset={50} duration={500} >
          <li className=' contacto'>Contacto</li>
          </Link>
         <li className='inicio'><Dropdown openToggler={openToggler} setOpenToggler={setOpenToggler}/></li>
        </ul>
        <button
         className='mobile-menu-icon'
         onClick={()=> setIsmobile(!isMobile)}
         >
            {isMobile ? (
              <i className='fas fa-times'></i>
            ):(
              <i className='fas fa-bars'></i>
            )}
        </button>
      </nav>

      
  )
}

export default Navbar;
