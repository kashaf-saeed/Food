import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h2 className="logo">Food Point</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
         <li><Link to="/contact">Contact Us</Link></li> {/* New Link */}
      
        <li>
          <Link to="/cart">Cart <span className="cart-count">({cart.length})</span></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
