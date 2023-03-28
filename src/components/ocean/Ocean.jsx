import img from "../../image/oceano.avif";
import "./ocean.css";

const Ocean = () => {
  return (
    <div className="conteiner" id="oceano">
      <div className="content-container">
        <h1>Océanos</h1>
        <h3>
          Los Océanos cumplen una tarea importantísima en el equilibrio interior
          y emocional de la humanidad. En las profundas aguas de los océanos
          toda la vida marina crea la condición para que en el lecho del mar, a
          través de los seres vivos, se establezca un equilibrio que es vital
          para el sostén del planeta y la purificación de las aguas.
        </h3>
      </div>
      <div className="image-container">
        <img src={img} alt="reino animal" />
      </div>
    </div>
  );
};

export default Ocean;
