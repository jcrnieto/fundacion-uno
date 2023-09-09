// import logo from '../../image/logo-fundacion.png';
//import { NavLink } from 'react-router-dom';
// import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
// import './navBar.css';
// import { useState } from 'react';
// import Dropdown  from '../dropdown/DropDown';
// import { HiOutlineMenuAlt1 } from 'react-icons/hi';
// import { VscClose } from 'react-icons/vsc';

//  const Navbar = () => {
//     const [isMobile, setIsMobile] = useState(true);


//   return(
//     <nav className='navbar'>
//       <div>
//         <NavLink to='/'><img src={logo} alt='' className='log'/></NavLink>
//       </div>
//        <ul className={ isMobile? "nav-links-mobile" : "nav-links"} >
//           <NavLink to='/quienesSomos' className='link-quienes-somos'>
//           <li className='quienes-somos'  onClick={()=> setIsMobile(!isMobile)}>Quienes Somos</li>
//           </NavLink>

//           <Link to="Contacto">
//           <NavLink style={{ textDecoration: 'none'}} to="/" onClick={()=> setIsMobile(!isMobile)} spy={true} smooth={true} offset={50} duration={500} >
//           <li className='contacto'>Contacto</li>
//           </NavLink>
//           </Link>

//          <li className='inicio'><Dropdown isMobile={isMobile} setIsMobile={setIsMobile}/></li>
//         </ul>
//         <button
//          className='mobile-menu-icon'
//          onClick={()=> setIsMobile(!isMobile)}
//          >
//             {isMobile ? (
//               <VscClose/>
//              ):(
//                <HiOutlineMenuAlt1/>
//              )}
//         </button>
//       </nav>

//   )
// }

// export default Navbar;
import './navBar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../image/logo-fundacion.png';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { useNavigate } from "react-router-dom";
import DropDown from '../dropdown/DropDown';


const NavBar = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openToggler, setOpenToggler] = useState(false);

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
      setMenuOpen(false);
    }

    if (targetId === 'contact'  && window.location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <nav className="container-navbar">
      <div>
        <NavLink to='/'><img src={logo} alt='' className='log' /></NavLink>
      </div>

      <ul className={`menu-items ${menuOpen ? "open" : ""}`}>
        <NavLink 
           to="/QuienesSomos" style={{ textDecoration: 'none'}}
           onClick={(e) => {setMenuOpen(!menuOpen)}}
           >
          <li className='list quienes-somos'>
            Quienes Somos
          </li>
        </NavLink>
       
          <li className='list contact' onClick={(e) => { handleScroll(e, 'contact');setMenuOpen(!menuOpen)}}>
            Contacto
          </li>
       
        <li 
           className={`list ${openToggler ? "active" : ""}`}
            onMouseEnter={() => setOpenToggler(true)}
          > 
           <DropDown 
             openToggler={openToggler} 
             setOpenToggler={setOpenToggler}
             menuOpen={menuOpen}
             setMenuOpen={setMenuOpen}
             />
         </li>
      </ul>

      <div className='menu-icon' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <GrClose /> : <AiOutlineMenu />}
      </div>
    </nav>
  )
}

export default NavBar