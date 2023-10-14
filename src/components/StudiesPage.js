import React from 'react'
import Navbar from './Navbar'
import StudiesSection from './StudiesSection'
import Footer from './Footer'
import EndSection from './EndSection'

function StudiesPage() {
  return (
    <>
        <>
  <div className="header_section">
    <div className="container-fluid">
      <Navbar/>
    </div>
  </div>
  {/* header section end */}
  {/* studies section start */}
    <StudiesSection/>
  {/* studies section end */}
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

export default StudiesPage