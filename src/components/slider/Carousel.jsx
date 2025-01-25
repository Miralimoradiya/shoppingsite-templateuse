import React from 'react';

const Carousel = ({ slides }) => {
  return (
    <div>
      <div
        id="template-mo-zay-hero-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          {slides.map((slide) => (
            <li
              key={slide.id}
              data-bs-target="#template-mo-zay-hero-carousel"
              data-bs-slide-to={slide.id}
              className={slide.id === 0 ? "active" : ""}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`carousel-item ${slide.id === 0 ? "active" : ""}`}
            >
              <div className="container">
                <div className="row p-5">
                  <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                    <img
                      className="img-fluid"
                      src={slide.imgSrc}
                      alt={slide.altText}
                    />
                  </div>
                  <div className="col-lg-6 mb-0 d-flex align-items-center">
                    <div className="text-align-left">
                      <h1 className="h1 text-success">
                        <b>{slide.heading.split(' ')[0]}</b> {slide.heading.split(' ')[1]}
                      </h1>
                      <h3 className="h2">{slide.subHeading}</h3>
                      <div>{slide.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev text-decoration-none w-auto ps-3"
          href="#template-mo-zay-hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <i className="fas fa-chevron-left"></i>
        </a>
        <a
          className="carousel-control-next text-decoration-none w-auto pe-3"
          href="#template-mo-zay-hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
