// import React from "react";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";

// component
import NavBar from "./NavBar/NavBar.js";
import Products from "./Products/Products.js";
import Home from "./Home/Home.js";
import Store from "./Store/Store.js";
import NotFound from "./notFound/NotFound.js";

import SingleProduct from "./SingleProduct/SingleProduct.js";

// react router
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useParams,
  Router,
  NavLink,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route
            path="SingleProduct/SingleProduct/:id"
            element={<SingleProduct />}
          />
          <Route path="Products/Products" element={<Products />} />
          <Route path="home/Home" element={<Home />} />
          <Route
            path="SingleProduct/SingleProduct"
            element={<SingleProduct />}
          />
          <Route path="Store/Store" element={<Store />} />
          <Route path="Contact/Contact" element={<Store />} />
          {/* <Route path="navbar" element={<NavBar />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
