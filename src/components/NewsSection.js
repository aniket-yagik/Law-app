import React from 'react'

function NewsSection() {
  return (
    <>
          <div className="news_section layout_padding">
      <div className="container">
        <h1 className="news_taital">Recent News</h1>
        <div className="news_section_2">
          <div className="news_box">
            <div
              id="custom_slider"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="news_img">
                    <img src="/static/images/news-img.png" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="news_img">
                    <img src="/static/images/news-img.png" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="news_img">
                    <img src="/static/images/news-img.png" />
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-next"
                href="#custom_slider"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-arrow-right" />
              </a>
            </div>
            <h2 className="does_taital">What Does Marijuana Law Mean for You?</h2>
            <p className="dummy_text">
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default NewsSection