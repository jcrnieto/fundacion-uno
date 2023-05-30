import img from "../../image/reino vegetal.avif";
import "./vegetalKingdom.css";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const VegetalKingdom = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
 },[])
  return (
    <div className="conteiner-vegetal" id="vegetal" data-aos="fade-up">
       <div className="image-vegetal">
        <img src={img} alt="reino animal" />
      </div>
      <div className="content-vegetal">
        <h1 className="title-vegetal">Reino Vegetal</h1>
        <h3 className="text-vegetal">
          Reino Vegetal es la expresión de la donación, de la elevación y de la
          belleza en la Tierra. Es responsable de crear la atmósfera que hace el
          mundo habitable a través de la fotosíntesis, y de sustentar todos los
          seres vivos a través de los alimentos y de las materias primas que
          produce. Es el más sutil entre todos los Reinos y, al mismo tiempo, el
          más donado a los demás Reinos. Eso se refleja en sus propiedades
          curativas, que actúan en los niveles: cósmico, espiritual, mental y
          material. Los vegetales guardan una ciencia, aún un tanto desconocida
          por nosotros, que podría revertir todas las enfermedades humanas.
        </h3>
      </div>
     
    </div>
  );
};

export default VegetalKingdom;
