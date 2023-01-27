import React from "react";
import Slider from "infinite-react-carousel";

import c1 from "../data/header1.jpg";
import c2 from "../data/header2.jpg";
import c3 from "../data/header3.png";
import c4 from "../data/header4.jpg";

import "./slide.css";

function Slide() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    className: "slide_box",
    dots: true,
    virtualList: true,
    duration: 20,
    arrows:true,
    
  };
  return (
    <div>
      
      <Slider {...settings}>
        <div className="row">
          <img
            src={c1}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
        <div>
          <img
            src={c2}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
        <div>
          <img
            src={c3}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
        <div>
          <img
            src={c4}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
      </Slider>
    </div>
  );
}

export default Slide;