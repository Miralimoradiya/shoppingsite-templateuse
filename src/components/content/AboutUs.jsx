import React from 'react';

const AboutUs = ({ title, content, imageSrc, bgColor }) => {
  return (
    <section className={`py-5 ${bgColor}`}>
      <div className="container">
        <div className="row align-items-center py-5">
          <div className="col-md-8 text-white">
            <h1>{title}</h1>
            <p>{content}</p>
          </div>
          <div className="col-md-4">
            <img src={imageSrc} alt={title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
