import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className=" row py-5 bg-dark">
      <div className="container">
        <header className="text-center">
          <h2 className=" title_footer d-inline-block text-warning  border-warning p-2 font_sans_pro display-4">
            comfy sloth
          </h2>
        </header>
        <div className="social">
          <div className="icons_social text-center mt-5">
            <NavLink to="#">
              <i className="fab fa-facebook fa-fw text-warning  px-4"></i>
            </NavLink>
            <NavLink to="#">
              <i className="fab fa-twitter fa-fw text-warning  px-4"></i>
            </NavLink>
            <NavLink to="#">
              <i className="fab fa-google fa-fw text-warning  px-4"></i>
            </NavLink>
            <NavLink to="#">
              <i className="fab fa-telegram fa-fw text-warning  px-4"></i>
            </NavLink>
            <NavLink to="#">
              <i className="fab fa-twitter fa-fw text-warning  px-4"></i>
            </NavLink>
          </div>
        </div>
        <div className="text_footer col-md-8 mx-auto text-justify text-sm-left py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
          autem impedit, aliquid dolorum doloribus nesciunt quibusdam laudantium
          quasi illum maiores ex reprehenderit dolores porro voluptatum nam!
          Iusto numquam veniam ipsum.
        </div>
        <div className="row mt-5 text-center flex-wrap">
          <div className="col-md-4 col-6  d-flex justify-content-center">
            <span>
              <i className="fas fa-street-view text-warning"></i>
            </span>
            <p className="px-2  footer_info_address m-0 p-0">
              123 main street, idelb syria
            </p>
          </div>
          <div className="col-md-4 col-6  d-flex justify-content-center">
            <span>
              <i className="fas  fa-phone  text-warning"></i>
            </span>
            <p className="px-2  footer_info_address m-0 p-0">
              123 main street, idelb syria
            </p>
          </div>
          <div className="col-md-4 col-6  d-flex mx-auto justify-content-center mt-4 mt-md-0">
            <span>
              <i className="fab fa-facebook  text-warning "></i>
            </span>
            <p className="px-2  footer_info_address m-0 p-0">
              123 main street, idelb syria
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
