import AboutMe from '../aboutMe/AboutMe';
import  Carousel  from '../Carousel/Carousel';
import  Forms  from '../form/Forms';
import CardsCollaborators from '../cardsCollaborators/CardsCollaborators';
import Activities from '../activities/Activities';
import Donation from '../donation/Donation';
import KnowMore from "../knowMore/KnowMore";



const Home = () => {
   
       
    return(
       
    <div >
       <Carousel/> 
       <AboutMe/>
       <Activities/>
       <KnowMore/>
       <Donation/>
       <CardsCollaborators/>
       <Forms/>
    </div>
    );
}

export default Home;
