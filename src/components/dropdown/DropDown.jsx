import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';



const MyDropdown = () => {
 
   const [dropdownOpen, setDropdownOpen] = useState(false);

   const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
   
     <Dropdown isOpen={dropdownOpen} toggle={toggle}>
   
      <DropdownToggle >
        Inicio
      </DropdownToggle>
     
      <DropdownMenu>
       
        <DropdownItem></DropdownItem>
        <DropdownItem>Reino Animal</DropdownItem>
        <DropdownItem>Reino vegetal</DropdownItem>
        <DropdownItem>Minerales</DropdownItem>
        <DropdownItem>Oceano</DropdownItem>
        <DropdownItem>
        </DropdownItem>
        <DropdownItem>Informacion institucional</DropdownItem>
      </DropdownMenu>
      
     </Dropdown>
   
  );
};

export default MyDropdown;