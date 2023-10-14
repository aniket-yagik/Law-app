import React from 'react'
import ServicesCarousel from './ServicesCarousel'

function Services() {
  return (
    <>
         <div className="services_section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="studies_taital">SERVICE OFFERINGS</h1>
          </div>
        </div>
      </div>
       <ServicesCarousel/>
    </div>
    </>
  )
}

export default Services