import { infoCard } from "../../date";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardInfo from "../cardInfo/CardInfo";
import "./knowMore.css";

const KnowMore = () => {

  const CustomPrevArrow = (props) => (
    <div
      className="slick-arrow slick-prev"
      onClick={props.onClick}
    >
      Prev
    </div>
  );

  const CustomNextArrow = (props) => (
    <div
      className="slick-arrow slick-next"
      onClick={props.onClick}
    >
      Next
    </div>
  );

  const settings = {
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container">
      <h1 className="tile-knowmore">Actividades de la Fundacion</h1>
      <Slider {...settings}>
        {
          infoCard.map((card) => {
            return (
              <div className="card-info" key={card.id}>
                <CardInfo
                  id={card.id}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default KnowMore;