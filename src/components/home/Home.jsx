import fotoHome from '../../image/imagen1.avif';
import naturaleza from '../../image/naturaleza.avif';
import animales from '../../image/animales.avif';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return(
       
    <div>
         <Slider {...settings}>
        
          <div>
            <img src={fotoHome} alt="" style={{width: "100%"}}/>
          </div>
          <div>
            <img src={naturaleza}  alt="" style={{width: "100%"}}/>
          </div>
          <div>
            <img src={animales}  alt="" style={{width: "100%"}}/>
          </div>
        </Slider>


    </div>
    );
}

export default Home;
