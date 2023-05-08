import image from '../../image/actividades.jpeg';
import './activities.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Activities = () => {
    return(
    <div className="contenedor" style={{ height: "750px" }}>
    <div style={{ 
      backgroundImage: `url(${image})`, 
      height: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      }}>
       <h1 className='title'>Actividades de la fundacion</h1> 
      <ul>
        <li className='list'>Reciclado</li>
        <li className='list'>Acciones en escuelas</li>
        <li className='list'>Ayuda a merenderos</li>
        <li className='list'>Acciones en escuelas de futbol</li>
        <li className='list'>Plantacion de árboles frutales</li>
      </ul>
      <Link to='/quienessomos'>
      <Button className='button-activitie' color="secondary">Conocé mas...</Button>
      </Link> 
    </div>
  </div>
    )
}

export default Activities;