import img from '../../image/mineral.avif';
import './mineral.css';

const Mineral = () => {
    return(
        <div className="conteiner" id='minerales'>
  <div className="image-container">
      <img src={img} alt="reino animal"/>
  </div>
  <div className="content-container">
     <h1>Minerales</h1>
     <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Quisquam corrupti vitae dolores rem cum tempora laboriosam nesciunt perferendis magnam libero eos fugit voluptatibus, 
        ad vero repellat placeat recusandae earum quod?</h3>
  </div>
</div>
    )
}

export default Mineral;
