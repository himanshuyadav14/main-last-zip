import React from "react";

const ContactDetails = async () => {

  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${url}/smile-dental/cards/contact_us`, options);
  const cardsData = await response.json();

  return (
    <>
      {/* <!-- Contact Us Content --> */}
      <div className="page-content contact_us">
        {/* <!-- Ihbox --> */}
        <section className="section-xl">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xl-4">
                <div className="pbmit-ihbox-style-15">
                  <div className="pbmit-ihbox-box">
                    <div className="pbmit-icon-wrap d-flex align-items-center">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper">
                          <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                            <i className="pbmit-xcare-icon pbmit-xcare-icon-email"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h1 className="pbmit-element-title">{cardsData[0].card_title}</h1>
                    <div className="pbmit-content-wrapper">
                      <div className="pbmit-heading-desc">
                        <p>
                          <a className="underline-none" href={`tel:${cardsData[0].card_description1}`}>
                            {cardsData[0].card_description1}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ihbox-btn">
                    <a href="#">
                      <span className="pbmit-button-text">Read More</span>
                      <span className="pbmit-button-icon-wrapper">
                        <span className="pbmit-button-icon">
                          <i className="pbmit-base-icon-black-arrow-1"></i>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="pbmit-ihbox-style-15">
                  <div className="pbmit-ihbox-box">
                    <div className="pbmit-icon-wrap d-flex align-items-center">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper">
                          <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                            <i className="pbmit-xcare-icon pbmit-xcare-icon-phone-call"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2 className="pbmit-element-title">{cardsData[1].card_title}</h2>
                    <div className="pbmit-content-wrapper">
                      <div className="pbmit-heading-desc">
                        <a className="underline-none" href={`tel:${cardsData[1].card_description1}`}>{cardsData[1].card_description1}</a>
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ihbox-btn">
                    <a href="#">
                      <span className="pbmit-button-text">Read More</span>
                      <span className="pbmit-button-icon-wrapper">
                        <span className="pbmit-button-icon">
                          <i className="pbmit-base-icon-black-arrow-1"></i>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-xl-4">
                <div className="pbmit-ihbox-style-15">
                  <div className="pbmit-ihbox-box">
                    <div className="pbmit-icon-wrap d-flex align-items-center">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper">
                          <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                            <i className="pbmit-xcare-icon pbmit-xcare-icon-placeholder"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2 className="pbmit-element-title">{cardsData[2].card_title}</h2>
                    <div className="pbmit-content-wrapper">
                      <div className="pbmit-heading-desc">
                      <a className="underline-none" href={`tel:${cardsData[2].card_description2}`}>{cardsData[2].card_description1}</a>

                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ihbox-btn">
                    <a href="#">
                      <span className="pbmit-button-text">Read More</span>
                      <span className="pbmit-button-icon-wrapper">
                        <span className="pbmit-button-icon">
                          <i className="pbmit-base-icon-black-arrow-1"></i>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- Ihbox End --> */}
    </>
  );
};

export default ContactDetails;
