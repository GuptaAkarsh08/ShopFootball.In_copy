import React from "react";
import Slider from "react-slick"; 
import {Link} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/Carousel.css";
import {Data} from "../Data/Data";


const LandingPageSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 2
      };
      return (
        <div className="content">
            <Slider {...settings}>
                {
                    Data.map((card,index) => (
                        <Link to={`/product/${card.id}`} className="sliderCard" key={index}>
                        <div>
                           <img style={{borderRadius:"5px"}} src={card.src} alt={""} />
                            <div className="text-divider"></div>
                            <h3 className="product-title" style={{color:"#212121"}}>{card.desc}</h3>
                            <div className="text-divider"></div>
                            <p> ₹{card.price}</p>
                        </div>
                        </Link>
                    ))
                }
            </Slider>
        </div>
      )
}

export default LandingPageSlider;