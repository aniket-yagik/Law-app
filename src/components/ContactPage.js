import React from 'react'
import Navbar from './Navbar'
import ContactSection from './ContactSection'
import Footer from './Footer'
import EndSection from './EndSection'

function ContactPage() {
  return (
    <>
        <>
  <div className="header_section">
    <div className="container-fluid">
     <Navbar/>
    </div>
  </div>
  {/* header section end */}
  {/* contact section start */}
<ContactSection/>
  {/* contact section end */}
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

export default ContactPage