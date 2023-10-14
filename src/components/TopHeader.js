import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'

function TopHeader() {
  return (
    <>
         <div className="header_section">
      <div className="container-fluid">
        <Navbar/>
      </div>
      {/* banner section start */}
      <Carousel/>
      {/* banner section end */}
    </div>
    </>
  )
}

export default TopHeader