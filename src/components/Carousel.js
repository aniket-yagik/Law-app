import React from 'react'
import { NavLink } from 'react-router-dom'

function Carousel() {
  return (
    <>
        <div className="banner_section layout_padding">
        <div className="container-fluid">
          <div id="banner_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-6">
                    <div className="banner_taital_main">
                      <h1 className="banner_taital">We Provide Law Practice</h1>
                      <p className="banner_text">
                        Cicero, written in 45 BC. This book is a treatise on the
                        theory of ethics, very popular during the Renaissance. The
                        first line of Lorem
                      </p>
                      <div className="readmore_btn active">
                        <a href="#">Read More</a>
                      </div>
                      <div className="started_bt">
                        <NavLink to="/contact">Contact Us</NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="banner_img">
                      <img src="/static/images/banner-img.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6">
                    <div className="banner_taital_main">
                      <h1 className="banner_taital">We Provide Law Practice</h1>
                      <p className="banner_text">
                        Cicero, written in 45 BC. This book is a treatise on the
                        theory of ethics, very popular during the Renaissance. The
                        first line of Lorem
                      </p>
                      <div className="readmore_btn active">
                        <a href="#">Read More</a>
                      </div>
                      <div className="started_bt">
                        <a href="#">Contact Us</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="banner_img">
                      <img src="/static/images/banner-img.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6">
                    <div className="banner_taital_main">
                      <h1 className="banner_taital">We Provide Law Practice</h1>
                      <p className="banner_text">
                        Cicero, written in 45 BC. This book is a treatise on the
                        theory of ethics, very popular during the Renaissance. The
                        first line of Lorem
                      </p>
                      <div className="readmore_btn active">
                        <a href="#">Read More</a>
                      </div>
                      <div className="started_bt">
                        <a href="#">Contact Us</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="banner_img">
                      <img src="/static/images/banner-img.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#banner_slider"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-arrow-left" />
            </a>
            <a
              className="carousel-control-next"
              href="#banner_slider"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel