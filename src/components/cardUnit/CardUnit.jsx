import './cardUnit.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const CardUnit = ({ image, name, post }) => {

  useEffect(()=>{
    Aos.init({duration:2000})
 },[])

  return (
    <div className="card-unit"  data-aos="zoom-in">
      <div className="card-image">
         <img src={image} alt='imagen' className='image'/>
      </div>
      <p className="card-title">{name}</p>
      <p className="card-body">{post}</p>
    </div>
  )

}

export default CardUnit;