import React from "react";
import AboutUs from "../components/content/AboutUs";
import img1 from "../assets/img/about-hero.svg";
import Services from "../components/cards/Services";
import OurBrands from "../components/slider/OurBrands";
import img2 from "../assets/img/brand_01.png";
import img3 from "../assets/img/brand_02.png";
import img4 from "../assets/img/brand_03.png";
import img5 from "../assets/img/brand_04.png";

const About = () => {
  const serviceDetails = [
    {
      iconClass: "fa fa-truck fa-lg",
      title: "Delivery Services",
    },
    {
      iconClass: "fas fa-exchange-alt",
      title: "Shipping & Return",
    },
    {
      iconClass: "fa fa-percent",
      title: "Promotion",
    },
    {
      iconClass: "fa fa-user",
      title: "24 Hours Service",
    },
  ];

  const brandImages = [
    [
      { src: img2, alt: "Brand Logo 1" },
      { src: img3, alt: "Brand Logo 2" },
      { src: img4, alt: "Brand Logo 3" },
      { src: img5, alt: "Brand Logo 4" },
    ],
    [
      { src: img2, alt: "Brand Logo 1" },
      { src: img3, alt: "Brand Logo 2" },
      { src: img4, alt: "Brand Logo 3" },
      { src: img5, alt: "Brand Logo 4" },
    ],
    [
      { src: img2, alt: "Brand Logo 1" },
      { src: img3, alt: "Brand Logo 2" },
      { src: img4, alt: "Brand Logo 3" },
      { src: img5, alt: "Brand Logo 4" },
    ],
  ];
  return (
    <>
      {/* sec1  */}
      <AboutUs
        title="About Us"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        imageSrc={img1}
        bgColor="bg-success"
      />

      {/* starrt section 2  */}
      <Services
        title="Our Services"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet."
        services={serviceDetails}
      />

      {/* start brands  */}
      <OurBrands
        heading="Our Brands"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet."
        brandImages={brandImages}
      />
    </>
  );
};

export default About;
