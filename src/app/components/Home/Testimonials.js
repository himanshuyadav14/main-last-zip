import React from "react";

const Testimonials = async () => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  const options = {
    method: "GET",
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(`${url}/smile-dental/testimonials`, options);

  const testimonials = await response.json();

  return (
    <section className="section-xl">
      <div className="container">
        <div className="position-relative">
          <div className="pbmit-heading-subheading animation-style2">
            <h4 className="pbmit-subtitle">Testimonials</h4>
            <h2 className="pbmit-title">Our happy client say</h2>
          </div>
        </div>
        <div
          className="swiper-slider"
          data-arrows-class="testimonial_arrow"
          data-autoplay="false"
          data-loop="true"
          data-dots="false"
          data-arrows="true"
          data-columns="3"
          data-margin="30"
          data-effect="slide"
        >
          <div className="">
            <div className="row">
              <div className="row">
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                    <article className="pbmit-testimonial-style-1">
                      <div className="pbminfotech-post-item">
                        <div className="pbmit-box-content-wrap">
                          <div className="pbminfotech-box-star-ratings">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <i
                                key={i}
                                className={`pbmit-base-icon-star-1 ${
                                  i < testimonial.client_rating
                                    ? "pbmit-active"
                                    : ""
                                }`}
                              ></i>
                            ))}
                          </div>
                          <div className="pbminfotech-box-desc">
                            <blockquote className="pbminfotech-testimonial-text">
                              <p>{testimonial.client_feedback_description}</p>
                            </blockquote>
                          </div>
                          <div className="pbminfotech-box-author d-flex align-items-center">
                            <div className="pbminfotech-box-img">
                              <div className="pbmit-featured-img-wrapper">
                                <div className="pbmit-featured-wrapper">
                                  <img
                                    src={testimonial.client_image}
                                    className="img-fluid"
                                    alt={testimonial.client_image_alt_text}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="pbmit-auther-content">
                              <h3 className="pbminfotech-box-title">
                                {testimonial.client_name}
                              </h3>
                              <div className="pbminfotech-testimonial-detail">
                                {testimonial.client_feedback}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
