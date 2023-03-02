import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const MyDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Inicio
      </DropdownToggle>
      <DropdownMenu>
        {/* <DropdownItem header>Header</DropdownItem> */}
        <DropdownItem></DropdownItem>
        <DropdownItem>Reino Animal</DropdownItem>
        <DropdownItem>Reino vegetal</DropdownItem>
        <DropdownItem>Minerales</DropdownItem>
        <DropdownItem>Oceano</DropdownItem>
        <DropdownItem>Contacto</DropdownItem>
        <DropdownItem>Informacion institucional</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default MyDropdown;