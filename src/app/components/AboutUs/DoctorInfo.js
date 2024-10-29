import React from 'react'
import axios from 'axios';


const DoctorInfo = async () => {
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

    const response = await axios.get(`${url}/smile-dental/about_us/personal_information`, options);

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    var doctorInfo = response.data;
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <div className="page-content">
        <section className="pbmit-team-single pbmit-sticky-section">
          <div className="container">
            <div className="pbmit-team-single-info">
              <div className="row">
                <div className="col-md-12 col-xl-3">
                  <div className="pbmit-sticky-col">
                    <div className="pbmit-team-left-inner">
                      <div className="pbmit-featured-wrapper">
                        <img
                          src={doctorInfo[0].image}
                          className="img-fluid w-100"
                          alt="doctor image"
                        />
                      </div>
                      <div className="pbmit-team-detail">
                        <div className="pbmit-team-detail-inner">
                          <div className="pbmit-team-summary">
                            <h4 className="pbmit-team-designation">{doctorInfo[0].specially}</h4>
                            <h2 className="pbmit-team-title">{doctorInfo[0].name}</h2>
                          </div>
                          <ul className="pbmit-single-team-info">
                            <li>
                              <label>Phone Number :</label>
                              <a href={`tel:${doctorInfo[0].phone_number}`}>{doctorInfo[0].phone_number}</a>
                            </li>
                            <li>
                              <label>Email Address :</label>
                              <a href={`mailto:${doctorInfo[0].email}`}>

                                {doctorInfo[0].email}</a>
                            </li>
                            <li><label>Experience</label>{doctorInfo[0].experience}</li>
                          </ul>
                        </div>
                        <div className="pbmit-team-share-btn">
                          <div className="pbmit-share-icon-wrapper">
                            <span className="pbmit-share-icon">
                              <i className="pbmit-base-icon-share-2"></i>
                            </span>
                            <ul
                              className="pbmit-social-links pbmit-team-social-links"
                            >
                              <li className="pbmit-social-li pbmit-social-facebook">
                                <a href="#" title="Facebook" target="_blank">
                                  <span
                                  ><i className="pbmit-base-icon-facebook-f"></i></span>
                                </a>
                              </li>
                              <li className="pbmit-social-li pbmit-social-twitter">
                                <a href="#" title="Twitter" target="_blank">
                                  <span
                                  ><i className="pbmit-base-icon-twitter-2"></i></span>
                                </a>
                              </li>
                              <li
                                className="pbmit-social-li pbmit-social-instagram"
                              >
                                <a href="#" title="Instagram" target="_blank">
                                  <span
                                  ><i className="pbmit-base-icon-instagram"></i></span>
                                </a>
                              </li>
                              <li className="pbmit-social-li pbmit-social-youtube">
                                <a href="#" title="Youtube" target="_blank">
                                  <span
                                  ><i className="pbmit-base-icon-youtube-play"></i></span>
                                </a>
                              </li>
                            </ul>
                            <div
                              className="pbmit-sticky-corner pbmit-bottom-left-corner"
                            >
                              <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill=""
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M30 30V0C30 16 16 30 0 30H30Z"
                                  fill="red"
                                ></path>
                              </svg>
                            </div>
                            <div
                              className="pbmit-sticky-corner pbmit-top-right-corner"
                            >
                              <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M30 30V0C30 16 16 30 0 30H30Z"
                                  fill="red"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-xl-9">
                  <div className="pbmit-entry-content">
                    <div className="pbmit-heading animation-style2">
                      <h3 className="pbmit-title mb-3">Personal Info</h3>
                    </div>
                    <p className="pbmit-firstletter">
                      {/* {doctorInfo[0].professional_summary} */}
                      <div dangerouslySetInnerHTML={{ __html: doctorInfo[0].professional_summary }} />
                    </p>
                    <div className="text-editor-box">
                      <div className="d-flex">
                        <div className="col-md-4">
                          <h6>Specially : </h6>
                        </div>
                        <div className="col-md-8">
                          <p>{doctorInfo[0].specially}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-editor-box">
                      <div className="d-flex">
                        <div className="col-md-4">
                          <h6>Degrees :</h6>
                        </div>
                        <div className="col-md-8">
                          <p>{doctorInfo[0].degrees}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-editor-box">
                      <div className="d-flex">
                        <div className="col-md-4">
                          <h6>Experience :</h6>
                        </div>
                        <div className="col-md-8">
                          <p>
                            {doctorInfo[0].experience}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default DoctorInfo