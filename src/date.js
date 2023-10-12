import fotoCard1 from "./image/fotoCard1.jpg";
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
    description:"Organizamos jornadas de plantación de árboles alimentarios y nativos, enfocándonos en variedades que proporcionan alimentos. Estas jornadas involucran cuatro pasos: evaluación del lugar adecuado, convocatoria de voluntarios, día de la plantación con la participación de vecinos y niños, y visitas posteriores para asegurar el cuidado de los árboles. Únete a nuestras jornadas para ayudar al medio ambiente.", 
  },
  {
    id: 5,
    image: imgEscuelas,
    title: "Escuelas",
    description:"Realizamos visitas a colegios y escuelas de fútbol para concientizar sobre la importancia del cuidado del Planeta. Abordamos temas vinculados con las materias que están cursando durante las visitas. En las escuelas de fútbol, el lema es 'JUGUEMOS EL ENTERO'. Fomentamos acciones como plantar árboles, reciclar materiales y crear huertas. Nuestro objetivo es crear conciencia sobre la unidad con la Tierra y todos sus recursos, destacando que incluso las acciones pequeñas benefician a todos.", 
  },
];

export { date, infoCard }
