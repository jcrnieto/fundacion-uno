import AboutMe from '../aboutMe/AboutMe';
import  Carousel  from '../Carousel/Carousel';
import  Forms  from '../form/Forms';
import CardsCollaborators from '../cardsCollaborators/CardsCollaborators';

const Home = () => {
 
    return(
       
    <div>
       <Carousel/> 
       <AboutMe/>
       <CardsCollaborators/>
       <Forms/>
    </div>
    );
}

export default Home;
