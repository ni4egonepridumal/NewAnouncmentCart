import React from "react";
import Slider from "react-slick";

export default function SimpleSlider(props) {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="slider">
        <img src="images/home1.png" alt="" />
      </div>
      <div className="slider">
        <img src="images/home2.png" alt="" />
      </div>
      <div className="slider">
        <img src="images/home3.png" alt="" />
      </div>
      <div className="slider">
        <img src="images/home4.png" alt="" />
      </div>
    </Slider>
  );
}
