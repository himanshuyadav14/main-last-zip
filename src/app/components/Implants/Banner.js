import React from "react";

const Banner = () => {
    return (<>
        <div className="pbmit-title-bar-wrapper">
            <div className="container">
                <div className="pbmit-title-bar-content">
                    <div className="pbmit-title-bar-content-inner">
                        <div className="pbmit-tbar">
                            <div className="pbmit-tbar-inner container">
                                <h1 className="pbmit-tbar-title">Implants</h1>
                            </div>
                        </div>
                        <div className="pbmit-breadcrumb">
                            <div className="pbmit-breadcrumb-inner">
                                <span>
                                    <a href="/" className="home"><span>SmileCloud Family Dental</span></a>
                                </span>
                                <span className="sep">
                                    <i className="pbmit-base-icon-angle-double-right"></i>
                                </span>
                                <span>
                                    <span className="post-root post post-post current-item">Implants</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
};

export default Banner