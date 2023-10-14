import React from 'react'

function Footer() {
  return (
    <>
        <div className="footer_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="location_text">
              <ul>
                <li>
                  <a target='_blank' href="https://maps.google.com/">
                    <i className="fa fa-map-marker" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="tel: creates the call link">
                    <i className="fa fa-phone" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a target='_blank' href="https://mail.google.com/?">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_logo">
            <a href="indexz.html">
              <img src="/static/images/logo.png" />
            </a>
          </div>
          <a href="indexz.html"></a>
          <div className="social_icon">
            <a href="indexz.html"></a>
            <ul>
              <a href="indexz.html"></a>
              <li>
                <a href="indexz.html" />
                <a target='_blank' href="https://www.facebook.com/">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a target='_blank' href="https://twitter.com/login?lang=en">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a target='_blank' href="https://in.indeed.com/">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer