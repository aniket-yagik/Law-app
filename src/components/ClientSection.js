import React from 'react'
import ClientCarousel from './ClientCarousel'

function ClientSection() {
  return (
    <>
         <div className="customer_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="customer_taital">SATISFIED CLIENT Says</h1>
          </div>
        </div>
      </div>
     <ClientCarousel/>
    </div>
    </>
  )
}

export default ClientSection