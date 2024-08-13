import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  
  const [btnNameReact,setBtnNameReact]=useState("login");
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
                setBtnNameReact('Logout');
            
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
