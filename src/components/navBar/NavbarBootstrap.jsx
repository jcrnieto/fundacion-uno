import { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
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
            <NavbarToggler onClick={toggleNavbar} className="mr-2 border-0" />
            <Collapse navbar className="collapse " isOpen={!collapsed}>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <RsNavLink href="/quienesSomos">Quienes Somos</ RsNavLink>
                    </NavItem>

                    <Link to="Contacto">
                    <NavItem>
                        <RsNavLink href="/">Contacto</ RsNavLink>
                    </NavItem>
                    </Link>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Inicio
                        </DropdownToggle>
                        <DropdownMenu className="drop-down-menu">

                        
                        <Link to="humano" spy={true} smooth={true} offset={50} duration={500}>
                           <RouterNavLink href="/">
                              <DropdownItem> Reino Humano </DropdownItem>
                           </RouterNavLink>
                        </Link>

                        <Link to="animal" spy={true} smooth={true} offset={50} duration={500}>
                            <RsNavLink href="/">
                              <DropdownItem> Reino Animal </DropdownItem>
                            </RsNavLink>
                        </Link>

                        <Link to="vegetal" spy={true} smooth={true} offset={50} duration={500}>
                            <RsNavLink href="/">
                            <DropdownItem> Reino Vegetal </DropdownItem>
                            </RsNavLink>
                        </Link>

                        <Link to="minerales" spy={true} smooth={true} offset={50} duration={500}>
                            <RsNavLink href="/">
                            <DropdownItem> Minerales </DropdownItem>
                            </RsNavLink>
                        </Link>

                        <Link to="oceano" spy={true} smooth={true} offset={50} duration={500}>
                            <RsNavLink href="/">
                            <DropdownItem> Océanos </DropdownItem>
                            </RsNavLink>
                        </Link>    

                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>

    )
}

export default NavbarBootstrap