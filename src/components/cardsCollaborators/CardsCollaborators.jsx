import { Container, CardGroup, Row, Col } from 'reactstrap';
import date from '../../date';
import Card from '../cardUnit/CardUnit';


const Cards = () => {
   
    return (
        <Container style={{marginTop: '70px'}}>
            <h1>Colaboradores</h1>
           <CardGroup style={{justifyContent:'center', alignItems: 'center'}}>
              {
                 date?.map((el) => {
                    return(
                       <Row>
                        <Col xs={12} sm={6} lg={3}>
                        <Card 
                         id={el.id}
                         image={el.image}
                         name={el.name}
                         post={el.post}
                        />
                        </Col>
                       </Row>
                    )
                })
              }
           </CardGroup>
        </Container>
    )
}

export default Cards;