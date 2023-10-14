import React from 'react'

function BoxSection() {
  return (
    <>
            <div className="container">
      <div className="box_section">
        <div className="online_box">
          <div className="online_box_left">
            <div className="online_box_main">
              <div className="box_left">
                <div className="right_arrow">
                  <i className="fa fa-arrow-right" />
                </div>
              </div>
              <div className="box_right">
                <p className="book_text">Book At</p>
                <h4 className="appoinment_text">Appoinment</h4>
              </div>
            </div>
          </div>
          <div className="online_box_left active">
            <div className="online_box_main">
              <div className="box_left">
                <div className="right_arrow">
                  <i className="fa fa-arrow-right" />
                </div>
              </div>
              <div className="box_right">
                <p className="book_text active">Get Free</p>
                <h4 className="appoinment_text active"> Evalution</h4>
              </div>
            </div>
          </div>
          <div className="online_box_left">
            <div className="online_box_main">
              <div className="box_left">
                <div className="right_arrow">
                  <i className="fa fa-arrow-right" />
                </div>
              </div>
              <div className="box_right">
                <p className="book_text">Pay Invoice</p>
                <h4 className="appoinment_text">Online</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default BoxSection