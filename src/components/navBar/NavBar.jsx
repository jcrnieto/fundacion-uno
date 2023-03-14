import { Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import Dropdown from '../dropdown/DropDown';
import logo from '../../image/logo-fundacion-uno.jpeg';
//import {Link} from 'react-router-dom';
import {useState} from 'react';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
 
  return (
    <Navbar color="custom-color" light expand="lg">
       <NavLink  href="/"><img src={logo} alt='' className='mx-2' width='100'/></NavLink>
       <NavbarToggler onClick={toggle} />
       <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/QuienesSomos/">Quienes Somos</NavLink>
          </NavItem>
          <NavItem>
          <Link activeClass="active" to="Contacto" spy={true} smooth={true} offset={50} duration={500} >
          Contacto
        </Link>
          </NavItem>
        </Nav>
      <Dropdown/>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;