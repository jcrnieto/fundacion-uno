import { Container, Row, Col } from 'reactstrap';
import ReactPlayer from 'react-player';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const AboutMe = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
     },[])
    return(
         <Container  data-aos="fade-up"
                    data-aos-duration="3000" 
                    style={{ marginTop: '70px' }}>
            <Row >
                <Col xs={12} sm={6} lg={6}>
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                width='100%'
                height='100%'
                />
                </Col>
                <Col xs={12} sm={6} lg={6}>
                <h1>Sobre nosotros</h1>
                <p>Somos Fundación Uno, una organización sin fines de lucro comprometida en mejorar la vida de las personas más necesitadas de nuestra comunidad.
                 Desde nuestra fundación en 2005, hemos estado trabajando incansablemente para brindar apoyo y recursos a aquellos que enfrentan desafíos económicos, sociales y de salud.

                 Nuestra misión es simple pero poderosa: ayudar a construir una comunidad más fuerte y un mundo mejor para todos. 
                 Creemos que todos merecen la oportunidad de vivir una vida feliz, 
                 saludable y próspera, y estamos comprometidos en hacer todo lo posible para hacer realidad esa visión</p>
                </Col>
            </Row>
         </Container>
    )
}

export default AboutMe;