import React from 'react'
import ServicesBox1 from './ServicesBox1'
import ServicesBox2 from './ServicesBox2'
import ServicesBox3 from './ServicesBox3'

function ServicesCarousel() {
  return (
    <div className="services_section_2">
    <div id="main_slider" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="row">
              <ServicesBox1/>
              <ServicesBox2/>
              <ServicesBox3/>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="row">
              <ServicesBox1/>
              <ServicesBox2/>
              <ServicesBox3/>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#main_slider"
        role="button"
        data-slide="prev"
      >
        <i className="fa fa-arrow-left" />
      </a>
      <a
        className="carousel-control-next"
        href="#main_slider"
        role="button"
        data-slide="next"
      >
        <i className="fa fa-arrow-right" />
      </a>
    </div>
  </div>
  )
}

export default ServicesCarousel