import React from "react";
import Rating from "../content/Rating";
import Price from "../content/Price";
import IconHeart from "../Icons/IconHeart";
import IconCart from "../Icons/IconCart";
import IconEye from "../Icons/IconEye";

const CardShopSingle = ({ imgSrc, title, price, rating }) => {
  const cardStyle = {
    margin: "0",
    padding: "0",
    width: "98%",
    boxSizing: "border-box",
  };

  return (
    <div className="col-md-4" style={cardStyle}>
      <div className="card mb-4 product-wap rounded-0" style={cardStyle}>
        <div className="card rounded-0">
          <img
            className="card-img rounded-0 img-fluid"
            src={imgSrc}
            alt={title}
          />
          <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
            <ul className="list-unstyled">
              <li>
                <div
                  className="text-white mb-3"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "4px",
                    borderRadius: "6%",
                    backgroundColor: "#59ab6e",
                  }}
                >
                  <IconHeart link="/cart" className="p-2 rounded" />
                </div>
              </li>
              <li>
                <div
                  className="text-white mb-3"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "4px",
                    borderRadius: "6%",
                    backgroundColor: "#59ab6e",
                  }}
                >
                  <IconEye link="/shopsingle" className="p-2 rounded" />
                </div>
              </li>
              <li>
                <div
                  className="text-white mb-3"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "4px", 
                    borderRadius: "6%",
                    backgroundColor: "#59ab6e",
                  }}
                >
                  <IconCart link="/cart" className="p-2 rounded" />
                </div>
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
          </ul>
          <div className="text-center">
            <Rating rating={rating} />
          </div>
          <div className="text-center">
            <Price price={price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShopSingle;

