import img from '../../image/reino-humano.avif';
import './humanKingdom.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';


const HumanKingdom = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
 },[])
   return(
    <div className="conteiner-human" id="humano" data-aos="fade-up">
     <div className="image-human">
      <img src={img} alt="reino animal" />
    </div>
    <div className="content-human">
      <h1>Reino Humano</h1>
      <h3>
        Los Océanos cumplen una tarea importantísima en el equilibrio interior
        y emocional de la humanidad. En las profundas aguas de los océanos
        toda la vida marina crea la condición para que en el lecho del mar, a
        través de los seres vivos, se establezca un equilibrio que es vital
        para el sostén del planeta y la purificación de las aguas.
      </h3>
    </div>
   
  </div>
   )
}

export default HumanKingdom;