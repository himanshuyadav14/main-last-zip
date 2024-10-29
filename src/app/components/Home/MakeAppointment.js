import Link from 'next/link'
import Image from 'next/image';
import React from 'react'

const MakeAppointment = async () => {

  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  const options = {
    method: "GET",
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(`${url}/smile-dental/make_appointment`, options);
  const appointmentData = await response.json();

  return (
    <>

        <section>
          <div className="container">
            <div className="ihbox-style-17_bg pbmit-bg-color-secondary">
              <div className="pbmit-ihbox-style-17">
                <div className="pbmit-ihbox-box">
                  <div className="pbmit-ihbox-icon">
                    <div className="pbmit-ihbox-icon-wrapper">
                      <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                        {/* <i
                          className="pbmit-xcare-icon pbmit-xcare-icon-appointment"
                        ></i> */}
                        <img className="appointment-section-icon" 
                        src={appointmentData[0]?.image} 
                        alt="appointment" 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ihbox-contents">
                    <h2 className="pbmit-element-title">
                      {appointmentData[0]?.heading}
                    </h2>
                    <h4 className="pbmit-element-heading">
                    {appointmentData[0]?.description}
                    </h4>
                  </div>
                  <div className="pbmit-ihbox-btn">
                    <Link href="/contactus">
                      <span className="pbmit-button-text">Make Appoinment</span>
                      <span className="pbmit-button-icon-wrapper">
                        <span className="pbmit-button-icon">
                          <i className="pbmit-base-icon-black-arrow-1"></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default MakeAppointment