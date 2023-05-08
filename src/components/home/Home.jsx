import AboutMe from '../aboutMe/AboutMe';
import  Carousel  from '../Carousel/Carousel';
import  Forms  from '../form/Forms';
import CardsCollaborators from '../cardsCollaborators/CardsCollaborators';
import AnimalKingdom from '../animalKingdom/AnimalKingdom';
import VegetalKingdom from '../vegetalKingdom/VegetalKingdom';
import Mineral from '../minerals/Minerals';
import Ocean from '../ocean/Ocean';
import HumanKingdom from '../humanKingdom/HumanKingdom';
import Activities from '../activities/Activities';


const Home = () => {
       
    return(
       
    <div >
       <Carousel/> 
       <AboutMe/>
       <Activities/>
       <HumanKingdom/> 
       <AnimalKingdom />
       <VegetalKingdom/>
       <Mineral/>
       <Ocean/>
       <CardsCollaborators/>
       <Forms/>
    </div>
    );
}

export default Home;
