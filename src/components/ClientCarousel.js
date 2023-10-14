import React from 'react'
import ClientBox1 from './ClientBox1'
import ClientBox2 from './ClientBox2'

function ClientCarousel() {
  return (
    <>
         <div id="my_slider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="customer_section_2">
              <div className="container">
                <ClientBox1/>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="customer_section_2">
              <div className="container">
                <ClientBox2/>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#my_slider"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-arrow-left" />
        </a>
        <a
          className="carousel-control-next"
          href="#my_slider"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-arrow-right" />
        </a>
      </div>
    </>
  )
}

export default ClientCarousel