import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from 'reactstrap';

const CardUnit = ({id, image, name, post}) => {
  console.log(image)
    return (
      <Card style={{height: 400 , width: 16 +'rem', margin: 15 + 'px'}}>
        <CardImg top width="100%" src={image} alt="imagen" />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{post}</CardSubtitle>
        </CardBody>
      </Card>
     
    )
}

export default CardUnit;