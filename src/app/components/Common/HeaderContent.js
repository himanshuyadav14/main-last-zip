"use client";
import { useState } from "react";
import Link from "next/link";
import HeaderSideBar from "./HeaderSideBar";
import Image from "next/image";

const HeaderContent = ({ headerData }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="site-header header-style-3">
        <div className="pbmit-header-overlay">
          <div className="pbmit-main-header-area">
            <div className="container">
              <div className="pbmit-header-content d-flex align-items-center justify-content-between">
                <div className="pbmit-logo-area">
                  <div className="site-branding">
                    <h1 className="site-title">
                      <Link href="/">
                        <Image
                          className="logo-img header-logo"
                          src={headerData?.logo_image}
                          alt="header"
                          width={500} // Add appropriate width
                          height={100} // Add appropriate height
                        />
                      </Link>
                    </h1>
                  </div>
                </div>

                <div className="site-navigation">
                  <nav className="main-menu navbar-expand-xl navbar-light">
                    <div className="navbar-header">
                      {/* Toggle Button */}
                      <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleSidebar}
                      >
                        <i className="pbmit-base-icon-menu-1"></i>
                      </button>
                    </div>
                    <div
                      className={`pbmit-mobile-menu-bg ${
                        isSidebarOpen ? "open" : ""
                      }`}
                    ></div>
                    <div
                      className={`collapse navbar-collapse clearfix ${
                        isSidebarOpen ? "show" : ""
                      }`}
                      id="pbmit-menu"
                    >
                      <div className="pbmit-menu-wrap">
                        <span className="closepanel" onClick={toggleSidebar}>
                          <svg
                            className="qodef-svg--close qodef-m"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20.163"
                            height="20.163"
                            viewBox="0 0 26.163 26.163"
                          >
                            <rect
                              width="36"
                              height="1"
                              transform="translate(0.707) rotate(45)"
                            ></rect>
                            <rect
                              width="36"
                              height="1"
                              transform="translate(0 25.456) rotate(-45)"
                            ></rect>
                          </svg>
                        </span>
                        <ul
                          className={`navigation clearfix nav-bar ${
                            isSidebarOpen ? "open" : ""
                          }`}
                        >
                          {headerData?.data?.map((header, index) => (
                            <li key={index}>
                              <Link
                                className="underline-none navigation clearfix"
                                href={header?.page_url}
                                style={{
                                  fontSize: "12px",
                                  marginTop: "17px",
                                }}
                              >
                                {/* <h1
                                  style={{
                                    fontSize: "12px",
                                    marginTop: "17px",
                                  }}
                                  className="navigation clearfix"
                                > */}
                                {header?.page_name}
                                {/* </h1> */}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>

                <div
                  className="pbmit-right-box d-flex align-items-center"
                  style={{ marginRight: "40px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isSidebarOpen && (
        <HeaderSideBar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          headerData={headerData}
        />
      )}
    </>
  );
};

export default HeaderContent;
