import React from "react";
import Carousel from "../components/slider/Carousel";
import img1 from "../assets/img/banner_img_01.jpg";
import img2 from "../assets/img/banner_img_02.jpg";
import img3 from "../assets/img/banner_img_03.jpg";
import CategoryOfMonth from "../components/MappingCards/CategoryOfMonth";
import CardCircle from "../components/cards/CardCircle";
import img4 from "../assets/img/category_img_01.jpg";
import img5 from "../assets/img/category_img_02.jpg";
import img6 from "../assets/img/category_img_03.jpg";
import CardSquareMap from '../components/MappingCards/CardSquareMap';
import CardSquare from '../components/cards/CardSquare';
import img7 from "../assets/img/feature_prod_01.jpg";
import img8 from "../assets/img/feature_prod_02.jpg";
import img9 from "../assets/img/feature_prod_03.jpg";

const Index = () => {
  const firstCarouselSlides = [
    {
      id: 0,
      imgSrc: img1,
      altText: "First slide in the first carousel",
      heading: "Zay eCommerce",
      subHeading: "Tiny and Perfect eCommerce Template",
      description: (
        <p>
          Zay Shop is an eCommerce HTML5 CSS template with the latest version of Bootstrap 5 (beta 1). This template is 100% free provided by{" "}
          <a
            className="text-success"
            href="https://templatemo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            TemplateMo
          </a>{" "}
          website. Image credits go to{" "}
          <a
            className="text-success"
            href="/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik Stories
          </a>
          ,{" "}
          <a
            className="text-success"
            href="https://unsplash.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </a>{" "}
          and{" "}
          <a
            className="text-success"
            href="https://icons8.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Icons 8
          </a>
        </p>
      ),
    },
    {
      id: 1,
      imgSrc: img2,
      altText: "Second slide in the first carousel",
      heading: "Proident occaecat",
      subHeading: "Aliquip ex ea commodo consequat",
      description: (<p>
        You are permitted to use this Zay CSS template for your
        commercial websites. You are{" "}
        <strong>not permitted</strong> to re-distribute the
        template ZIP file in any kind of template collection
        websites.
      </p>)
    },
    {
      id: 2,
      imgSrc: img3,
      altText: "Third slide in the first carousel",
      heading: "Repr in voluptate",
      subHeading: "Ullamco laboris nisi ut ",
      description: (<p>
        We bring you 100% free CSS templates for your websites. If
        you wish to support TemplateMo, please make a small
        contribution via PayPal or tell your friends about our
        website. Thank you.
      </p>),
    },
  ];

  const categories = [
    {
      name: "Watches",
      image: img4,
      link: "/shopsingle",
      alt: "Watches",
    },
    {
      name: "Shoes",
      image: img5,
      link: "/shopsingle",
      alt: "Shoes",
    },
    {
      name: "Accessories",
      image: img6,
      link: "/shopsingle",
      alt: "Accessories",
    },
  ];

  const productsData = {
    heading: "Featured Products",
    data: "Check out our top picks for this season!",
    products: [
      {
        name: "Gym Weight",
        image: img7,
        price: "240.00",
        rating: 3,
        reviews: 24,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.",
        link: "/shopsingle",
      },
      {
        name: "Cloud Nike Shoes",
        image: img8,
        price: "480.00",
        rating: 3,
        reviews: 48,
        description:
          "Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.",
        link: "/shopsingle",
      },
      {
        name: "Summer Addides Shoes",
        image: img9,
        price: "360.00",
        rating: 5,
        reviews: 74,
        description:
          "Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.",
        link: "/shopsingle",
      },
    ],
  };
  return (
    <>
    <Carousel slides={firstCarouselSlides} />
    <CategoryOfMonth
        title="Categories of The Month"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        categories={categories}
      >
        <CardCircle />
      </CategoryOfMonth>
      <CardSquareMap
      heading={productsData.heading}
      data={productsData.data}
      products={productsData.products}
    >
      <CardSquare/>
      </CardSquareMap>
  </>
  );
};

export default Index;
