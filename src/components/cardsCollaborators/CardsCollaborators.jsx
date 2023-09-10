import {date} from '../../date';
import Card from '../cardUnit/CardUnit';
import './cardsCollaborators.css';


const Cards = () => {
   
    return (
        <div className='container-collaborators'>
            <h1 className='title-collaborators'>Colaboradores</h1>
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