import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wallpaper1 from '../images/coffee.jpg';
import wallpaper2 from '../images/GreenTea.jpg';
import wallpaper3 from '../images/Tea.jpg';

import './SliderStyles.css'; 

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed:2000,
    
    
    arrows: false, 
  };
  return (
    <Slider {...settings}>
      <div className="slide">
        <img src={wallpaper1} alt="wallpaper 1" className="slide-image"/>
      </div>
      <div className="slide">
        <img src={wallpaper2} alt="wallpaper 2" className="slide-image"/>
      </div>
      <div className="slide">
        <img src={wallpaper3} alt="wallpaper 3" className="slide-image"/>
      </div>
    </Slider>
  );
}
