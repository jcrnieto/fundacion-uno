import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import Dropdown from '../dropdown/DropDown';
import logo from '../../image/logo-fundacion-uno.jpeg';
import {Link} from 'react-router-dom';
//import '../../../public/custom-variables.scss';


const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="custom-color" light expand="lg">
      {/* <NavbarBrand href="/"> */}
        <Link to='/'><img src={logo} className='mx-2' width='100'/></Link>
      {/* </NavbarBrand> */}
      {/* <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar> */}
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Quienes Somos</NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem> */}
        </Nav>
      {/* </Collapse> */}
      <Dropdown/>
    </Navbar>
  );
};

export default NavBar;