import React from "react";
import "./SingleProduct.css";
import { NavLink, useParams } from "react-router-dom";

function SingleProduct() {
  return (
    <div className=" container-fluid">
      <section className="row banner single_prodcut_banner py-5 d-flex align-items-center">
        <div className="banner_content pl-3 pl-md-5 font-weight-bold col-6 mx-auto text-center">
          <h2 className=" banner_header mb-1 text-warning font-weight-bolder display-3">
            comfy sloth
          </h2>
          <h1 className="display-4  banner_text font_sans_pro">
            single product
          </h1>
        </div>
      </section>

      <section className="features text-center mt-5 font_sans_pro">
        <div className="container-fluid px-1 px-md-1">
          <div className="row my-5">
            <aside className="col-3 col-md-3">
              <section className="categories pl-4">
                <h3 className="title_style mb-5">shopping by categories</h3>
                <ul className=" list-unstyled text-left ">
                  <li className="kitchen " id="kitchen">
                    Kitchen
                  </li>
                  <li className="bathroom" id="bathroom">
                    bathroom
                  </li>
                  <li className="living font-weight-bold" id="living">
                    living room
                  </li>
                  <li className="bedroom" id="bedroom">
                    bedroom
                  </li>
                  <li className="patio" id="patio">
                    patio
                  </li>
                </ul>
              </section>
            </aside>

            <div className="col-9 col-md-9 row">
              <div className="col-12 col-md-4 ">
                <div className="img_container p-2 p-md-2 bg-light d-flex align-items-center justify-content-center position-relative">
                  <img
                    src="../../images/products/58f37364a4fa116215a92402.png"
                    alt="product"
                    className=" img-fluid"
                  />
                  <div className="box_items d-inline-flex flex-column  align-items-end">
                    <span className="icon_search_box   text-light bg-dark p-1 d-block w-50">
                      {" "}
                      <i className=" fas fa-search"></i>
                    </span>
                    <NavLink
                      to="#"
                      className="add_btn text-capitalize text-decoration-none btn-warning border-0 rounded-0 btn-sm"
                    >
                      add to card
                    </NavLink>
                  </div>
                </div>
                <h4 className="mt-3">special product</h4>
                <p>
                  {" "}
                  <span className="old_price text-muted">$20.000</span>
                  <strong className="newprice">$100.000</strong>
                </p>
              </div>

              <div className="col-12 col-md-4 ">
                <div className="img_container p-2 p-md-2 bg-light  d-flex align-items-center justify-content-center position-relative">
                  <img
                    src="../../images/products/5bd5988acd5c3005c3d6feb5.png"
                    alt="product"
                    className=" img-fluid"
                  />
                  <div className="box_items d-inline-flex flex-column  align-items-end">
                    <span
                      className="icon_search_box   text-light bg-dark p-1 d-block w-50"
                      data-toggle="modal"
                      data-target="#productModal"
                    >
                      {" "}
                      <i className=" fas fa-search"></i>
                    </span>
                    <NavLink
                      to="#"
                      className="add_btn text-capitalize text-decoration-none btn-warning border-0 rounded-0 btn-sm"
                    >
                      add to card
                    </NavLink>
                  </div>
                </div>
                <h4 className="mt-3">special product</h4>
                <p>
                  {" "}
                  <span className="old_price text-muted">$20.000</span>
                  <strong className="new_price">$100.000</strong>
                </p>
              </div>

              <div className="col-12 col-md-4 ">
                <div className="img_container p-2 p-md-2 bg-light  d-flex align-items-center justify-content-center position-relative">
                  <img
                    src="../../images/products/580b57fcd9996e24bc43c272.png"
                    alt="product"
                    className=" img-fluid"
                  />
                  <div className="box_items d-inline-flex flex-column  align-items-end">
                    <span className="icon_search_box   text-light bg-dark p-1 d-block w-50">
                      {" "}
                      <i className=" fas fa-search"></i>
                    </span>
                    <NavLink
                      to="#"
                      className="add_btn text-capitalize text-decoration-none btn-warning border-0 rounded-0 btn-sm"
                    >
                      add to card
                    </NavLink>
                  </div>
                </div>
                <h4 className="mt-3">special product</h4>
                <p>
                  {" "}
                  <span className="old_price text-muted">$20.000</span>
                  <strong className="newprice">$100.000</strong>
                </p>
              </div>

              <div className="col-12 col-md-4 ">
                <div className="img_container p-2 p-md-2 bg-light  d-flex align-items-center justify-content-center position-relative">
                  <img
                    src="../../images/products/580b57fcd9996e24bc43c272.png"
                    alt="product"
                    className=" img-fluid"
                  />
                  <div className="box_items d-inline-flex flex-column  align-items-end">
                    <span className="icon_search_box   text-light bg-dark p-1 d-block w-50">
                      {" "}
                      <i className=" fas fa-search"></i>
                    </span>
                    <NavLink
                      to="#"
                      className="add_btn text-capitalize text-decoration-none btn-warning border-0 rounded-0 btn-sm"
                    >
                      add to card
                    </NavLink>
                  </div>
                </div>
                <h4 className="mt-3">special product</h4>
                <p>
                  {" "}
                  <span className="old_price text-muted">$20.000</span>
                  <strong className="newprice">$100.000</strong>
                </p>
              </div>

              <div className="col-12 col-md-4 ">
                <div className="img_container p-2 p-md-2 bg-light  d-flex align-items-center justify-content-center position-relative">
                  <img
                    src="../../images/products/580b57fcd9996e24bc43c272.png"
                    alt="product"
                    className=" img-fluid"
                  />
                  <div className="box_items d-inline-flex flex-column  align-items-end">
                    <span className="icon_search_box   text-light bg-dark p-1 d-block w-50">
                      {" "}
                      <i className=" fas fa-search"></i>
                    </span>
                    <NavLink
                      to="#"
                      className="add_btn text-capitalize text-decoration-none btn-warning border-0 rounded-0 btn-sm"
                    >
                      add to card
                    </NavLink>
                  </div>
                </div>
                <h4 className="mt-3">special product</h4>
                <p>
                  {" "}
                  <span className="old_price text-muted">$20.000</span>
                  <strong className="newprice">$100.000</strong>
                </p>
              </div>

              <div className="col-12 col-md-4 ">
                <div className="img_container p-2 p-md-2 bg-light  d-flex align-items-center justify-content-center position-relative">
                  <img
                    src="../../images/products/5bd5988acd5c3005c3d6feb5.png"
                    alt="product"
                    className=" img-fluid"
                  />
                  <div className="box_items d-inline-flex flex-column  align-items-end">
                    <span className="icon_search_box   text-light bg-dark p-1 d-block w-50">
                      {" "}
                      <i className=" fas fa-search"></i>
                    </span>
                    <NavLink
                      to="#"
                      className="add_btn text-capitalize text-decoration-none btn-warning border-0 rounded-0 btn-sm"
                    >
                      add to card
                    </NavLink>
                  </div>
                </div>
                <h4 className="mt-3">special product</h4>
                <p>
                  {" "}
                  <span className="old_price text-muted">$20.000</span>
                  <strong className="newprice">$100.000</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="partners py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto text-center">
              <div
                id="carosalPartner"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active text-center">
                    <img
                      src="../../images/partners/Air Mail Par Avion Logo Icon.png"
                      className="d-block w-50 mx-auto"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../../images/partners/Alfa Romeo HD Logo.png"
                      className="d-block w-50 mx-auto"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../../images/partners/Bears Chicago Nfl Logo.png"
                      className="d-block w-50 mx-auto"
                      alt="..."
                    />
                  </div>
                </div>
                <NavLink
                  className="carousel-control-prev"
                  to="#carosalPartner"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  >
                    <i className="fas fa-arrow-left"></i>
                  </span>
                  <span className="sr-only">Previous</span>
                </NavLink>
                <NavLink
                  className="carousel-control-next"
                  to="#carosalPartner"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </span>
                  <span className="sr-only">Next</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="news text-center mt-5 pt-5 font_sans_pro ">
        <h2 className=" text-uppercase  py-2">newsletters</h2>
        <p className="mb-4 mb-md-4 px-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
          assumenda.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-8 mx-auto text-center">
              <form action="form" className="font_sans_pro">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control text-capitalize"
                    placeholder="Your Email here"
                    aria-label="user email"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-warning font-weight-bold text-capitalize px-4 mt-3"
                >
                  subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="row skills py-5  mt-5 font_sans_pro text-center text-md-left">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 py-3">
              <div className="row">
                <div className="skill_icon py-3 py-md-0 col-md-2 col-12 py-0 text-center">
                  <span>
                    <i className="fas fa-car text-warning  px-4"></i>
                  </span>
                </div>
                <div className=" col-md-10 col-12 px-3">
                  <h3 className="text-uppercase text-white font-weight-bold">
                    free shipping
                  </h3>
                  <p className="skill_text font_sans_pro">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Velit sint nulla ut quae ullam in sed excepturi ea amet quo.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 py-3">
              <div className="row">
                <div className="skill_icon py-3 py-md-0 col-md-2 col-12 py-0 text-center">
                  <span>
                    <i className="fas fa-comment-dollar text-warning  px-4"></i>
                  </span>
                </div>
                <div className=" col-md-10 col-12 px-3">
                  <h3 className="text-uppercase text-white font-weight-bold">
                    price promice
                  </h3>
                  <p className="skill_text font_sans_pro">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Velit sint nulla ut quae ullam in sed excepturi ea amet quo.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 py-3">
              <div className="row">
                <div className="skill_icon py-3 py-md-0 col-md-2 col-12 py-0 text-center">
                  <span>
                    <i className="fas fa-award text-warning  px-4"></i>
                  </span>
                </div>
                <div className=" col-md-10 col-12 px-3">
                  <h3 className="text-uppercase text-white font-weight-bold">
                    free shipping
                  </h3>
                  <p className="skill_text font_sans_pro">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Velit sint nulla ut quae ullam in sed excepturi ea amet quo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}

      
    </div>
  );
}

export default SingleProduct;
