import img from "../../image/reino-animal.avif";
import "./animalKingdom.css";

const AnimalKingdom = () => {
  return (
    <div className="conteiner" id="animal">
      <div className="image-container">
        <img src={img} alt="reino animal" />
      </div>
      <div className="content-container">
        <h1>Reino Animal</h1>
        <h3>
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
