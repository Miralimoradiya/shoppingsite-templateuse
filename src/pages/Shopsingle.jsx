import React from "react";
import YogaProductDetails from '../components/Yoga/YogaProductDetails';
import YogaSlider from '../components/Yoga/YogaSlider';
import img1 from "../assets/img/product_single_10.jpg";
import img2 from "../assets/img/product_single_01.jpg";
import img3 from "../assets/img/product_single_02.jpg";
import img4 from "../assets/img/product_single_03.jpg";
import img5 from "../assets/img/product_single_04.jpg";
import img6 from "../assets/img/product_single_05.jpg";
import img7 from "../assets/img/product_single_06.jpg";
import img8 from "../assets/img/product_single_07.jpg";
import img9 from "../assets/img/product_single_08.jpg";
import img10 from "../assets/img/product_single_09.jpg";
import SliderShopSingle from "../components/slider/SliderShopSingle";
import CardShopSingle from "../components/cards/CardShopSingle"; import img11 from "../assets/img/shop_08.jpg";
import img12 from "../assets/img/shop_09.jpg";
import img13 from "../assets/img/shop_10.jpg";
import img14 from "../assets/img/shop_11.jpg";

const Shopsingle = () => {
  const products = [
    { imgSrc: img11, title: "Oupidatat non", price: "$250.00" },
    { imgSrc: img12, title: "Oupidatat non", price: "$250.00" },
    { imgSrc: img13, title: "Oupidatat non", price: "$250.00" },
    { imgSrc: img14, title: "Oupidatat non", price: "$250.00" },
    { imgSrc: img11, title: "Oupidatat non", price: "$250.00" },
    { imgSrc: img12, title: "Oupidatat non", price: "$250.00" },
  ];
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
  ];
  
  const productDetails = {
    title: 'Active Wear',
    price: '$25.00',
    rating: 4.8,
    brand: 'Easy Wear',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.',
    colors: 'White / Black',
    specification: [
      'Lorem ipsum dolor sit',
      'Amet, consectetur',
      'Adipiscing elit,set',
      'Duis aute irure',
      'Ut enim ad minim',
      'Dolore magna aliqua',
      'Excepteur sint'
    ]
  };
  return (
    <>
      <div>
      {/* open content  */}
      <section className="bg-light">
        <div className="container pb-5">
          <div className="row">
          <YogaSlider images={images} />
          <YogaProductDetails {...productDetails} />
          </div>
        </div>
      </section>
    </div>

      {/* article  */}
      <section className="py-5">
      <div className="container">
        <div className="row text-left p-2 pb-3">
          <h4>Related Products</h4>
        </div>
        <SliderShopSingle products={products}>
          <CardShopSingle />
        </SliderShopSingle>
      </div>
    </section>
    </>
  );
};

export default Shopsingle;
