// import { Container, Row, Col, Navbar } from 'reactstrap';
 import logo from "../../image/logo-fundacion.png";
 import {NavLink} from 'react-router-dom';
 import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
 import { GrLocation } from "react-icons/gr";
 import { FaYoutubeSquare } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (

    <nav className='container-footer'>
        <div>
           <NavLink to='/'><img src={logo} alt='' className='logo'/></NavLink>
        </div>
        <div className='container-category'>
           <ul className='list-category'>
               <li className='items category'>CATEGORIAS</li>
               <li className='items'><NavLink to='/' className="navlink">Inicio</NavLink></li>
               <li className='items'><NavLink  to='/QuienesSomos' className="navlink">Quienes Somos</NavLink></li>
               <li className='items'><NavLink  to='/' className="navlink">Contacto</NavLink></li>
           </ul>
        </div>
        <div className="container-contact">
        <ul className="ul-contact">
              <li className='item contact'>CONTACTANOS</li>
              <li>
                <i className=""><FaWhatsapp/></i>
                <a className='celular' href="https://wa.me/+543512216357" target="_blank" rel="noreferrer">5493512216357</a>
              </li>
              <li >
                <i className=""><SiGmail/></i>
                <a className='email' href="https://somosunoservicio@gmail.com" target="_blank" rel="noreferrer">somosunoservicio@gmail.com</a>
              </li>
              <li>
                <i className=""><GrLocation/></i>
                <a className='ubication' href="/"> Córdoba </a>
             </li>
           </ul>
        </div>
        <div className="container-siguenos">
        <ul className='ul-siguenos'>
             <li className='item siguenos'>SIGUENOS</li>
             <li>
                <a href="https://www.youtube.com/@unosomos8137" target="_blank" rel="noreferrer">
                  <i className="icons youtube"><FaYoutubeSquare size={30}/></i>
                </a>
                <a href="https://instagram.com/fundacion.uno.somostodos?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer">
                  <i className="icons instagram"><FaInstagram size={30}/></i>
                </a>
            </li>
        </ul>
        </div>
    </nav>
    
    // <Navbar color="secondary" light style={{ marginTop: 'auto' }} >
    //     <div className='container-fluid'>
    //   <Container>
    //     <Row>
    //       <Col xs={12} sm={12} lg={3}>
    //       <Link to='/'>
    //          <img src={logo} alt='' className='mx-2' width='100'/>
    //       </ Link>
    //       </Col>
    //       <Col xs={12} sm={12} lg={3}>
    //       <ul className='col-12 col-md-3 list-unstyled'>
    //          <li className='font-weight-bold'>CATEGORIAS</li>
    //          <li className='mt-2'><Link to='/' className='text-white text-decoration-none'>Inicio</Link></li>
    //          <li className='mt-2'><Link  to='/QuienesSomos' className='text-white text-decoration-none'>Quienes Somos</Link></li>
    //          <li className='mt-2'><Link  to='/' className='text-white text-decoration-none'>Contacto</Link></li>
    //       </ul>
    //       </Col>
    //       <Col xs={12} sm={12} lg={3}>
    //       <ul className='col-12 col-md-3 list-unstyled'>
    //          <li className='font-weight-bold'>CONTACTANOS</li>
    //          <li className="align-items-center mt-2 d-flex justify-content-center">
    //            <i className="mx-1 align-self-start"><FaWhatsapp/></i>
    //            <a className='text-white text-decoration-none' href="https://wa.me/+543512216357" target="_blank" rel="noreferrer">5493512216357</a>
    //          </li>
    //          <li className="align-items-center mt-2 d-flex justify-content-center">
    //            <i className="mx-1"><SiGmail/></i>
    //            <a className='text-white text-decoration-none' href="https://somosunoservicio@gmail.com" target="_blank" rel="noreferrer">somosunoservicio@gmail.com</a>
    //          </li>
    //          <li className="align-items-center mt-2 d-flex justify-content-center">
    //            <i className="mx-1"><GrLocation/></i>
    //            <a className='text-white text-decoration-none' href="/"> Córdoba </a>
    //         </li>
    //       </ul>
    //       </Col>
    //       <Col xs={12} sm={12} lg={3}>
    //       <ul className='col-12 col-md-3 list-unstyled'>
    //         <li className='font-weight-bold '>SIGUENOS</li>
    //             <li className='d-flex justify-content-center'>
    //                 <a href="https://www.youtube.com/@unosomos8137" target="_blank" rel="noreferrer"><i><FaYoutubeSquare size={30}/></i></a>
    //                 <a href="https://instagram.com/fundacion.uno.somostodos?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer"><i><FaInstagram size={30}/></i></a>
    //              </li>
    //             </ul>
    //       </Col>
    //     </Row>
    //   </Container>
    //   </div>
    // </Navbar>
   
  );
}

export default Footer;