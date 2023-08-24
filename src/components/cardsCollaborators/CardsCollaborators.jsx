//import { Container, CardGroup } from 'reactstrap';
import {date} from '../../date';
import Card from '../cardUnit/CardUnit';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import './cardsCollaborators.css';


const Cards = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
     },[])
    return (
        <div  data-aos="fade-right" style={{marginTop: '70px', marginBottom:'150px'}}>
            <h1>Colaboradores</h1>
           <div className='card-group'>
              {
                 date?.map((el) => {
                    return(
                     
                        <Card 
                         id={el.id}
                         image={el.image}
                         name={el.name}
                         post={el.post}
                         key={el.id}
                        />
                   
                    )
                })
              }
           </div>
        </div>
    )
}

export default Cards;