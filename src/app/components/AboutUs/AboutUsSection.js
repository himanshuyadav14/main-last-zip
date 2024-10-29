import React from 'react'
import axios from 'axios';

const AboutUsSection = async () => {
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
    <>
      <section>
        <div className="container">
          <div className="row g-0 align-items-center">
            <div className="col-md-12 col-xl-6">
              <div className="about-one_img">
                <iframe
                    width="100%"
                    height="515"
                    src={"https://www.youtube.com/embed/iZLczvrqvX8"}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
              </div>
            </div>
            <div className="col-md-12 col-xl-6">
              <div className="about-one-rightbox">
                <div className="pbmit-heading-subheading animation-style3">
                  <h4 className="pbmit-subtitle">About Us</h4>
                  <h2 className="pbmit-title">{aboutUsData[0]?.title}</h2>
                  <div
                  className="pbmit-heading-desc"
                  dangerouslySetInnerHTML={{ __html: aboutUsData[0]?.description }}
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUsSection