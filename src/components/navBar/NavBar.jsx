// import {  Button,Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
// import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
// import Dropdown from '../dropdown/DropDown';
 import logo from '../../image/logo-fundacion-uno.jpeg';
// //import {Link} from 'react-router-dom';
//import {useState} from 'react';
// import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
 import './navBar.css';




// const NavBar = (args) => {
  
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle1 = () => setIsOpen(!isOpen);
//   //const toggle2 = function noRefCheck(){}
 
//   return (
//     <Navbar {...args} color="custom-color" light expand="lg">
//        <NavLink  href="/"><img src={logo} alt='' className='mx-2' width='100'/></NavLink>
//        <NavbarToggler onClick={toggle1} className='navbar-toggler' onAuxClick={function noRefCheck(){}} />
      
//          <Collapse   isOpen={isOpen} navbar>
        
//          <Offcanvas isOpen={isOpen} toggle={function noRefCheck(){}}>
//          <OffcanvasHeader toggle={function noRefCheck(){}}>Menú</OffcanvasHeader>
//          <OffcanvasBody>
//          <Nav  navbar>
//           <ul className='list-unstyled '>
//             <li className='mx-2'>
//           <NavItem>
//             <NavLink  href="/QuienesSomos/">Quienes Somos</NavLink>
//           </NavItem>
//           </li >
//           <li className='mx-2 mt-2'>
//           <NavItem>
//           <Link  activeClass="active" to="Contacto" spy={true} smooth={true} offset={50} duration={500} >
//           Contacto
//         </Link>
//          </NavItem>
//          </li>
//          <li className='mx-2 ml-auto'>
//        <Dropdown/>
//        </li>
//        </ul>
//       </Nav>
//       </OffcanvasBody>
     
     
//       </Offcanvas>
//        </Collapse>
//     </Navbar>
//   );
// };

// export default NavBar;

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
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

  const [isOpen1, setIsOpen1] = useState(false);
  const toggle1 = () => setIsOpen1(!isOpen1);
  

  // const handleClick = () => {
  //   function noRefCheck(){};
  //   const toggle = () => setIsOpen(!isOpen);
  //   toggle();
  //   noRefCheck();
  // }
  //expand="lg"
  return (
    <div>
      <Navbar {...args} >
         <NavLink  href="/"><img src={logo} alt='' className='mx-2' width='100'/></NavLink>
        
        <NavbarToggler  onClick={toggle} className='navbar-toggler' navbar/>
       
        <Collapse isOpen={isOpen} navbar>
        <Offcanvas isOpen={isOpen} toggle={toggle} size="xs" placement="end" backdrop="static">
        {/* <Offcanvas.Header closeButton> */}
        <OffcanvasHeader toggle={toggle}>
           Menú
        </OffcanvasHeader>
        <OffcanvasBody>
          <Nav className="ml-auto" navbar style={{marginLeft: 'auto'}}>
            <NavItem>
              <NavLink href="/quienesSomos/">Quienes Somos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contacto">Contacto</NavLink>
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