import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wallpaper1 from '../images/coffee.jpg';
import wallpaper2 from '../images/GreenTea.jpg';
import wallpaper3 from '../images/Tea.jpg';


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={wallpaper1}/>
      </div>
      <div>
        <img src={wallpaper2}/>
        
      </div>
      <div>
        <img src={wallpaper3}/>
       
      </div>
  
    </Slider>
  );
}