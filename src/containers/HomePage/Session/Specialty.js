import React from "react";
// Import css files
import coSuongKhop from "../../../assets/specialty/120331-co-xuong-khop.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "./Specialty.scss";
function Specialty(props) {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="specialty-session ">
      <div className="container">
        <h2>Chuyên Khoa phổ biến</h2>
        <Slider {...settings} className="slider-wrapper   ">
          <div className="slider-content container" style={{ height: "500px" }}>
            <div className="specialty-image">
              <img src={coSuongKhop} alt="" className="img-fluid rounded" />
            </div>
            <h4>Khoa Sương Khớp</h4>
          </div>

          <div className="slider-content container" style={{ height: "500px" }}>
            <div className="specialty-image">
              <img src={coSuongKhop} alt="" className="img-fluid rounded" />
            </div>
            <h4>Khoa Sương Khớp</h4>
          </div>

          <div className="slider-content container" style={{ height: "500px" }}>
            <div className="specialty-image">
              <img src={coSuongKhop} alt="" className="img-fluid rounded" />
            </div>
            <h4>Khoa Sương Khớp</h4>
          </div>

          <div className="slider-content container" style={{ height: "500px" }}>
            <div className="specialty-image">
              <img src={coSuongKhop} alt="" className="img-fluid rounded" />
            </div>
            <h4>Khoa Sương Khớp</h4>
          </div>

          <div className="slider-content container" style={{ height: "500px" }}>
            <div className="specialty-image">
              <img src={coSuongKhop} alt="" className="img-fluid rounded" />
            </div>
            <h4>Khoa Sương Khớp</h4>
          </div>

          <div className="slider-content container" style={{ height: "500px" }}>
            <div className="specialty-image">
              <img src={coSuongKhop} alt="" className="img-fluid rounded" />
            </div>
            <h4>Khoa Sương Khớp</h4>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Specialty;
