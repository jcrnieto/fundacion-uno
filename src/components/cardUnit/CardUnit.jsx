import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from 'reactstrap';
import './cardUnit.css';

const CardUnit = ({image, name, post}) => {
  
    return (
      <Card className='card' >
        <CardImg  className='card-img img-fluid' src={image} alt="imagen" />
        <CardBody>
          <CardTitle style={{marginTop:'20px'}} tag="h5">{name}</CardTitle>
          <CardSubtitle style={{marginTop:'20px'}} tag="h6" className="mb-2 text-muted">{post}</CardSubtitle>
        </CardBody>
      </Card>
     
    )
}
// style={{ width:'100%', maxHeight:'50%',minHeight:'50%' ,objectFit: 'cover' }}
export default CardUnit;