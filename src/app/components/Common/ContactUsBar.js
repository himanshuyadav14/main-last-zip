import Link from "next/link";
import React from "react";
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import Tiktok from '../../../../public/images/about/tiktok.png';

const ContactUsBar = () => {
  return (
    <>
      <div className="footer-top-section pbmit-bg-color-blackish contact-us-bar">
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-md-8 pbmit-col_1">
              <ul className="pbmit-icon-list-items pbmit-inline-items">
                <li className="pbmit-icon-list-item pbmit-inline-item">
                  <Link className="underline-none" href="/contactus">
                    <span className="pbmit-icon-list-text">Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div> */}


            <div className="col-md-2 pbmit-col_2">
              <div className="pbmit-ihbox-style-13">
                <div className="pbmit-ihbox-box">
                  <XIcon sx={{ fontSize: "40px !important", color: "white", margin: "5px" }} />
                  <div className="pbmit-ihbox-contents">
                    <h2 className="pbmit-element-title">
                      <Link className="underline-none" href="https://x.com/smilecloudfam">Twitter
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 pbmit-col_2">
              <div className="pbmit-ihbox-style-13">
                <div className="pbmit-ihbox-box">
                  <LinkedInIcon sx={{ fontSize: "40px !important", color: "white", margin: "5px" }} />
                  <div className="pbmit-ihbox-contents">
                    <h2 className="pbmit-element-title">
                      <Link className="underline-none" href="https://www.linkedin.com/company/smilecloud-family-dental/">LinkedIn
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 pbmit-col_2">
              <div className="pbmit-ihbox-style-13">
                <div className="pbmit-ihbox-box">
                  <YouTubeIcon sx={{ fontSize: "40px !important", color: "white", margin: "5px" }} />
                  <div className="pbmit-ihbox-contents">
                    <h2 className="pbmit-element-title">
                      <Link className="underline-none" href="https://m.youtube.com/@smilecloudfamilydental">YouTube
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 pbmit-col_2">
              <div className="pbmit-ihbox-style-13">
                <div className="pbmit-ihbox-box">
                  <InstagramIcon sx={{ fontSize: "40px !important", color: "white", margin: "5px" }} />
                  <div className="pbmit-ihbox-contents">
                    <h2 className="pbmit-element-title">
                      <Link className="underline-none" href="https://www.instagram.com/smilecloudfamilydental/">Instagram
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2 pbmit-col_2">
              <div className="pbmit-ihbox-style-13">
                <div className="pbmit-ihbox-box">
                  <FacebookIcon sx={{ fontSize: "40px !important", color: "white", margin: "5px" }} />
                  <div className="pbmit-ihbox-contents">
                    <h2 className="pbmit-element-title">
                      <Link className="underline-none" href="https://www.facebook.com/profile.php?id=61557541169170">Facebook
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2 pbmit-col_2" style={{ paddingLeft: "24px", paddingTop: "10px", paddingBottom: "4px" }}>
              <div className="pbmit-ihbox-style-13">
                <div className="pbmit-ihbox-box">
                  <Image src={Tiktok} alt="blog.blog_image_alt_text" />
                  <div className="pbmit-ihbox-contents">
                    <h2 className="pbmit-element-title" style={{ paddingLeft: "8px" }}>
                      <Link className="underline-none" href="https://www.tiktok.com/@smilecloudfamilydental">Tiktok
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2 pbmit-col_2">
              <div className="pbmit-ihbox-style-13">
                <div className="pbmit-ihbox-box">
                  <AddIcCallIcon sx={{ fontSize: "40px !important", color: "white", margin: "5px" }} />
                  <div className="pbmit-ihbox-contents">
                    <h2 className="pbmit-element-title">
                      <Link className="underline-none" href="+1 (972) 972 4999">+1 (972) 972 4999
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2 pbmit-col_2">
              <div className="pbmit-ihbox-style-13">
                <div className="pbmit-ihbox-box">
                  <MailOutlineIcon sx={{ fontSize: "40px !important", color: "white", margin: "5px" }} />
                  <div className="pbmit-ihbox-contents">
                    <h2 className="pbmit-element-title">
                      <Link className="underline-none" href="mailto:info@smilecloudfamilydental.com"> info@smilecloudfamilydental.com
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>


            {/* <div className="col-md-2 pbmit-col_2">
              <div className="pbmit-ihbox-style-13">
                <div className="pbmit-ihbox-box">
                  <div className="pbmit-ihbox-icon">
                    <div className="pbmit-ihbox-icon-wrapper">
                      <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-xcare-icon pbmit-xcare-icon-phone-call"></i>
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ihbox-contents">
                    <h2 className="pbmit-element-title">
                      <Link className="underline-none" href="tel:+1 (972) 972 4999">+1 (972) 972 4999
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 pbmit-col_3">
              <div className="pbmit-ihbox-style-13">
                <div className="pbmit-ihbox-box">
                  <div className="pbmit-ihbox-icon">
                    <div className="pbmit-ihbox-icon-wrapper">
                      <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-xcare-icon pbmit-xcare-icon-email"></i>
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ihbox-contents">
                    <h2 className="pbmit-element-title">
                      <Link
                        className="underline-none"
                        href="mailto:info@smilecloudfamilydental.com"
                      >
                        info@smilecloudfamilydental.com
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div> */}


          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsBar;
