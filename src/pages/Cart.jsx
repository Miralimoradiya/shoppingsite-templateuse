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
