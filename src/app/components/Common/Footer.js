import React from "react";
import Image from "next/image";
import Link from "next/link";

import "@/app/styles/aos.css";
import "@/app/styles/base.css";
import "@/app/styles/bootstrap.min.css";
import "@/app/styles/flaticon.css";
import "@/app/styles/fontawesome.css";
import "@/app/styles/magnific-popup.css";
import "@/app/styles/responsive.css";
import "@/app/styles/style.css";
import "@/app/styles/shortcode.css";
import "@/app/styles/swiper.min.css";
import "@/app/styles/themify-icons.css";

const Footer = async () => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  const options = {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(`${url}/smile-dental/footer`, options);
  const footerData = await response.json();

  return (
    <footer className="site-footer">
      <div className="pbmit-footer-big-area-wrapper">
        <div className="footer-wrap pbmit-footer-big-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-xl-4"></div>
              <div className="col-md-12 col-xl-8 pbmit-footer-right">
                <h3 className="pbmit-title">{footerData[0].title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pbmit-footer-widget-area">
        <div className="container">
          <div className="row">
            <div className="pbmit-footer-widget-col-1 col-md-6 col-lg-3">
              <aside className="widget widget_text">
                <div className="">
                  <div className="pbmit-footer-logo">
                    <img
                      src={footerData[0].image}
                      alt={footerData[0].image_alt_text}
                    />
                  </div>

                  <div className="pbmit-footer-text">
                    {footerData[0].description}
                  </div>
                </div>
              </aside>
            </div>
            <div className="pbmit-footer-widget-col-2 col-md-6 col-lg-3">
              <div className="widget">
                <h2 className="widget-title">Useful Link</h2>
                <div className="textwidget">
                  <ul>
                    <li>
                      <Link href="/aboutus">About Us</Link>
                    </li>
                    <li>
                      <Link href="/contactus">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/blogs">Blogs</Link>
                    </li>
                    <li>
                      <Link href="/new-patients">New Patients</Link>
                    </li>
                    <li>
                      <Link href="/insurance">Insurance</Link>
                    </li>
                    <li>
                      <Link href="/implants">Implants</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pbmit-footer-widget-col-3 col-md-6 col-lg-3">
              <div className="widget">
                <h2 className="widget-title">Hours</h2>
                <div className="pbmit-timelist-wrapper">
                  <ul className="pbmit-timelist-list">
                    <li>
                      <span className="pbmit-timelist-li-title">
                        Monday: 9:00 AM – 4:00 PM
                      </span>
                    </li>
                    <li>
                      <span className="pbmit-timelist-li-title">
                        Tuesday: 9:00 AM – 4:00 PM
                      </span>
                    </li>
                    <li>
                      <span className="pbmit-timelist-li-title">
                        Wednesday: 9:00 AM – 4:00 PM
                      </span>
                    </li>
                    <li>
                      <span className="pbmit-timelist-li-title">
                        Thursday: 9:00 AM – 4:00 PM
                      </span>
                    </li>
                    <li>
                      <span className="pbmit-timelist-li-title">
                        Saturday: 9:00 AM – 4:00 PM
                      </span>
                    </li>
                    <li>
                      <span className="pbmit-timelist-li-title">
                        Sunday: Closed
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pbmit-footer-widget-col-4 col-md-6 col-lg-3">
              <aside className="widget">
                <h2 className="widget-title">Our address</h2>
                <div className="pbmit-contact-widget-line pbmit-contact-widget-address">
                  <span>
                    <Link
                      className="underline-none"
                      href="https://maps.app.goo.gl/aJBzoFW2Pc4M4vKj9"
                    >
                      2750 West Northwest Hwy, Suite 210,
                      <br />
                      Dallas, TX 75220
                    </Link>
                  </span>
                  <p style={{ marginBottom: "0.2rem" }}>
                    <Link
                      className="underline-none"
                      href="tel:+1 (972) 972 4999"
                    >
                      +1 (972) 972 4999
                    </Link>
                  </p>
                  <p>
                    <Link
                      className="underline-none"
                      href="mailto:info@smilecloudfamilydental.com"
                    >
                      info@smilecloudfamilydental.com
                    </Link>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div className="pbmit-footer-text-area">
        <div className="container">
          <div className="pbmit-footer-text-inner">
            <div className="row">
              <div className="col-md-6">
                <div className="pbmit-footer-copyright-text-area">
                  Copyright © 2024 <Link href="#">Smile Dental</Link>
                </div>
              </div>
              <div className="col-md-6">
                <ul className="pbmit-footer-menu">
                  <li className="menu-item">
                    <Link href="#">Terms and conditions</Link>
                  </li>
                  <li className="menu-item">
                    <Link href="#">Privacy policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
