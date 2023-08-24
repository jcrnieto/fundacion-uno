
import './cardInfo.css';

const CardInfo = ({title,description,image}) => {
  
   return(
    <div className="card">
    <div className="card__img">
       <img src={image} alt="" className='img'/>
    </div>
    <div className="card__descr-wrapper">
    <p className="card__title">{title}</p>
    <p className="card__descr">{description}</p>
   </div>
  </div>
   )
}

export default CardInfo;