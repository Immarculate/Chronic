import React from "react";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="h-[75vh] w-full">
      <Slider {...settings}>
        <FirstSlide />
        <SecondSlide />
        <FirstSlide />
      </Slider>
    </div>
  );
}

export default Home;
