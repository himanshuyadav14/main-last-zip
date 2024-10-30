"use client";
import React, { useEffect } from "react";

const FlexBookLink = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src = "https://d3ivs86j8l3a5r.cloudfront.net/flexBook.js";
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleBookingClick = () => {
    // Ensure the script is loaded before calling initFlexBook
    if (window.initFlexBook) {
      window.initFlexBook("https://flexbook.me/smilecloud/website");
    } else {
      console.error("FlexBook script not loaded");
    }
  };
  return (
    <div className="book-online-btn">
      {/* <a
        href="https://www.zocdoc.com/practice/smilecloud-family-dental-106503?lock=true&isNewPatient=false&referrerType=widget"
        target="_blank"
        title="Smilecloud Family Dental"
        rel="noopener noreferrer" // Important for security reasons
      >
        <img
          src="https://offsiteSchedule.zocdoc.com/images/remote/zd_bookonline_162x48.png?type=bobhtml&monolith_provider_id=106503&practice_id=pt_Jf-AWn_B-USaYnLXz7Bj7B"
          alt="Smilecloud Family Dental"
          title="Smilecloud Family Dental"
          style={{ border: '0', width: "140px" }} // Note the change in style attribute syntax
        />
      </a> */}
      <button
        onClick={handleBookingClick}
        style={{
          border: "none",
          background: "none",
          padding: 0,
          outline: "none",
        }}
      >
        <img
          src="https://offsiteSchedule.zocdoc.com/images/remote/zd_bookonline_162x48.png?type=bobhtml&monolith_provider_id=106503&practice_id=pt_Jf-AWn_B-USaYnLXz7Bj7B"
          alt="Smilecloud Family Dental"
          title="Smilecloud Family Dental"
          style={{ border: "0", width: "140px" }} // Note the change in style attribute syntax
        />
      </button>
    </div>
  );
};

export default FlexBookLink;
