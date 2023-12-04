import image from '../../image/actividades.jpeg';
import './activities.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Activities = () => {

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
   }
  }
    return(
    <div className="container-activitie">
    <div style={{ 
      backgroundImage: `url(${image})`, 
      height: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      }}>
       <h1 className='title'>Actividades de la fundacion</h1> 
      <ul className='group-list'>
        <li className='list-activitie'>Reciclado</li>
        <li className='list-activitie'>Acciones en escuelas</li>
        <li className='list-activitie'>Ayuda a merenderos</li>
        <li className='list-activitie'>Acciones en escuelas de futbol</li>
        <li className='list-activitie'>Plantacion de árboles frutales</li>
      </ul>
      <Link to='/quienessomos'>
      <Button className='button-activitie' color="secondary" onClick={(e) => { handleScroll(e, 'activitie')}}>Conocé mas...</Button>
      </Link> 
    </div>
  </div>
    )
}

export default Activities;