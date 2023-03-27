 import logo from '../../image/logo-fundacion-uno.jpeg';
 import { NavLink } from 'react-router-dom';
 import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
 import './navBar.css';
 //import {FaAngleDown} from 'react-icons/fa'
// import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from 'reactstrap';
// import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';

// const NavBar = (args) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);

//  return (
//     <div>
//       <Navbar {...args} >
//          <NavLink  href="/"><img src={logo} alt='' className='mx-2' width='100'/></NavLink>
//          <NavbarToggler  onClick={toggle} className='navbar-toggler' navbar />
//         <Collapse isOpen={isOpen} navbar>
//         <Offcanvas  isOpen={isOpen} className='offcanvas' toggle={toggle} size="lg" placement="end" backdrop="static">
//         <OffcanvasHeader toggle={toggle}>
//            Menú
//         </OffcanvasHeader>
//         <OffcanvasBody style={{backgroundColor:'#c2ebc9'}}>
//           <Nav className="ml-auto" navbar style={{marginLeft: 'auto'}}>
//             <NavItem>
//               <NavLink href="/quienesSomos/">Quienes Somos</NavLink>
//             </NavItem>
//             <NavItem >
//             <Link  activeClass="active" to="Contacto" spy={true} smooth={true} offset={50} duration={500} >
//                Contacto
//             </Link>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Inicio
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>Reino Animal</DropdownItem>
//                 <DropdownItem>Reino Vegetal</DropdownItem>
//                 <DropdownItem>Minerales</DropdownItem>
//                 <DropdownItem>Oceano</DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav> 
//            </OffcanvasBody>
//           </Offcanvas> 
//         </Collapse>
//         </Navbar>
//        </div>
//   );
// }

// export default NavBar;



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
         onClick={()=> setIsmobile(false)}>
          <NavLink to='/quienesSomos' className='link-quienes-somos'>
          <li className='  quienes-somos'>Quienes Somos</li>
          </NavLink>
          <Link  activeClass="active" to="Contacto" spy={true} smooth={true} offset={50} duration={500} >
          <li className=' contacto'>Contacto</li>
          </Link>
          <li className='inicio'><Dropdown/></li>
          {/* <i><FaAngleDown/></i> */}
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
