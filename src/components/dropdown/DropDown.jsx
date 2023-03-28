// import React, { useState } from 'react';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



// const MyDropdown = () => {
 
 
//    const [dropdownOpen, setDropdownOpen] = useState(false);

//    const toggle = () => setDropdownOpen(!dropdownOpen);

//   return (
   
//      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
   
//       <DropdownToggle style={{ border: 'none', boxShadow: 'none', backgroundColor: 'transparent', color:'black' }}>
//         Inicio
//       </DropdownToggle>
     
//       <DropdownMenu>
       
//         <DropdownItem></DropdownItem>
//         <DropdownItem>Reino Animal</DropdownItem>
//         <DropdownItem>Reino vegetal</DropdownItem>
//         <DropdownItem>Minerales</DropdownItem>
//         <DropdownItem>Oceano</DropdownItem>
//         <DropdownItem>Informacion institucional</DropdownItem>
//       </DropdownMenu>
      
//      </Dropdown>
   
//   );
// };

// export default MyDropdown;

// import React, { useState } from 'react';
// import Select from 'react-select';
// import './dropDown.css';

// const options = [
//   { value: 'Reino Animal', label: 'Reino Animal' },
//   { value: 'Reino Vegetal', label: 'Reino Vegetal' },
//   { value: 'Minerales', label: 'Minerales' },
//   { value: 'Oceanos', label: 'Oceanos' },
// ];

// const MyDropdown = () => {

//   const [selectedOption, setSelectedOption] = useState(null);

//     return(
//         <div className='dropdown'>
//           <p>inicio</p>
//         </div>
//     )
// }


// export default MyDropdown;

import { useState } from 'react';
import './dropDown.css';
import {FaAngleDown} from 'react-icons/fa';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const DropDown = ({openToggler, setOpenToggler, isMobile, setIsmobile}) => {

    //const [isActive, setIsActive] = useState(false);
   
   // {isActive ? 'dropdown-menu clicked' : 'dropdown-menu' }
    return(
        <div className='dropdowun'>
            <div className= 'dropdowun-inicio' onClick={(e)=>setOpenToggler(!openToggler)}>Inicio <i><FaAngleDown/></i></div>
            {openToggler && (
                <div className='dropdown-content' >
                    <Link  activeClass="active" to="animal" spy={true} smooth={true} offset={50} duration={500} >
                    <div className='dropdown-item'>Reino Animal</div>
                    </Link>
                    <Link  activeClass="active" to="vegetal" spy={true} smooth={true} offset={50} duration={500} >
                    <div className='dropdown-item'>Reino Vegetal</div>
                    </Link>
                    <Link  activeClass="active" to="minerales" spy={true} smooth={true} offset={50} duration={500} >
                    <div className='dropdown-item'>Minerales</div>
                    </Link>
                    <Link  activeClass="active" to="oceano" spy={true} smooth={true} offset={50} duration={500} >
                    <div className='dropdown-item'>Oceanos</div>
                    </Link>
               </div>
            )}
            
        </div>
    )
}

export default DropDown; 