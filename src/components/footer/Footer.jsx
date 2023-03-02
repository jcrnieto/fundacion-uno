import { Container, Row, Col, Navbar } from 'reactstrap';
import logo from "../../image/logo-fundacion-uno.jpeg";
import {Link} from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GrLocation } from "react-icons/gr"

function Footer() {
  return (
    
    <Navbar color="secondary" light  >
        <div className='container-fluid'>
      <Container>
        <Row>
          <Col>
          <Link to='/' className="col-12 col-md-3 d-flex alings-items-center justify-content-center">
             <img src={logo} className='mx-2' width='100'/>
          </ Link>
          </Col>
          <Col>
          <ul className='col-12 col-md-3 list-unstyled'>
             <li className='font-weight-bold '>CATEGORIAS</li>
             <li><Link to='/' className='text-white text-decoration-none'>Inicio</Link></li>
             <li><Link  to='/' className='text-white text-decoration-none'>Productos</Link></li>
             <li><Link  to='/QuienesSomos' className='text-white text-decoration-none'>Quienes Somos</Link></li>
             <li><Link  to='/Contacto' className='text-white text-decoration-none'>Contacto</Link></li>
          </ul>
          </Col>
          <Col>
          <ul className='col-12 col-md-3 list-unstyled'>
             <li className='font-weight-bold'>CONTACTANOS</li>
             <li>
               <a className='text-white text-decoration-none' href="https://wa.me/+543516468746" target="_blank" rel="noreferrer"><i className="mx-1"><FaWhatsapp/></i>5493516468746</a>
             </li>
             <li>
              <a className='text-white text-decoration-none' href="" target="_blank" rel="noreferrer"><i className="mx-1"><SiGmail/></i> placeress.sintacc@gmail.com</a>
             </li>
             <li>
              <a className='text-white text-decoration-none' href="" target="_blank" rel="noreferrer"><i className="mx-1"><GrLocation/></i> Córdoba Capital</a>
            </li>
          </ul>
          </Col>
          <Col>
          <ul className='col-12 col-md-3 list-unstyled'>
            <li className='font-weight-bold '>SIGUENOS</li>
                <li className='d-flex justify-content-center'>
                    <a href="https://www.facebook.com/PlaceresSinTaccCba?mibextid=ZbWKwL" target="_blank" rel="noreferrer"><i><FaFacebookSquare size={30}/></i></a>
                    <a href="https://instagram.com/placeres_sin_tacc_ok?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><i><FaInstagram size={30}/></i></a>
                 </li>
                </ul>
          </Col>
        </Row>
      </Container>
      </div>
    </Navbar>
    
  );
}

export default Footer;