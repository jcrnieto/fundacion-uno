import fotoCard1 from "./image/foto-martin.jpg";
import fotoCard2 from "./image/foto-cristian.JPG";
import fotoCard3 from "./image/foto-sabina.JPG";

import imgReciclado from "./image/img-reciclados.jpg";
import imgPlantacion from "./image/img-plantacion-arboles.jpeg";
import imgMerenderos from "./image/img-merendero.jpg";
import imgEscuelas from "./image/img-charlas-colegios.jpg";
import imgEscuelaFutbol from "./image/escuelitas-futbol.jpg";

const date = [
  {
    id: 1,
    image: fotoCard1,
    name: "Carlos Martin Ferreyra",
    post: "Secretario",
  },
  {
    id: 2,
    image: fotoCard2,
    name: "Cristian Sebastian Viale",
    post: "Fundador/Secretario",
  },
  {
    id: 3,
    image: fotoCard3,
    name: "Sabina Belén Olmedo",
    post: "Presidente",
  },
];

const infoCard = [
  {
    id: 1,
    image: imgMerenderos,
    title: "Comederos y merenderos",
    description:"Acompañamos a familias que gestionan comedores y merenderos para compartir alimentos con la comunidad. Actualmente, brindamos apoyo en tres ubicaciones en Barrio Zepa, Córdoba, actuando como intermediarios entre la sociedad y los comedores, invitando a donaciones de alimentos, ropa, calzado y útiles escolares. Creemos en la caridad y la unidad como valores fundamentales.",
  },
  {
    id: 2,
    image: imgEscuelaFutbol,
    title: "Escuelitas de futbol",
    description:"Realizamos visitas a escuelitas de fútbol con el objetivo de concientizar. Los encuentros están bajo el lema: “JUGUEMOS EL ENTERO”. Y las charlas están enfocadas sobre todas las acciones que podemos hacer para favorecer al Planeta, luego se plasman acciones como: plantar arbolitos, colocar contenedores para reciclar y fomentar la separación de plásticos, vidrios, papel, cartón en el club para que luego puedan también realizarlo en sus hogares. El sentido de las visitas sea cuál sea la institución es hacer consciente que somos UNO con el PLANETA." 
  },
  {
    id: 3,
    image: imgReciclado,
    title: "Reciclado",
    description:"La Fundación está fuertemente comprometida con el cuidado del Planeta y promueve activamente el Reciclar, Reutilizar y Reducir materiales en comedores y merenderos. Realizamos charlas sobre la importancia de estas acciones y luego proponemos iniciativas específicas para cada lugar. Contamos con el apoyo de dos familias que se dedican al Reciclado en diferentes áreas. Además, incentivamos a los vecinos, adultos y niños, a reciclar en sus hogares y traer los materiales recolectados cada vez que vienen a retirar alimentos. Únete a nuestra misión de preservar nuestros recursos y cuidar el medio ambiente.", 
  },
  {
    id: 4,
    image: imgPlantacion,
    title: "Plantacion de arboles",
    description:"Organizamos jornadas de plantación de árboles alimentarios y nativos, enfocándonos en variedades que proporcionan alimentos. Estas jornadas involucran cuatro pasos: evaluación del lugar adecuado, convocatoria de voluntarios, día de la plantación con la participación de vecinos y niños, y visitas posteriores para asegurar el cuidado de los árboles. Únete a nuestras jornadas para ayudar al medio ambiente.", 
  },
  {
    id: 5,
    image: imgEscuelas,
    title: "Escuelas",
    description:"Realizamos visitas a colegios con el objetivo de impulsar “pasar a la acción”. Ya que  los temas que se abordan están estrechamente vinculados con las materias que los alumnos están cursando en el período de visitas. Primeramente, nos reunimos con docentes y directores para diagramar las charlas y los encuentros y así reforzar lo que se está viendo en el programa educativo, y de allí surgen propuestas para materializar y poner en práctica acciones concretas: como colocar receptores de pilas; contenedores; hacer compost; huerta; entre otros. El sentido de las visitas es recordarnos que somos UNO con el  PLANETA.", 
  },
];

export { date, infoCard }
