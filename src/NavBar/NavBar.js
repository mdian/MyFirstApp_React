// import Nav from "./NavBar.css";
import "./NavBar.css";

import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function NavBar(props) {
  // props.fun('malek')
  return (
    <div>
      {/* <nav classNameName="flex">
        <NavLink to="./home/Home">Home</NavLink>
        <NavLink to="./Products/Products">Products</NavLink>
        <NavLink to="./SingleProduct/SingleProduct">SingleProduct</NavLink>
        <NavLink to="./About/About">About</NavLink>
        <NavLink to="/contact/Contact">Contact</NavLink>
      </nav> */}

      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light font_sans_pro">
          <NavLink
            className="navbar-brand d-inline-block p-1 bg_gray rounded-circle"
            to="/"
          >
            <img
              src="../../images/logo/logo ewith canapa (2).png"
              alt=" furniture logo"
              className="img_logo rounded-circle"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#furnavbar"
            aria-controls="furnavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="furnavbar">
            <ul className="navbar-nav mx-auto d-inline-flex d-lg-flex">
              <li className="nav-item px-4">
                <NavLink className="nav-link pb-0" to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item px-4">
                <NavLink className="nav-link" to="Products/Products">
                  products
                </NavLink>
              </li>
              <li className="nav-item px-4">
                <NavLink className="nav-link" to="SingleProduct/SingleProduct">
                  single Product
                </NavLink>
              </li>
              <li className="nav-item px-4">
                <NavLink className="nav-link" to="Store/Store">
                  store
                </NavLink>
              </li>
            </ul>
            <div className="navbar_icons d-lg-flex   d-none ">
              <NavLink to="#" className="navbar_icon mr-2 text-dark">
                <i className=" fas fa-search fa-fw"></i>
              </NavLink>
              <NavLink to="store.html" className="navbar_icon text-dark">
                <i className=" fas fa-shopping-bag fa-fw"></i>
                <div className="cart_item">0</div>
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
