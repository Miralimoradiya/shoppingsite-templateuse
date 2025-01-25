import React from "react";

const OurBrands = ({ heading, description, brandImages }) => {
  return (
    <section className="bg-light py-5">
      <div className="container my-4">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">{heading}</h1>
            <p>{description}</p>
          </div>
          <div className="col-lg-9 m-auto tempaltemo-carousel">
            <div className="row d-flex flex-row">
              <div className="col-1 align-self-center">
                <a
                  className="h1"
                  href="#templatemo-slide-brand"
                  role="button"
                  data-bs-slide="prev"
                >
                  <i className="text-light fas fa-chevron-left"></i>
                </a>
              </div>

              <div className="col">
                <div
                  className="carousel slide carousel-multi-item pt-2 pt-md-0"
                  id="templatemo-slide-brand"
                  data-bs-ride="carousel"
                >
                  <div
                    className="carousel-inner product-links-wap"
                    role="listbox"
                  >
                    {brandImages.map((images, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <div className="row">
                          {images.map((img, idx) => (
                            <div key={idx} className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src={img.src}
                                  alt={img.alt}
                                />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-1 align-self-center">
                <a
                  className="h1"
                  href="#templatemo-slide-brand"
                  role="button"
                  data-bs-slide="next"
                >
                  <i className="text-light fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBrands;

