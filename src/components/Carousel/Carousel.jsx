
import naturaleza from '../../image/naturaleza.avif';
import animales from '../../image/animales.avif';
import arbol from '../../image/arbol.avif';
import Slider from "react-slick";
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
        <div>
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
        </Slider>
        </div>
    )
}

export default Carousel;