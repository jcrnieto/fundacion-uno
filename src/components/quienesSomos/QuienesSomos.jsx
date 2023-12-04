import image from "../../image/imgQuienesSomos1.avif";
import "./quienesSomos.css";
import AnimalKingdom from '../animalKingdom/AnimalKingdom';
import VegetalKingdom from '../vegetalKingdom/VegetalKingdom';
import Mineral from '../minerals/Minerals';
import Ocean from '../ocean/Ocean';
import HumanKingdom from '../humanKingdom/HumanKingdom';

const QuienesSomos = () => {
  return (
    <>
    <div className="contenedor" style={{ height: "750px", textAlign:'center' }}>
      <div
        style={{
          backgroundImage: `url(${image})`,
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <h1 style={{ color: "#eee", paddingTop: "50px", height:'0%' }}>
           Quienes Somos
        </h1>
        <h4 style={{ color: "#eee", paddingTop: "50px",  lineHeight: '2' }}>
          Corazones que por gracia divina despertaron de la ilusión y
          comprendieron por medio del servicio la unidad en Dios que todos
          somos. A través de la Fundación, invitamos a participar y reparar el
          desequilibrio cayado por la humanidad que somos, sirviendo al reino
          animal, vegetal, mineral y acompañando a merenderos, escuelas, clubes
          con charlas de concientización. Súmate a Uno Somos Todos. Comunicate
          para ver en que área preferís o sentis accionar, Causado por la
          humanidad que somos.
        </h4>
      </div>
    </div>
    <div>
      <HumanKingdom/> 
       <AnimalKingdom />
       <VegetalKingdom/>
       <Mineral/>
       <Ocean/>
    </div>
    </>
  );
};

export default QuienesSomos;
