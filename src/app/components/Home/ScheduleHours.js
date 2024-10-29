import React from 'react';
import Link from 'next/link';
import axios from 'axios';

import "@/app/styles/aos.css";
import "@/app/styles/base.css";
import "@/app/styles/bootstrap.min.css";
import "@/app/styles/flaticon.css";
import "@/app/styles/fontawesome.css";
import "@/app/styles/magnific-popup.css";
import "@/app/styles/responsive.css";
import "@/app/styles/style.css";
import "@/app/styles/swiper.min.css";
import "@/app/styles/themify-icons.css";


const ScheduleHours = async () => {
  let cards = null;
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
  
    const response = await axios.get(`${url}/smile-dental/homepage_cards`, options);
    
    if (response.status === 200) {
      cards = response.data;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error(error);
  }

  const scheduleHours = cards?.schedule_hours || [];
  const locationCards = cards?.location_cards || [];

  return (
    <section className="section-xl inner-box_area">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 position-relative">
            <div className="pbmit-widget_icon">
              <div className="pbmit_icon">
                <i className="pbmit-xcare-icon pbmit-xcare-icon-appointment"></i>
              </div>
            </div>
            <div className="inner-box_style inner-box_1">
              <div className="pbmit-heading_title">
                <h5>{scheduleHours[0]?.title}</h5>

              </div>
              <ul className="pbmit-timelist-list">
                <li>
                  <span className="pbmit-timelist-li-title">{`${scheduleHours[0]?.start_day} - ${scheduleHours[0]?.end_day}`}</span>
                  <span className="pbmit-timelist-li-value">{`${scheduleHours[0]?.start_time} - ${scheduleHours[0]?.end_time}`}</span>
                </li>
                <li>
                  <span className="pbmit-timelist-li-title">{scheduleHours[1]?.start_day}</span>
                  <span className="pbmit-timelist-li-value">{`${scheduleHours[1]?.start_time} - ${scheduleHours[1]?.end_time}`}</span>
                </li>
                <li>
                  <span className="pbmit-timelist-li-title">{scheduleHours[2]?.start_day}</span>
                  <span className="pbmit-timelist-li-value">{`${scheduleHours[2]?.start_time} - ${scheduleHours[2]?.end_time}`}</span>
                </li>
                <li>
                  <span className="pbmit-timelist-li-title"></span>
                  <span className="pbmit-timelist-li-value"></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 position-relative">
            <div className="pbmit-widget_icon">
              <div className="pbmit_icon">
                <i className="pbmit-xcare-icon pbmit-xcare-icon-placeholder"></i>
              </div>
            </div>
            <div className="inner-box_style inner-box_2">
              <div className="pbmit-heading_title">
                <h5>{locationCards[0]?.card_title}</h5>
              </div>
              <div className="pbmit-text_aditor">
                <p>{locationCards[0]?.card_description1}</p>
              </div>
              <Link href={locationCards[0]?.card_description2}>
                <div className="pbmit-btn pbmit-btn-outline">
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

                    <span className="pbmit-button-text">{locationCards[0]?.card_title}</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 position-relative">
            <div className="pbmit-widget_icon">
              <div className="pbmit_icon">
                <i className="pbmit-xcare-icon pbmit-xcare-icon-doctor"></i>
              </div>
            </div>
            <div className="inner-box_style inner-box_3">
              <div className="pbmit-bg_overlay"></div>
              <div className="pbmit-heading_title">
                <h5>{locationCards[1]?.card_title}</h5>
              </div>
              <div className="pbmit-text_aditor">
              {locationCards[1]?.card_description1}
              </div>
              <div className="pbmit-ihbox-style-19">
                <div className="pbmit-ihbox-box">
                  <div className="pbmit-ihbox-icon">
                    <div className="pbmit-ihbox-icon-wrapper">
                      <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-xcare-icon pbmit-xcare-icon-live-chat"></i>
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ihbox-contents">
                    {/* <h4 className="pbmit-element-heading">Emergency Cases</h4> */}
                    <h2 className="pbmit-element-title">{locationCards[1]?.card_description2}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleHours;
