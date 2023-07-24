import fotoCard1 from "./image/fotoCard1.jpg";
import fotoCard2 from "./image/foto-cristian.JPG";
import fotoCard3 from "./image/foto-sabina.JPG";

import imgReciclado from "./image/reciclado.jpg";
import imgPlantacion from "./image/plantacion-arboles.jpg";
import imgMerenderos from "./image/ayuda-merenderos.jpeg";
import imgEscuelas from "./image/escuelas.jpg";
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
    title: "Merenderos",
    description:"Realizamos jornadas de plantación de árboles alimentarios, cítricos y nativos, enfocándonos en aquellos que dan frutos y alimentos. Acompañamos a la comunidad en cada etapa del proceso, desde la elección del lugar hasta el cuidado continuo de los árboles. ¡Únete a nosotros para cuidar el medio ambiente y fortalecer la comunidad!",
  },
  {
    id: 2,
    image: imgEscuelaFutbol,
    title: "Escuelitas de futbol",
    description:"Realizamos visitas a colegios y escuelas de fútbol para concientizar sobre el cuidado del planeta. Nos enfocamos en temas relacionados con sus materias y promovemos acciones como plantar árboles, reciclar y crear huertas. Queremos transmitir la idea de que todos somos uno con el agua, la Tierra, los árboles y los animales, y que cada pequeña acción a favor del cuidado de nuestros recursos beneficia a todos. Únete a nosotros en esta importante misión.", 
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
    description:"Organizamos jornadas de plantaciones de árboles alimentarios, cítricos y nativos, centrándonos en aquellos que ofrecen frutos y alimentos. Estas jornadas constan de cuatro etapas. En primer lugar, evaluamos el lugar más adecuado para plantar realizando un recorrido y visitando a los vecinos, buscando 'guardianes' que cuiden el crecimiento del arbolito. Luego, fijamos día y horario, convocando a voluntarios que deseen colaborar en la jornada. El tercer paso es el día de la plantación, donde nos acompañan vecinos y especialmente niños, creando un hermoso momento de unidad y aprendizaje. La cuarta etapa consiste en visitar los árboles para verificar su estado y realizar acciones concretas si es necesario, como mejorar la colocación de tutores, tratar temas de plagas o regar en épocas críticas. ¡Únete a nuestras jornadas para contribuir al cuidado del medio ambiente!", 
  },
  {
    id: 5,
    image: imgEscuelas,
    title: "Escuelas",
    description:"Realizamos visitas a colegios y escuelas de fútbol para concientizar sobre la importancia del cuidado del Planeta. Abordamos temas vinculados con las materias que están cursando durante las visitas. En las escuelas de fútbol, el lema es 'JUGUEMOS EL ENTERO'. Fomentamos acciones como plantar árboles, reciclar materiales y crear huertas. Nuestro objetivo es crear conciencia sobre la unidad con la Tierra y todos sus recursos, destacando que incluso las acciones pequeñas benefician a todos.", 
  },
];

export { date, infoCard }
