import React from "react";
import axios from 'axios';
import Link from "next/link";

const Services = async () => {
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

    const response = await axios.get(`${url}/smile-dental/our_services`, options);

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    var servicesData = response.data;
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <section className="section-xl pbmit-bg-color-global pbmit-extend-animation pbmit-extend-animation service-three_bg">
        <div className="service-three-bg-overlay"></div>
        <div className="container">
          <div className="pbmit-heading-subheading text-white">
            <h4 className="pbmit-subtitle">Our Services</h4>
            <h2 className="pbmit-title">
              High Quality Services <br />
              for You.
            </h2>
          </div>
          <div className="pbmit-element-service-style-5">
            <div className="pbmit-main-hover-slider d-flex align-items-center">
              {/*section images change on hover each service name*/}
              <div className="swiper-hover-slide-images col-md-5 col-lg-5">
                <div className="swiper pbmit-hover-image">
                  <div className="swiper-wrapper">
                    {/*section images change on hover each service name*/}
                    {servicesData.map((service, i) => {
                      return <>
                        <div key={i} className="swiper-slide">
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper">
                              <img
                                src={service.service_image}
                                className="img-fluid"
                                alt="services"
                              />
                            </div>
                          </div>
                          <span className="pbmit-service-icon elementor-icon">
                            <i
                              aria-hidden="true"
                              className="pbmit-xcare-icon pbmit-xcare-icon-gesundheit-1"
                            ></i>
                          </span>
                        </div>
                      </>
                    })}
                  </div>
                </div>
              </div>

              {/** list of services and respective images */}
              <div className="swiper-hover-slide-nav col-md-7 col-lg-7">
                <ul className="pbmit-hover-inner">
                  {servicesData.map((service, index) => {
                    return (
                      <>
                        <li key={index}>
                          <div
                            className="pbmit-title-data-hover"
                            data-text={service.service_name}
                          >
                            <div className="pbmit-featured-img-wrapper">
                              <div className="pbmit-featured-wrapper">
                                <img
                                  src={service.service_image}
                                  className="img-fluid"
                                  alt="services"
                                />
                              </div>
                              {/* <span className="pbmit-service-icon elementor-icon">
                                <i
                                  aria-hidden="true"
                                  className="pbmit-xcare-icon pbmit-xcare-icon-gesundheit-1"
                                ></i>
                              </span> */}
                            </div>
                            <div className="pbmit-text-content d-flex align-items-center">
                              <span className="pbminfotech-box-number">{service.id}</span>
                              <a className="pbmit-title-inner" href="services">
                                <span>{service.service_name}</span>
                              </a>
                              <div className="pbmit-service-btn">
                                <a href="#">
                                  <span className="pbmit-button-icon-wrapper">
                                    <span className="pbmit-button-icon">
                                      <i className="pbmit-base-icon-black-arrow-1"></i>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <Link
                              className="pbmit-link"
                              href={{
                                pathname: "services",
                                query: {
                                  search: `${service.service_name}`,
                                },
                              }}
                            ></Link>
                          </div>
                        </li>
                      </>
                    );
                  })}

                  <li>
                    <a
                      className="pbmit-btn pbmit-btn-white"
                      href="services"
                    >
                      <span className="pbmit-button-content-wrapper">
                        <span
                          className="pbmit-button-icon pbmit-align-icon-right"
                        >
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
                        <span className="pbmit-button-text">View All</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
