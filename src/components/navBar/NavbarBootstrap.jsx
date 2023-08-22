import { useState } from 'react';
import { NavLink as RouterNavLink, Link as RouterLink } from 'react-router-dom';
import logo from '../../image/logo-fundacion.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink as RsNavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import "./navbarBootstrap.css";
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';




const NavbarBootstrap = () => {

    const [collapsed, setcollapsed] = useState(true);

    const toggleNavbar = () => {
        setcollapsed(!collapsed)
    }

    return (
        <Navbar color="secondary" light expand={"lg"}>
            <RsNavLink  href="/">
            <NavbarBrand ><img src={logo} alt='' className='mx-2' width='100' /></NavbarBrand>
            </RsNavLink>
            <NavbarToggler onClick={toggleNavbar} className="custom-toggler border-0" />
            <Collapse navbar className="collapse " isOpen={!collapsed}>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <RouterNavLink to="/quienesSomos" className="nav-link">Quienes Somos</RouterNavLink>
                    </NavItem>

                    <Link to="Contacto">
                    <NavItem>
                        <RouterNavLink to="/" className="nav-link">Contacto</RouterNavLink>
                    </NavItem>
                    </Link>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Inicio
                        </DropdownToggle>
                        <DropdownMenu  className="drop-down-menu text-white bg-primary">

                        
                        <Link to="humano" spy={true} smooth={true} offset={50} duration={500}>
                           <RouterNavLink to="/">
                              <DropdownItem className='text-decoration-none'>Reino Humano</DropdownItem>
                           </RouterNavLink>
                        </Link>

                        <Link to="animal" spy={true} smooth={true} offset={50} duration={500}>
                            <RouterNavLink to="/">
                              <DropdownItem className='text-decoration-none'>Reino Animal</DropdownItem>
                            </RouterNavLink>
                        </Link>

                        <Link to="vegetal" spy={true} smooth={true} offset={50} duration={500}>
                            <RouterNavLink to="/">
                            <DropdownItem className='text-decoration-none'>Reino Vegetal</DropdownItem>
                            </RouterNavLink>
                        </Link>

                        <Link to="minerales" spy={true} smooth={true} offset={50} duration={500}>
                            <RouterNavLink to="/">
                            <DropdownItem className='text-decoration-none'>Minerales</DropdownItem>
                            </RouterNavLink>
                        </Link>

                        <Link to="oceano" spy={true} smooth={true} offset={50} duration={500}>
                            <RouterNavLink to="/">
                            <DropdownItem className='text-decoration-none'>Océanos</DropdownItem>
                            </RouterNavLink>
                        </Link>    

                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>

    )
}

export default NavbarBootstrap