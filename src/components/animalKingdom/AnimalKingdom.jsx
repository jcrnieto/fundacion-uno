import img from "../../image/reino-animal.avif";
import "./animalKingdom.css";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const AnimalKingdom = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
 },[])
  return (
    <div className="conteiner-animal" id="animal" data-aos="fade-up">
      <div className="image-animal">
        <img src={img} alt="reino animal" />
      </div>
      <div className="content-container">
        <h1>Reino Animal</h1>
        <h3 className="container-text">
          El Reino Animal nos enseña a amar, a amar la vida, a cuidar del
          prójimo y a ser siempre fiel a aquel que se ama plenamente. Con ellos
          aprendemos a expresar, sin miedo ni vergüenza, el amor que hay en el
          interior. Es la expresión de la fidelidad y del amor, es el guardián
          del espíritu de la cooperación y de la fraternidad evolutiva en cada
          especie.
        </h3>
      </div>
    </div>
  );
};

export default AnimalKingdom;
