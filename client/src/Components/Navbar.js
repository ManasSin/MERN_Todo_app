import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        {/* <Link to="/login">
          <h1>Login</h1>
        </Link>
        <Link to="/register">
          <h1>Register</h1>
        </Link> */}
      </div>
    </header>
  );
};

export default Navbar;
