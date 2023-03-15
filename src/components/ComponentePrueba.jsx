import React, { useState } from 'react';
import { Button, Navbar, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';

const ExampleNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Mi sitio web</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Button color="primary" onClick={toggle}>Abrir menú</Button>
      </Collapse>
      <Offcanvas isOpen={isOpen} toggle={toggle}>
        <OffcanvasHeader>Menú</OffcanvasHeader>
        <OffcanvasBody>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </OffcanvasBody>
       
      </Offcanvas>
    </Navbar>
  );
};

export default ExampleNavbar;