import img from '../../image/reino vegetal.avif';
import './vegetalKingdom.css';

const VegetalKingdom = () => {
    return(
        <div className="conteiner" id='vegetal'>
  <div className="image-container">
      <img src={img} alt="reino animal"/>
  </div>
  <div className="content-container">
     <h1>Reino Vegetal</h1>
     <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Quisquam corrupti vitae dolores rem cum tempora laboriosam nesciunt perferendis magnam libero eos fugit voluptatibus, 
        ad vero repellat placeat recusandae earum quod?</h3>
  </div>
</div>
    )
}

export default VegetalKingdom;
