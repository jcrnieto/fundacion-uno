import { useForm } from 'react-hook-form';


const ExampleNavbar = () => {
 
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
      console.log(data)
  }

  return (
     <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email')}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="exampleInputPassword1" {...register('name')}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
     </div>
  );
};

export default ExampleNavbar;

// <Container style={{ marginTop: '70px', marginBottom:'30px' }} id='Contacto' data-aos="flip-left">
      //   <Row>
      //    <Col xs={12} sm={6} lg={3}>
      //      <h1>Contacto</h1>
      //      <ul className='col-12 col-md-3 list-unstyled'>
      //        <li>
      //        <a className='link-secondary text-decoration-none d-flex mt-3' href="https://github.com/jcrnieto" target="_blank" rel="noreferrer"><i className="mx-2"><FaWhatsapp/></i>5493516468746</a>
      //        </li>
      //        <li>
      //        <a className='link-secondary text-decoration-none d-flex mt-3' href="https://github.com/jcrnieto" target="_blank" rel="noreferrer"><i className="mx-2"><SiGmail/></i> jcrnietos@gmail.com</a>
      //        </li>
      //        <li>
      //        <a className='link-secondary text-decoration-none d-flex mt-3' href="https://github.com/jcrnieto" target="_blank" rel="noreferrer"><i className="mx-2"><GrLocation/></i> Córdoba Capital</a>
      //        </li>
      //      </ul>
      //    </Col>
      //    <Col xs={12} sm={6} lg={9}>
      //    <Form onSubmit={handleSubmit(onSubmit)}>
      //   <FormGroup row>
      //     <Label for="name" sm={2}>Nombre</Label>
      //     <Col sm={10}>
      //       <Input type="text" {...register('name')} />
      //     </Col>
      //   </FormGroup>
      //   <FormGroup row>
      //     <Label for="email" sm={2}>Email</Label>
      //     <Col sm={10}>
      //       <Input type="email" {...register('email')} />
      //     </Col>
      //   </FormGroup>
      //   <FormGroup row>
      //     <Label for="phone" sm={2}>Telefono</Label>
      //     <Col sm={10}>
      //       <Input type="number" {...register('phone')} />
      //     </Col>
      //   </FormGroup>
      //   <FormGroup row>
      //     <Label for="exampleText" sm={2}>Mensaje</Label>
      //     <Col sm={10}>
      //       <Input type="textarea" {...register('message')} />
      //     </Col>
      //   </FormGroup>
      //   <FormGroup row>
      //     <Col sm={{ size: 10, offset: 2 }}>
      //       <Button  type="submit">Enviar</Button>
      //     </Col>
      //   </FormGroup>
      // </Form>
      //    </Col>
      //    </Row>
      // </Container>