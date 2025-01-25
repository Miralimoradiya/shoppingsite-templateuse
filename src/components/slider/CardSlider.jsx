import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Slider settings
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

// Card component
const CardDataSlider = ({ imgSrc, title, price }) => {
  return (
    <div className="p-2 pb-3">
      <div className="product-wap card rounded-0">
        <div className="card rounded-0">
          <img className="card-img rounded-0 img-fluid" src={imgSrc} alt={title} />
          <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
            <ul className="list-unstyled">
              <li>
                <a className="btn btn-success text-white" href="shop-single.html">
                  <i className="far fa-heart"></i>
                </a>
              </li>
              <li>
                <a className="btn btn-success text-white mt-2" href="shop-single.html">
                  <i className="far fa-eye"></i>
                </a>
              </li>
              <li>
                <a className="btn btn-success text-white mt-2" href="shop-single.html">
                  <i className="fas fa-cart-plus"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <a href="shop-single.html" className="h3 text-decoration-none">
            {title}
          </a>
          <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
            <li>M/L/X/XL</li>
            <li className="pt-2">
              <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
              <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
              <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
              <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
              <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
            </li>
          </ul>
          <ul className="list-unstyled d-flex justify-content-center mb-1">
            <li>
              <i className="text-warning fa fa-star"></i>
              <i className="text-warning fa fa-star"></i>
              <i className="text-warning fa fa-star"></i>
              <i className="text-muted fa fa-star"></i>
              <i className="text-muted fa fa-star"></i>
            </li>
          </ul>
          <p className="text-center mb-0">{price}</p>
        </div>
      </div>
    </div>
  );
};

// CardSlider component
const CardSlider = ({ products }) => {
  return (
    <Slider {...sliderSettings}>
      {products.map((product, index) => (
        <CardDataSlider
          key={index}
          imgSrc={product.imgSrc}
          title={product.title}
          price={product.price}
        />
      ))}
    </Slider>
  );
};

export default CardSlider;
