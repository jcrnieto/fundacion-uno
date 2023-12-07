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
      <h1 className='title-human'>Reino Humano</h1>
      <h3 className='text-content'>
           El Reino Humano debería ser el puente con la Consciencia Divina, 
           que proporcionara el espíritu de la constante evolución y del crecimiento, 
           para que la Creación jamás se estancara y los Reinos prosiguieran dando pasos evolutivos y 
           cambiando su escuela espiritual. Que, de esa forma, nuevas esencias fueran surgiendo y 
           renovando permanentemente la Creación de Dios y que, a partir de las experiencias en la Tierra,
           todo el universo se pudiera renovar.
           Dentro del corazón humano se encuentra una llave única que abre las puertas a cada una de las
           dimensiones del Reino de Dios, en la medida en que ese corazón vive mayores y más elevados grados 
           de Amor.
      </h3>
    </div>
   
  </div>
   )
}

export default HumanKingdom;