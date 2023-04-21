
import naturaleza from '../../image/Naturaleza-con-frase.png';
//import animales from '../../image/Animal-con-frase.png';
import arbol from '../../image/Arbol-con-frase.png';
import Slider from "react-slick";
import oceano from '../../image/oceanos-con-frase.png';
import piedras from '../../image/Minerales-con-frase.png';
import animales from '../../image/animal-frase.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        focusOnChange: true,
        pauseOnFocus:true
      };

    return(
        <div style={{zIndex:'1'}} >
         <Slider {...settings}>
         <div>
          <img src={arbol} alt="" style={{width: "100%", height:"100vp"}}/>
        </div>
        <div>
          <img src={naturaleza}  alt="" style={{width: "100%", height:"100vp" }}/>
        </div>
        <div>
          <img src={animales}  alt="" style={{width: "100%", height:"100vp"}}/>
        </div>
        <div>
          <img src={oceano}  alt="" style={{width: "100%", height:"100vp"}}/>
        </div>
        <div>
          <img src={piedras}  alt="" style={{width: "100%", height:"100vp"}}/>
        </div>
        </Slider>
        </div>
    )
}

export default Carousel;