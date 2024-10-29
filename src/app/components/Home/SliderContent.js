"use client";
import React, { useEffect, useState } from "react";

function SliderContent({ sliderData }) {
  const [slides, setSlides] = useState([]);
  if (slides.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pbmit-slider-area pbmit-slider-three">
      <div
        className="swiper-slider"
        data-autoplay="false"
        data-loop="true"
        data-dots="true"
        data-arrows="false"
        data-columns="1"
        data-margin="0"
        data-effect="fade"
      >
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div className="swiper-slide" key={index}>
              <div className="item">
                <div className="pbmit-slider-item">
                  <div
                    className="pbmit-slider-bg"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="pbmit-slider-content">
                          <h1 className="pbmit-title">{slide.title}</h1>
                          <p className="pbmit-desc">{slide.description}</p>
                          {showContactButton && (
                            <div className="pbmit-button">
                              <a
                                className="pbmit-btn pbmit-btn-white"
                                href="/contactus"
                              >
                                <span className="pbmit-button-content-wrapper">
                                  <span className="pbmit-button-icon pbmit-align-icon-right">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="22.76"
                                      height="22.76"
                                      viewBox="0 0 22.76 22.76"
                                    >
                                      <title>black-arrow</title>
                                      <path
                                        d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1"
                                        transform="translate(-0.29 -0.29)"
                                        fill="none"
                                        stroke="#000"
                                        strokeWidth="2"
                                      ></path>
                                      <path
                                        d="M22.34,1a14.67,14.67,0,0,0,0,20.75"
                                        transform="translate(-0.29 -0.29)"
                                        fill="none"
                                        stroke="#000"
                                        strokeWidth="2"
                                      ></path>
                                      <path
                                        d="M22.34,1,1,22.34"
                                        transform="translate(-0.29 -0.29)"
                                        fill="none"
                                        strokeWidth="2"
                                      ></path>
                                    </svg>
                                  </span>
                                  <span className="pbmit-button-text">
                                    Contact us
                                  </span>
                                </span>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SliderContent;
