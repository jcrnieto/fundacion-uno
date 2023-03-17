import { Container } from 'reactstrap';
import image from '../../image/imgQuienesSomos1.avif';

const QuienesSomos = () => {

  const styles = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    zIndex: 1,
  };

    return(
       <Container style={ styles } className='container-fluid'>
         <h1 style={{color: '#eee'}}>contenido quienes somos</h1>
         <p style={{color: '#eee'}}>Corazones que por gracia divina despertaron de la ilusión y comprendieron por medio del servicio
          la unidad en Dios que todos somos. A través de la Fundación, invitamos a participar y reparar el desequilibrio
          cayado por la humanidad que somos, sirviendo al reino animal, vegetal, mineral y acompañando a merenderos, 
          escuelas, clubes con charlas de concientización.
          Súmate a Uno Somos Todos. Comunicate para ver en que área preferís o sentis accionar, Causado por la humanidad que somos.
         </p>
       </Container>
    )
}

export default QuienesSomos;