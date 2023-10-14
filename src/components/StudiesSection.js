import React from 'react'
import StuidesBox1 from './StuidesBox1'
import StudiesBox2 from './StudiesBox2'
import StudiesBox3 from './StudiesBox3'

function StudiesSection() {
  return (
    <>
      <div className="studies_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="studies_taital">Recent Case Studies</h1>
          </div>
        </div>
        <div className="studies_section_2">
          <div className="row">
             <StuidesBox1/>
             <StudiesBox2/>
             <StudiesBox3/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default StudiesSection