import fotoHome from '../../image/imagen1.avif';
//import './home.css';
import { Container, Row, Col } from 'reactstrap';


const Home = () => {
    return(
       
     <Container>
        <Row>
          <Col>
            <img src={fotoHome} alt="Mi imagen" className="img-fluid" />
          </Col>
       </Row>
    </Container>
    );
}

export default Home;
