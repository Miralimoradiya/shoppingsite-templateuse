import React from "react";
import CategoryDropdown from "../components/Dropdown/CategoryDropdown";
import CardShopSingle from "../components/cards/CardShopSingle";
import PaginationCard from "../components/Pagination/PaginationCard";
import img1 from "../assets/img/shop_01.jpg";
import img2 from "../assets/img/shop_02.jpg";
import img3 from "../assets/img/shop_03.jpg";
import img4 from "../assets/img/shop_04.jpg";
import img5 from "../assets/img/shop_05.jpg";
import img6 from "../assets/img/shop_06.jpg";
import img7 from "../assets/img/shop_07.jpg";
import img8 from "../assets/img/shop_08.jpg";
import img9 from "../assets/img/shop_09.jpg";
import OurBrands from "../components/slider/OurBrands";
import img10 from "../assets/img/brand_01.png";
import img11 from "../assets/img/brand_02.png";
import img12 from "../assets/img/brand_03.png";
import img13 from "../assets/img/brand_04.png";

const Shop = () => {
  const products = [
    { imgSrc: img1, title: "Oupidatat non", price: "$250.00" , rating: 3},
    { imgSrc: img2, title: "Oupidatat non", price: "$250.00", rating: 4 },
    { imgSrc: img3, title: "Oupidatat non", price: "$250.00" , rating: 2},
    { imgSrc: img4, title: "Oupidatat non", price: "$250.00", rating:2 },
    { imgSrc: img5, title: "Oupidatat non", price: "$250.00" , rating: 4},
    { imgSrc: img6, title: "Oupidatat non", price: "$250.00", rating: 1 },
    { imgSrc: img7, title: "Oupidatat non", price: "$250.00", rating: 4 },
    { imgSrc: img8, title: "Oupidatat non", price: "$250.00", rating: 3 },
    { imgSrc: img9, title: "Oupidatat non", price: "$250.00", rating: 2 },
  ];
  const pageLinks = ["/shop", "/shop", "/home"];

  const brandImages = [
    [
      { src: img10, alt: "Brand Logo 1" },
      { src: img11, alt: "Brand Logo 2" },
      { src: img12, alt: "Brand Logo 3" },
      { src: img13, alt: "Brand Logo 4" },
    ],
    [
      { src: img10, alt: "Brand Logo 1" },
      { src: img11, alt: "Brand Logo 2" },
      { src: img12, alt: "Brand Logo 3" },
      { src: img13, alt: "Brand Logo 4" },
    ],
    [
      { src: img10, alt: "Brand Logo 1" },
      { src: img11, alt: "Brand Logo 2" },
      { src: img12, alt: "Brand Logo 3" },
      { src: img13, alt: "Brand Logo 4" },
    ],
  ];
  return (
    <>
      {/* sec 1  */}
      <div className="container py-5">
        <div className="row">
          {/* first 3 dropdowns start */}
          <div className="col-lg-3">
            <h1 className="h2 pb-4">Categories</h1>
            <ul className="list-unstyled templatemo-accordion">
              <CategoryDropdown
                title="Gender"
                items={["Men", "Women"]}
                id="collapseGender"
              />
              <CategoryDropdown
                title="Sale"
                items={["Sport", "Luxury"]}
                id="collapseSale"
              />
              <CategoryDropdown
                title="Product"
                items={["Bag", "Sweater", "Sunglass"]}
                id="collapseProduct"
              />
            </ul>
          </div>
          {/* first 3 dropdowns ends  */}
          <div className="col-lg-9">
          <div className="row">
              <div className="col-md-6">
                <ul className="list-inline shop-top-menu pb-3 pt-1">
                  <li className="list-inline-item">
                    <a
                      className="h3 text-dark text-decoration-none mr-3"
                      href="#"
                    >
                      All
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="h3 text-dark text-decoration-none mr-3"
                      href="#"
                    >
                      Men's
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="h3 text-dark text-decoration-none" href="#">
                      Women's
                    </a>
                  </li>
                </ul>
              </div>
              {/* dropdowns start  */}
              <div className="col-md-6 pb-4">
                <div className="d-flex">
                  <select className="form-control">
                    <option>Featured</option>
                    <option>A to Z</option>
                    <option>Item</option>
                  </select>
                </div>
              </div>
              {/* dropdown end  */}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
              }}
            >
              {products.map((product, index) => (
                <CardShopSingle
                  key={index}
                  imgSrc={product.imgSrc}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                />
              ))}
            </div>
            <div className="row">
              <PaginationCard
                currentPage={1}
                totalPages={3}
                pageLinks={pageLinks}
              />
            </div>
          </div>
        </div>
      </div>

      {/* sec 2 */}
      <OurBrands
        heading="Our Brands"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet."
        brandImages={brandImages}
      />
    </>
  );
};

export default Shop;
