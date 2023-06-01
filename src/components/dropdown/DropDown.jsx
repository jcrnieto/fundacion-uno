import './dropDown.css';
import {FaAngleDown} from 'react-icons/fa';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { useState } from 'react';

const DropDown = ({isMobile, setIsMobile}) => {
   // console.log('ismobile', isMobile)
    const [openToggler, setOpenToggler ] = useState(false);

   const handleClick = () => {
    setOpenToggler(!openToggler);
    setIsMobile(!isMobile);
   }

    // const [isClicked, setIsClicked] = useState(false);
    
    // const handleTooglerOpen = () => {
    //     setOpenToggler(true);
    //   };
    
    //   const handleToggleClose = () => {
    //     setOpenToggler(false);
    //   };

    //   const handleToggleClick = () => {
    //     setIsClicked(!isClicked);
    //     setOpenToggler(!openToggler);
    //   };
   
   return(
        <div className='dropdowun'
        // onMouseEnter={handleTooglerOpen}
        // onMouseLeave={handleToggleClose}
        >
           <div className= 'dropdowun-inicio' onClick={(e)=>setOpenToggler(!openToggler)}>Inicio <i><FaAngleDown/></i></div> 
           
            {openToggler && (
                <ul className='dropdown-content' >
                     <Link  activeClass="active"  onClick={()=>{handleClick()}} to="humano" spy={true} smooth={true} offset={50} duration={500} >
                    <li className='dropdown-item'>Reino Humano</li>
                    </Link>
                    <Link  activeClass="active" onClick={()=>{handleClick()}} to="animal" spy={true} smooth={true} offset={50} duration={500} >
                    <li className='dropdown-item'>Reino Animal</li>
                    </Link>
                    <Link  activeClass="active" onClick={()=>{handleClick()}} to="vegetal" spy={true} smooth={true} offset={50} duration={500} >
                    <li className='dropdown-item'>Reino Vegetal</li>
                    </Link>
                    <Link  activeClass="active" onClick={()=>{handleClick()}} to="minerales" spy={true} smooth={true} offset={50} duration={500} >
                    <li className='dropdown-item'>Minerales</li>
                    </Link>
                    <Link  activeClass="active" onClick={()=>{handleClick()}} to="oceano" spy={true} smooth={true} offset={50} duration={500} >
                    <li className='dropdown-item'>Oceanos</li>
                    </Link>
               </ul>
             )} 
            
        </div>
    )
}

export default DropDown; 