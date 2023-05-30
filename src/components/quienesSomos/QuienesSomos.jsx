import image from "../../image/imgQuienesSomos1.avif";
import KnowMore from "../knowMore/KnowMore";
import "./quienesSomos.css";

const QuienesSomos = () => {
  return (
    <>
    <div className="contenedor" style={{ height: "750px" }}>
      <div
        style={{
          backgroundImage: `url(${image})`,
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <h1 style={{ color: "#141313", paddingTop: "50px" }}>
          contenido quienes somos
        </h1>
        <h4 style={{ color: "#eee", paddingTop: "50px" }}>
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
      <KnowMore/>
    </div>
    </>
  );
};

export default QuienesSomos;
