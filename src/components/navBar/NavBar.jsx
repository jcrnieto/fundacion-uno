import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import Dropdown from '../dropdown/DropDown';
import logo from '../../image/logo-fundacion-uno.jpeg';
import {Link} from 'react-router-dom';



const NavBar = () => {
 
  return (
    <Navbar color="custom-color" light expand="lg">
       <Link to='/'><img src={logo} alt='' className='mx-2' width='100'/></Link>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/QuienesSomos/">Quienes Somos</NavLink>
          </NavItem>
        </Nav>
      <Dropdown/>
    </Navbar>
  );
};

export default NavBar;