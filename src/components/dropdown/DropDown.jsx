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
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem>Reset</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default MyDropdown;