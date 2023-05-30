import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from 'reactstrap';

const CardInfo = ({title,description,image}) => {
    //console.log('title', title)
     return(
        <>
          <Card className='card' >
        <CardImg  className='card-img object-fit-cover' src={image} alt="imagen" style={{ height: 250,width: 250}} />
        <CardBody>
          <CardTitle style={{marginTop:'20px'}} tag="h5">{title}</CardTitle>
          <CardSubtitle style={{marginTop:'20px'}} tag="h6" className="mb-2 text-muted">{description}</CardSubtitle>
        </CardBody>
      </Card>
        </>
     )
}

export default CardInfo;