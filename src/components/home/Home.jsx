import fotoHome from '../../image/imagen1.avif';
import { Container, Row, Col } from 'reactstrap';


const Home = () => {
    return(
       
     <Container>
        <Row>
          <Col xs={12} sm={12} lg={12}>
            <img src={fotoHome} alt="Mi imagen" className="img-fluid" />
          </Col>
       </Row>
    </Container>
    );
}

export default Home;
