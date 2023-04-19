import img from '../../image/reino-humano.avif';

const HumanKingdom = () => {
   return(
    <div className="conteiner-human" id="humano">
     <div className="image-container">
      <img src={img} alt="reino animal" />
    </div>
    <div className="content-container">
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