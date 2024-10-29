import React from "react";
import axios from "axios";
import Link from "next/link";

const AboutUs = async () => {
  try {
    const url = process.env.NEXT_PUBLIC_SERVER_URL;
    if (!url) {
      throw new Error("Server URL is not defined");
    }

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    };

    const response = await axios.get(`${url}/smile-dental/about_us`, options);

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    var aboutUsData = response.data;
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      <div className="container">
        <div className="row g-0 align-items-center">
          <div className="col-md-12 col-lg-6">
            <div className="about-us-three_leftbox">
              <div className="pbmit-heading-subheading">
                <h4 className="pbmit-subtitle">About Us</h4>
                <h2 className="pbmit-title">{aboutUsData[0]?.title}</h2>
                <div
                  className="pbmit-heading-desc"
                  dangerouslySetInnerHTML={{ __html: aboutUsData[0]?.description }}
                />

                <Link className="pbmit-btn" href="/aboutus">
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
                          stroke="#000"
                          strokeWidth="2"
                        ></path>
                      </svg>
                    </span>
                    <span className="pbmit-button-text">Know More</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>



          <div className="col-md-12 col-lg-6">
            <div className="about-us-three_imgbox">
              <div className="about-img_1">
                <img
                  src={aboutUsData[0]?.front_image}
                  className="img-fluid"
                  alt={aboutUsData[0]?.front_image_alt_text}
                />
              </div>
              <div className="about-img_2">
                <img
                  src={aboutUsData[0]?.back_image}
                  className="img-fluid"
                  alt={aboutUsData[0]?.back_image_alt_text}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
