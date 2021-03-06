/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */




import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/carousal/slide1.webp";
import Slide2 from "../../assets/img/carousal/slide2.png";
import Slide3 from "../../assets/img/carousal/slide3.jpg";
import Slide4 from "../../assets/img/carousal/slide4.jpg";
import Slide5 from "../../assets/img/carousal/slide5.jpg";
import Slide6 from "../../assets/img/carousal/slide6.jpg";
import ScrollDown from "../scroll-down/scrolldown.component";

import "./mycarousel.style.css";

const MyCarousal = () => {
  return (
    <>
      <div id="home">
        <Carousel controls={false} indicators interval={3000} pause={false}>
          <Carousel.Item>
            <img className="d-block w-100 custom-img" src={Slide1} alt="second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 custom-img" src={Slide2} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 custom-img" src={Slide3} alt="first slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 custom-img" src={Slide6} alt="fourth slide" />
          </Carousel.Item>
        </Carousel>
        <ScrollDown />

      </div>
    </>
  );
};

export default MyCarousal;