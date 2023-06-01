import logo from '../../image/logo-fundacion.png';
import { NavLink } from 'react-router-dom';
//import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './navBar.css';
import { useState } from 'react';
import Dropdown  from '../dropdown/DropDown';
//import {Divide, Divide as Hamburger} from 'hamburger-react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { VscClose } from 'react-icons/vsc';

const Navbar = () => {
   const [isMobile, setIsMobile] = useState(false);
   
  
 return(
    <nav className='navbar'>
      <div>
        <NavLink to='/'><img src={logo} alt='' className='log'/></NavLink>
      </div>
       <ul className={ isMobile? "nav-links-mobile" : "nav-links"} >
          <NavLink to='/quienesSomos' className='link-quienes-somos'>
          <li className='quienes-somos'  onClick={()=> setIsMobile(!isMobile)}>Quienes Somos</li>
          </NavLink>
         
          <NavLink style={{ textDecoration: 'none'}} to="/" onClick={()=> setIsMobile(!isMobile)} spy={true} smooth={true} offset={50} duration={500} >
          <li className='contacto'>Contacto</li>
          </NavLink>
         
         <li className='inicio'><Dropdown isMobile={isMobile} setIsMobile={setIsMobile}/></li>
        </ul>
        <button
         className='mobile-menu-icon'
         onClick={()=> setIsMobile(!isMobile)}
         >
            {isMobile ? (
            //  <Hamburger/>
            <VscClose/>
             ):(
              // <Divide/>
              
              <HiOutlineMenuAlt1/>
             )}
        </button>
      </nav>

      
  )
}

export default Navbar;
