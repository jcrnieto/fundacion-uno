import logo from '../../image/logo-fundacion-uno.jpeg';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './navBar.css';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';

const NavBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

 return (
    <div>
      <Navbar {...args} >
         <NavLink  href="/"><img src={logo} alt='' className='mx-2' width='100'/></NavLink>
         <NavbarToggler  onClick={toggle} className='navbar-toggler' navbar />
        <Collapse isOpen={isOpen} navbar>
        <Offcanvas  isOpen={isOpen} className='offcanvas offcanvas-top' toggle={toggle} size="lg" placement="end" backdrop="static">
        <OffcanvasHeader toggle={toggle}>
           Menú
        </OffcanvasHeader>
        <OffcanvasBody style={{backgroundColor:'#c2ebc9'}}>
          <Nav className="ml-auto" navbar style={{marginLeft: 'auto'}}>
            <NavItem>
              <NavLink href="/quienesSomos/">Quienes Somos</NavLink>
            </NavItem>
            <NavItem >
            <Link  activeClass="active" to="Contacto" spy={true} smooth={true} offset={50} duration={500} >
               Contacto
            </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Inicio
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Reino Animal</DropdownItem>
                <DropdownItem>Reino Vegetal</DropdownItem>
                <DropdownItem>Minerales</DropdownItem>
                <DropdownItem>Oceano</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav> 
           </OffcanvasBody>
          </Offcanvas> 
        </Collapse>
        </Navbar>
       </div>
  );
}

export default NavBar;