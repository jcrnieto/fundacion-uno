import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from 'reactstrap';

const CardInfo = ({title,description,image}) => {
    //console.log('title', title)
     return(
        <>
          <Card className='card' style={{width:'350px'}}>
        <CardImg  className='card-img object-fit-cover' src={image} alt="imagen" style={{ height: 250,width: 350}} />
        <CardBody style={{ display: 'flex', flexDirection: 'column',}}>
          <CardTitle style={{marginTop:'20px'}} tag="h5">{title}</CardTitle>
          <CardSubtitle style={{marginTop:'20px',  height:'400px', flex: '1 1 auto', overflow: 'hidden'}} tag="h6" className="h6 mb-2 text-muted flex-grow-1">{description}</CardSubtitle>
        </CardBody>
      </Card>
        </>
     )
}

export default CardInfo;