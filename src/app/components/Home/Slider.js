import React from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Slider = async ({ pageName, showContactButton }) => {
  try {
    const url = process.env.NEXT_PUBLIC_SERVER_URL;
    if (!url) {
      throw new Error("Server URL is not defined");
    }
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      },
    };
    const response = await axios.get(`${url}/smile-dental/carousel`, options);
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    var allSlides = response.data;
    var filteredSlides = allSlides.filter(
      (slide) => slide.page_name === pageName
    );
    console.log("filteredSlides+++++++", filteredSlides);
  } catch (error) {
    console.error(error);
  }
  return (
    <>
      <Head>
        {/* Preload the background image */}
        {/* {filteredSlides[0]?.image && (
          <link rel="preload" href={filteredSlides[0].image} as="image" />
        )} */}
      </Head>
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
            <div className="swiper-slide" key={filteredSlides[0]?.id}>
              <div className="item">
                <div
                  className="pbmit-slider-item"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <div
                    className="pbmit-slider-bg"
                    style={{
                      backgroundImage: `url(${filteredSlides[0]?.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="pbmit-slider-content">
                          <h1 className="pbmit-title">
                            {filteredSlides[0]?.title}
                          </h1>
                          <p className="pbmit-desc">
                            {filteredSlides[0]?.description}
                          </p>

                          {showContactButton && (
                            <div className="pbmit-button">
                              <a
                                className="pbmit-btn pbmit-btn-white"
                                href="/contactus"
                              >
                                <span className="pbmit-button-content-wrapper">
                                  <span className="pbmit-button-icon pbmit-align-icon-right">
                                    {/* SVG Icon */}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
