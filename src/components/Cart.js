import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const increaseQty = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 } : item));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-container">
      
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">

            {/* 👇 IMAGE ADDED */}
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-img"
            />

            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>${item.price}</p>

              <div className="qty-controls">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>

          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="cart-total">
          <h3>Total: ${total}</h3>
          <button onClick={() => navigate("/checkout")}>Checkout</button>
        </div>
      )}

    </div>
  );
};

export default Cart;
