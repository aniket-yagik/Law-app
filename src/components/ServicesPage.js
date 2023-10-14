import React from 'react'
import Services from './Services'
import Navbar from './Navbar'
import EndSection from './EndSection'
import Footer from './Footer'
import ServicesCarousel from './ServicesCarousel'

function ServicesPage() {
  return (
    <>
        <>
  <div className="header_section">
    <div className="container-fluid">
      <Navbar/>
    </div>
  </div>
  {/* header section end */}
  {/* services section start */}
  <div className="services_section margin_top90">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="studies_taital">SERVICE OFFERINGS</h1>
        </div>
      </div>
    </div>
     <ServicesCarousel/>
  </div>
  {/* services section end */}
  {/* footer section start */}
  <Footer/>
  {/* footer section end */}
  {/* copyright section start */}
<EndSection/>
  {/* copyright section end */}
</>

    </>
  )
}

export default ServicesPage