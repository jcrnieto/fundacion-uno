import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from 'reactstrap';

const CardUnit = ({id, image, name, post}) => {
  console.log(image)
    return (
      <Card style={{ margin: 15 + 'px', width: 16 +'rem', textAlign:'center', justifyContent:'center'}}>
        <CardImg  style={{ width:'100%', maxHeight:'50%', objectFit: 'cover' }} src={image} alt="imagen" />
        <CardBody>
          <CardTitle style={{marginTop:'20px'}} tag="h5">{name}</CardTitle>
          <CardSubtitle style={{marginTop:'20px'}} tag="h6" className="mb-2 text-muted">{post}</CardSubtitle>
        </CardBody>
      </Card>
     
    )
}
//height: 400 , width: 16 +'rem',
export default CardUnit;