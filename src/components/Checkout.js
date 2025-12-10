import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { supabase } from "../supabaseClient";
import "./Checkout.css";

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [loading, setLoading] = useState(false);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleOrder = async (e) => {
    e.preventDefault();

    if (!name || !email || !address || !city || !state || !zip) {
      alert("Please fill in all customer details!");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("orders").insert([
      {
        "Full-name": name,
        "Email": email,
        "Address": address,
        "City": city,
        "State": state,
        "Zip/Postal code": zip,
        cart_items: JSON.stringify(cart),
        total_price: totalPrice,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert("❌ Order failed: " + error.message);
    } else {
      alert(`✅ Thank you ${name}! Your order has been placed.`);

      // Reset form & cart
      setCart([]);
      setName(""); setEmail(""); setAddress(""); setCity(""); setState(""); setZip("");
      setPaymentMethod("Credit Card");
    }
  };

  const increaseQty = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 } : item));
  };

  return (
    <div className="checkout-wrapper">
      {/* Left: Customer Details */}
      <div className="checkout-left">
        <h2>Customer Details</h2>

        <div className="input-card">
          <label>Full Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" />
        </div>

        <div className="input-card">
          <label>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        </div>

        <div className="input-card">
          <label>Address</label>
          <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" />
        </div>

        <div className="input-card">
          <label>City</label>
          <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="City" />
        </div>

        <div className="input-card">
          <label>State</label>
          <input type="text" value={state} onChange={e => setState(e.target.value)} placeholder="State" />
        </div>

        <div className="input-card">
          <label>Zip / Postal Code</label>
          <input type="text" value={zip} onChange={e => setZip(e.target.value)} placeholder="Zip / Postal Code" />
        </div>

        <div className="input-card">
          <label>Payment Method</label>
          <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)} className="payment-select">
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>
        </div>

      </div>

      {/* Right: Cart Summary */}
      <div className="checkout-right">
        <h2>Order Summary</h2>

        {cart.length === 0 ? <p>Cart is empty</p> : (
          cart.map(item => (
            <div key={item.id} className="checkout-item">
              <img src={item.image} alt={item.name} />
              <div className="checkout-item-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
              </div>
            </div>
          ))
        )}

        <div className="checkout-total">
          <h3>Total: ${totalPrice}</h3>
          <button onClick={handleOrder} disabled={loading}>
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
