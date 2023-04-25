import img from "../../image/mineral.avif";
import "./mineral.css";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Mineral = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
 },[])
  return (
    <div className="conteiner-minerals" id="minerales" data-aos="fade-up">
      <div className="image-minerals">
        <img src={img} alt="reino animal" />
      </div>
      <div className="content-minerals">
        <h1>Reino Mineral</h1>
        <h3  className="container-text">
          Este Reino compuesto por el agua, el suelo, piedras, rocas, minerales
          y gases, es la fuente básica de nutrición y de sustentación de los
          demás Reinos y guarda los registros más antiguos de la humanidad. El
          Reino Mineral expresa los atributos de la purificación, de la
          transmutación y de la sustentación en la Tierra. Estos minerales
          necesitan estar en su hábitat natural para continuar regenerando y
          equilibrando la consciencia planetaria.
        </h3>
      </div>
    </div>
  );
};
//#6C757D

export default Mineral;
