import { Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import Dropdown from '../dropdown/DropDown';
import logo from '../../image/logo-fundacion-uno.jpeg';
//import {Link} from 'react-router-dom';
import {useState} from 'react';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './navBar.css';



const NavBar = () => {
  const [collapse, setCollapse] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
 
  return (
    <Navbar color="custom-color" light expand="lg">
       <NavLink  href="/"><img src={logo} alt='' className='mx-2' width='100'/></NavLink>
       <NavbarToggler className='navbar-toggler' onClick={toggle} />
       {
        collapse ?(
          <Collapse onClick={setCollapse} isOpen={isOpen} navbar>
        
          <Nav  navbar>
            <ul className='list-unstyled d-flex '>
              <li className='mx-2'>
            <NavItem>
              <NavLink  href="/QuienesSomos/">Quienes Somos</NavLink>
            </NavItem>
            </li >
            <li className='mx-2 mt-2'>
            <NavItem>
            <Link  activeClass="active" to="Contacto" spy={true} smooth={true} offset={50} duration={500} >
            Contacto
          </Link>
           </NavItem>
           </li>
           <li className='mx-2 ml-auto'>
         <Dropdown/>
         </li>
         </ul>
        </Nav>
        </Collapse>
        ):(
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        
        )
       }
      
    </Navbar>
  );
};

export default NavBar;