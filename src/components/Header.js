import { useState } from "react";


const Header = () => {

  const [logInbtn, setLogInbtn]= useState("Log In");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://static.vecteezy.com/system/resources/previews/009/291/628/original/restaurant-logo-design-vector.jpg"
          alt=""
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
          className="login-btn"
          onClick={()=>{
           logInbtn=== "Log In" ? setLogInbtn("Log Out") : setLogInbtn("Log In")  ;
          }}>
          {logInbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;