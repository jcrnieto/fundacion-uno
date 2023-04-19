import { Container, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container
      data-aos="fade-up"
      data-aos-duration="3000"
      className="h-100"
      style={{ marginTop: "70px", backgroundColor: '#808080' }}
    >
      <Row>
        <Col xs={12} sm={6} lg={6}>
          <ReactPlayer
            url="https://youtu.be/r0FtsC8Wvfc"
            width="100%"
            height="100%"
          />
        </Col>
        <Col xs={12} sm={6} lg={6}>
          <h1>Sobre nosotros</h1>
          <p>
            Somos Fundación Uno, una organización sin fines de lucro
            comprometida en mejorar la vida de las personas más necesitadas de
            nuestra comunidad. Accionamos desde 2017 aunque como fundación desde
            2022 con el fin de llegar a más corazones. Nuestra misión es simple,
            darnos cuenta que podemos equilibrar, transformar esta realidad que
            hoy estamos viviendo tanto en lo particular como en lo colectivo. 
            Hemos estado trabajando incansablemente para brindar apoyo y
            recursos a aquellos que enfrentan desafíos económicos, sociales y de
            salud. Nuestra misión es simple pero poderosa: ayudar a construir
            una comunidad más fuerte y un mundo mejor para todos. Creemos que
            todos merecen la oportunidad de vivir una vida feliz, saludable y
            próspera, y estamos comprometidos en hacer todo lo posible para
            hacer realidad esa visión
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
