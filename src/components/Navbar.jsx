import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Talech Frontend Test
        </Link>
        <button
          className={`${classTwo}`}
          onClick={() => setCollapsed(!collapsed)}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${classOne}`} id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/products">
              Product List
            </Link>
            <Link className="nav-item nav-link" to="/products/create">
              Create Product
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
