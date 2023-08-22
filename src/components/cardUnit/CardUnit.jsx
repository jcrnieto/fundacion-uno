import './cardUnit.css';

const CardUnit = ({ image, name, post }) => {

  return (
    <div className="card">
      <div className="card-image">
         <img src={image} alt='imagen' className='image'/>
      </div>
      <p className="card-title">{name}</p>
      <p className="card-body">{post}</p>
    </div>
  )

}

export default CardUnit;