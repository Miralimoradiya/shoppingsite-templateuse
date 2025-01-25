import React from "react";
import CardShopSingle from "../components/cards/CardShopSingle";
import img1 from "../assets/img/shop_01.jpg";
import img2 from "../assets/img/shop_02.jpg";
import img3 from "../assets/img/shop_03.jpg";
import img4 from "../assets/img/shop_04.jpg";
import img5 from "../assets/img/shop_05.jpg";
import img6 from "../assets/img/shop_06.jpg";
import img7 from "../assets/img/shop_07.jpg";
import img8 from "../assets/img/shop_08.jpg";
import img9 from "../assets/img/shop_09.jpg";

const Shop = () => {
  const products = [
    { imgSrc: img1, title: "Oupidatat non", price: "$250.00", rating: 3 },
    { imgSrc: img2, title: "Oupidatat non", price: "$250.00", rating: 4 },
    { imgSrc: img3, title: "Oupidatat non", price: "$250.00", rating: 2 },
    { imgSrc: img4, title: "Oupidatat non", price: "$250.00", rating: 2 },
    { imgSrc: img5, title: "Oupidatat non", price: "$250.00", rating: 4 },
    { imgSrc: img6, title: "Oupidatat non", price: "$250.00", rating: 1 },
    { imgSrc: img7, title: "Oupidatat non", price: "$250.00", rating: 4 },
    { imgSrc: img8, title: "Oupidatat non", price: "$250.00", rating: 3 },
    { imgSrc: img9, title: "Oupidatat non", price: "$250.00", rating: 2 },
  ];
  return (
    <>
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
    </>
  );
};

export default Shop;
this is my shopping page where my card are showing









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
this is my card where I have all code 
muje esa chahiye ki jab bhi me koi particular card ke upr jau or uska iconcard button pe click kru to woh add to cart hona chhaiye or cart.jsx me show hona chahiye 




// Cart.jsx
import React, { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.title === item.title);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItemFromCart = (title) => {
    setCart((prevCart) => prevCart.filter(cartItem => cartItem.title !== title));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.title}>
                {item.title} - {item.price} x {item.quantity}
                <button onClick={() => removeItemFromCart(item.title)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${calculateTotal()}</h3>
      </div>
    </div>
  );
};

export default Cart;


































