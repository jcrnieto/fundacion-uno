import { Container, Row, Col, Navbar } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GrLocation } from "react-icons/gr";

const Forms = () => {
   return(
      <Container style={{marginTop:15, height: '100 vp'}}>
        <Row>
         <Col xs={12} sm={6} lg={3}>
           <h1>Contacto</h1>
           <ul className='col-12 col-md-3 list-unstyled'>
             <li>
             <a className='link-secondary text-decoration-none d-flex mt-3' href="https://github.com/jcrnieto" target="_blank" rel="noreferrer"><i className="mx-2"><FaWhatsapp/></i>5493516468746</a>
             </li>
             <li>
             <a className='link-secondary text-decoration-none d-flex mt-3' href="https://github.com/jcrnieto" target="_blank" rel="noreferrer"><i className="mx-2"><SiGmail/></i> placeress.sintacc@gmail.com</a>
             </li>
             <li>
             <a className='link-secondary text-decoration-none d-flex mt-3' href="https://github.com/jcrnieto" target="_blank" rel="noreferrer"><i className="mx-2"><GrLocation/></i> Córdoba Capital</a>
             </li>
           </ul>
         </Col>
         <Col xs={12} sm={6} lg={9}>
         <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Nombre</Label>
          <Col sm={10}>
            <Input type="email" name="text" id="exampleEmail"  />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="password" name="email" id="examplePassword"  />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>Telefono</Label>
          <Col sm={10}>
            <Input type="number" name="select" id="exampleSelect" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Text Area</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
       
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Enviar</Button>
          </Col>
        </FormGroup>
      </Form>
         </Col>
         </Row>
      </Container>
   )
}

export default Forms;