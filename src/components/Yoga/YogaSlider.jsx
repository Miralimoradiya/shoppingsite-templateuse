import React, { useState } from 'react';

const YogaSlider = ({ images }) => {
  // State to keep track of the currently selected image
  const [selectedImage, setSelectedImage] = useState(images[0]);

  // Styles
  const sliderStyle = {
    position: 'relative',
  };

  const carouselItemStyle = {
    transition: 'transform 0.6s ease',
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  const controlButtonStyle = {
    width: '2.5rem',
    height: '2.5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '50%',
  };

  const iconStyle = {
    fontSize: '1.5rem',
    color: 'white',
  };

  return (
    <div className="col-lg-5 mt-5">
      <div className="card mb-3">
        <img
          style={imgStyle}
          src={selectedImage}
          alt="Main Product"
          id="product-detail"
        />
      </div>
      <div className="row">
        <div className="col-1 align-self-center">
          <a href="#multi-item-example" role="button" data-bs-slide="prev">
            <i className="text-dark fas fa-chevron-left" style={iconStyle}></i>
            <span className="sr-only">Previous</span>
          </a>
        </div>
        <div
          id="multi-item-example"
          className="col-10 carousel slide carousel-multi-item"
          data-bs-ride="carousel"
          style={sliderStyle}
        >
          <div
            className="carousel-inner product-links-wap"
            role="listbox"
          >
            {images.reduce((acc, img, index) => {
              const chunkIndex = Math.floor(index / 3);
              if (!acc[chunkIndex]) {
                acc[chunkIndex] = [];
              }
              acc[chunkIndex].push(img);
              return acc;
            }, []).map((chunk, chunkIndex) => (
              <div className={`carousel-item ${chunkIndex === 0 ? 'active' : ''}`} style={carouselItemStyle} key={chunkIndex}>
                <div className="row">
                  {chunk.map((image, imageIndex) => (
                    <div className="col-4" key={imageIndex}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent the default anchor behavior
                          setSelectedImage(image); // Update the main image
                        }}
                      >
                        <img
                          style={imgStyle}
                          src={image}
                          alt={`Product Image ${chunkIndex * 3 + imageIndex + 1}`}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-1 align-self-center">
          <a href="#multi-item-example" role="button" data-bs-slide="next">
            <i className="text-dark fas fa-chevron-right" style={iconStyle}></i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default YogaSlider;
