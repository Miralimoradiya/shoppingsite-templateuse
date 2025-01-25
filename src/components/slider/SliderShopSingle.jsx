import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const SliderShopSingle = ({ products, children }) => {
  const sliderSettings = {
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  const sliderStyle = {
    display: 'flex',
    flexWrap: 'nowrap',
    width: '100%',
  };

  const slideStyle = {
    padding: '0',
    boxSizing: 'border-box',
  };

  return (
    <Slider {...sliderSettings} style={sliderStyle}>
      {products.map((product, index) => (
        <div key={index} style={slideStyle}>
          {React.cloneElement(children, { ...product })}
        </div>
      ))}
    </Slider>
  );
};

export default SliderShopSingle;