import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Footer from './Footer'
import EndSection from './EndSection'

function AboutPage() {
  return (
    <>
  <div className="header_section">
    <div className="container-fluid">
      <Navbar/>
    </div>
  </div>
  {/* header section end */}
  {/* about section start */}
  <div className="about_section layout_padding margin_top90">
    <div className="container">
      <About/>
    </div>
  </div>
  {/* about section end */}
  {/* footer section start */}
  <Footer/>
  {/* footer section end */}
  {/* copyright section start */}
 <EndSection/>
  {/* copyright section end */}
</>

  )
}

export default AboutPage