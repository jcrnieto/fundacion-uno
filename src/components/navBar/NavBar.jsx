import './navBar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../image/logo-app.png';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { useNavigate } from "react-router-dom";
//import DropDown from '../dropdown/DropDown';


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

    if (targetId === 'donation'  && window.location.pathname !== '/') {
      navigate('/');
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
          <li className='list-nav quienes-somos'>
            Quienes Somos
          </li>
        </NavLink>
       
          <li className='list-nav contact' onClick={(e) => { handleScroll(e, 'contact');setMenuOpen(!menuOpen)}}>
            Contacto
          </li>
       
        <li 
           className={`list-nav ${openToggler ? "active" : ""}`}
            onMouseEnter={() => setOpenToggler(true)}
            onClick={(e) => { handleScroll(e, 'donation');setMenuOpen(!menuOpen)}}
          > 
           {/* <DropDown 
             openToggler={openToggler} 
             setOpenToggler={setOpenToggler}
             menuOpen={menuOpen}
             setMenuOpen={setMenuOpen}
             /> */}
             Colaboraciones
         </li>
      </ul>

      <div className='menu-icon' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <GrClose /> : <AiOutlineMenu />}
      </div>
    </nav>
  )
}

export default NavBar