"use client"
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Image from 'next/image';

import image1 from "../../../../public/images/insurence/1.png"
import image2 from "../../../../public/images/insurence/2.png"
import image3 from "../../../../public/images/insurence/3.png"
import image4 from "../../../../public/images/insurence/4.png"
import image5 from "../../../../public/images/insurence/5.png"
import image6 from "../../../../public/images/insurence/6.png"
import image7 from "../../../../public/images/insurence/7.png"
import image8 from "../../../../public/images/insurence/8.png"
import image9 from "../../../../public/images/insurence/9.png"
import image10 from "../../../../public/images/insurence/10.png"
import image11 from "../../../../public/images/insurence/11.png"
import image12 from "../../../../public/images/insurence/12.png"
import image13 from "../../../../public/images/insurence/13.png"
import image15 from "../../../../public/images/insurence/15.jpg"

export default function OtherLinkContent({ testimonials }) {
    const url = process.env.NEXT_PUBLIC_SERVER_URL; // Ensure this points to your backend server

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone_number: "",
        subject: "",
        message: "",
    });

    // Notification settings
    const showAlertImplants = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    const showSuccessimplants = (message) => {
        toast.info(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${url}/smile-dental/inquiry_form`,
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status >= 200 && response.status < 300) {
                setFormData({
                    name: "",
                    email: "",
                    phone_number: "",
                    subject: "",
                    message: "",
                });

                showSuccessimplants("Form submitted successfully!");
            } else {
                showAlertImplants("Failed to submit the form. Please try again.");
            }
        } catch (error) {
            showAlertImplants("An error occurred. Please try again.");
            console.error(error);
        }
    };

    return (
        <>
            <section className="portfolio_single site_content">
                <div className="container">
                    <article className="pbmit-portfolio-single">

                        <div className="pbmit-pf-entry-content">
                            <div className="pbmit-heading animation-style2">
                                <h1 className="pbmit-title mb-3">Advantage of Dental Implants</h1>
                            </div>

                            <div className="ihbox-style-18_box">
                                <div className="row">
                                    <article className="pbmit-miconheading-style-18 col-md-6 col-lg-3">
                                        <div className="pbmit-ihbox-style-18">
                                            <div className="pbmit-ihbox-headingicon">
                                                <div className="pbmit-icon-wrap">
                                                    <div className="pbmit-ihbox-wrapper">
                                                        <div className="pbmit-ihbox-icon-type-image">
                                                            <Image src={image1} alt="Compassionate Staff" style={{width: "150px", height: "150px"}}/>
                                                        </div>
                                                    </div>
                                                    <div className="pbmit-ihbox-box-number">01</div>
                                                </div>
                                                <div className="pbmit-ihbox-contents">
                                                    <h2 className="pbmit-element-title">
                                                        Replaces Both Root & Crown
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="pbmit-miconheading-style-18 col-md-6 col-lg-3">
                                        <div className="pbmit-ihbox-style-18">
                                            <div className="pbmit-ihbox-headingicon">
                                                <div className="pbmit-icon-wrap">
                                                    <div className="pbmit-ihbox-wrapper">
                                                        <div className="pbmit-ihbox-icon-type-image">
                                                            <Image src={image2} alt="Modern Digital Technology" style={{width: "150px", height: "150px"}}/>
                                                        </div>
                                                    </div>
                                                    <div className="pbmit-ihbox-box-number">02</div>
                                                </div>
                                                <div className="pbmit-ihbox-contents">
                                                    <h2 className="pbmit-element-title">
                                                        Prevent Collapse Of Facial Structure
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="pbmit-miconheading-style-18 col-md-6 col-lg-3">
                                        <div className="pbmit-ihbox-style-18">
                                            <div className="pbmit-ihbox-headingicon">
                                                <div className="pbmit-icon-wrap">
                                                    <div className="pbmit-ihbox-wrapper">
                                                        <div className="pbmit-ihbox-icon-type-image">
                                                            <Image src={image3} alt="Extended Hours" style={{width: "150px", height: "150px"}}/>
                                                        </div>
                                                    </div>
                                                    <div className="pbmit-ihbox-box-number">03</div>
                                                </div>
                                                <div className="pbmit-ihbox-contents">
                                                    <h2 className="pbmit-element-title">
                                                        Good Nutrition And Oral Health
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                </div>

                            </div>


                            <div className="pbmit-heading animation-style2">
                                <h3 className="pbmit-title mb-3">Dental Implants</h3>
                            </div>
                            <p className="pbmit-firstletter">A dental implant is a titanium post that replaces the root of the tooth. It is surgically positioned into the jawbone beneath the gum line that allows your dentist to mount replacement teeth, a bridge, and even dentures over the top of them. The titanium post fuses with your own natural bone to make a very solid foundation. Implants are very strong. They can last your entire life if maintained properly with good home care and regular visits to your Dentist.</p>
                            <p>The benefits of having implants are they can give your back your smile if you are missing teeth, making sure you are not self conscious and keep on smiling. Proper nutrition is vital as we age and without implants dentures can prove very difficult to eat with. Stabilizing the teeth with dental implants can make a world of difference in someone’s quality of life and overall health.</p>
                            <p>The procedure itself is easier then having a tooth removed, and since it can last your entire life its actually cheaper then a bridge or a Denture that has to be replaced every 7-10 years.</p>
                            <p>Missing teeth can be embarrassing, and left untreated, will only get worse. You can look and feel great, regain your quality of life, and simply smile more with Dental Implants.</p>
                            <div className="project-single-img_box">
                                <div className="row" style={{ backgroundColor: "cadetblue" }}>
                                    <div className="col-md-6" >
                                        <div
                                            // className="pbmit-animation-style1"
                                            style={{
                                                position: 'relative',
                                                backgroundColor: "cadetblue",
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                height: '100%', // Ensure the div covers the whole area
                                                minHeight: '300px', // Ensures the div has some height if content doesn't provide it
                                            }}
                                        >
                                            <Image
                                                src={image12}
                                                className="img-fluid"
                                                alt=""
                                                style={{
                                                    position: 'relative',
                                                    zIndex: 1,
                                                    width: '100%', // Make sure the image fits within the div
                                                    height: 'auto', // Maintain aspect ratio
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div 
                                        // className="pbmit-animation-style2"
                                        >
                                            <Image src={image13} className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pbmit-heading animation-style2">
                                <h2 className="pbmit-title mb-3">Why Choose Smilecloud Family Dental?</h2>
                            </div>

                            <div className="ihbox-style-18_box">
                                <div className="row">
                                    <article className="pbmit-miconheading-style-18 col-md-6 col-lg-3">
                                        <div className="pbmit-ihbox-style-18">
                                            <div className="pbmit-ihbox-headingicon">
                                                <div className="pbmit-icon-wrap">
                                                    <div className="pbmit-ihbox-wrapper">
                                                        <div className="pbmit-ihbox-icon-type-image">
                                                            <Image src={image4} alt="Compassionate Staff" style={{width: "150px", height: "150px"}}/>
                                                        </div>
                                                    </div>
                                                    <div className="pbmit-ihbox-box-number">01</div>
                                                </div>
                                                <div className="pbmit-ihbox-contents">
                                                    <h2 className="pbmit-element-title">
                                                        Highly Qualified and Compassionate Staff
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="pbmit-miconheading-style-18 col-md-6 col-lg-3">
                                        <div className="pbmit-ihbox-style-18">
                                            <div className="pbmit-ihbox-headingicon">
                                                <div className="pbmit-icon-wrap">
                                                    <div className="pbmit-ihbox-wrapper">
                                                        <div className="pbmit-ihbox-icon-type-image">
                                                            <Image src={image5} alt="Modern Digital Technology" style={{width: "150px", height: "150px"}}/>
                                                        </div>
                                                    </div>
                                                    <div className="pbmit-ihbox-box-number">02</div>
                                                </div>
                                                <div className="pbmit-ihbox-contents">
                                                    <h2 className="pbmit-element-title">
                                                        Modern Digital Technology
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="pbmit-miconheading-style-18 col-md-6 col-lg-3">
                                        <div className="pbmit-ihbox-style-18">
                                            <div className="pbmit-ihbox-headingicon">
                                                <div className="pbmit-icon-wrap">
                                                    <div className="pbmit-ihbox-wrapper">
                                                        <div className="pbmit-ihbox-icon-type-image">
                                                            <Image src={image6} alt="Extended Hours" style={{width: "150px", height: "150px"}}/>
                                                        </div>
                                                    </div>
                                                    <div className="pbmit-ihbox-box-number">03</div>
                                                </div>
                                                <div className="pbmit-ihbox-contents">
                                                    <h2 className="pbmit-element-title">
                                                        Extended Hours, Mornings and Evenings
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="pbmit-miconheading-style-18 col-md-6 col-lg-3">
                                        <div className="pbmit-ihbox-style-18">
                                            <div className="pbmit-ihbox-headingicon">
                                                <div className="pbmit-icon-wrap">
                                                    <div className="pbmit-ihbox-wrapper">
                                                        <div className="pbmit-ihbox-icon-type-image">
                                                            <Image src={image7} alt="Get Cure & Relief" style={{width: "150px", height: "150px"}}/>
                                                        </div>
                                                    </div>
                                                    <div className="pbmit-ihbox-box-number">04</div>
                                                </div>
                                                <div className="pbmit-ihbox-contents">
                                                    <h2 className="pbmit-element-title">
                                                        5 Star Reviews On Google and Yelp
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="row">
                                    <article className="pbmit-miconheading-style-18 col-md-6 col-lg-3">
                                        <div className="pbmit-ihbox-style-18">
                                            <div className="pbmit-ihbox-headingicon">
                                                <div className="pbmit-icon-wrap">
                                                    <div className="pbmit-ihbox-wrapper">
                                                        <div className="pbmit-ihbox-icon-type-image">
                                                            <Image src={image8} alt="Compassionate Staff" style={{width: "150px", height: "150px"}}/>
                                                        </div>
                                                    </div>
                                                    <div className="pbmit-ihbox-box-number">05</div>
                                                </div>
                                                <div className="pbmit-ihbox-contents">
                                                    <h2 className="pbmit-element-title">
                                                        Precision Quality Dentistry
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="pbmit-miconheading-style-18 col-md-6 col-lg-3">
                                        <div className="pbmit-ihbox-style-18">
                                            <div className="pbmit-ihbox-headingicon">
                                                <div className="pbmit-icon-wrap">
                                                    <div className="pbmit-ihbox-wrapper">
                                                        <div className="pbmit-ihbox-icon-type-image">
                                                            <Image src={image9} alt="Modern Digital Technology" style={{width: "150px", height: "150px"}}/>
                                                        </div>
                                                    </div>
                                                    <div className="pbmit-ihbox-box-number">06</div>
                                                </div>
                                                <div className="pbmit-ihbox-contents">
                                                    <h2 className="pbmit-element-title">
                                                        Enjoy Netflix For Procedures
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="pbmit-miconheading-style-18 col-md-6 col-lg-3">
                                        <div className="pbmit-ihbox-style-18">
                                            <div className="pbmit-ihbox-headingicon">
                                                <div className="pbmit-icon-wrap">
                                                    <div className="pbmit-ihbox-wrapper">
                                                        <div className="pbmit-ihbox-icon-type-image">
                                                            <Image src={image10} alt="Extended Hours" style={{width: "150px", height: "150px"}}/>
                                                        </div>
                                                    </div>
                                                    <div className="pbmit-ihbox-box-number">07</div>
                                                </div>
                                                <div className="pbmit-ihbox-contents">
                                                    <h2 className="pbmit-element-title">
                                                        Free Teeth Whitening For Life
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="pbmit-miconheading-style-18 col-md-6 col-lg-3">
                                        <div className="pbmit-ihbox-style-18">
                                            <div className="pbmit-ihbox-headingicon">
                                                <div className="pbmit-icon-wrap">
                                                    <div className="pbmit-ihbox-wrapper">
                                                        <div className="pbmit-ihbox-icon-type-image">
                                                            <Image src={image11} alt="Get Cure & Relief" style={{width: "150px", height: "150px"}}/>
                                                        </div>
                                                    </div>
                                                    <div className="pbmit-ihbox-box-number">08</div>
                                                </div>
                                                <div className="pbmit-ihbox-contents">
                                                    <h2 className="pbmit-element-title">
                                                        Dental Insurance Maximisation
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>

                            <div className="pbmit-ihbox-style-21">
                                <div className="pbmit-ihbox-headingicon">
                                    <div className="pbmit-ihbox-contents">
                                        <h2 className="pbmit-element-title">
                                            Our Lowest Bundle Price $2799* includes implant, abutment and crown
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="project-single-img_box">
                            <div className="row" style={{ marginTop: "30px" }}>
                                <div className="col-md-6">
                                    <div 
                                    // className="pbmit-animation-style1"
                                    >
                                        <Image src={image15} className="img-fluid" alt="" style={{ borderRadius: '8px' }} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div 
                                    // className="pbmit-animation-style2" 
                                    style={{ padding: '20px', borderRadius: '8px', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}>
                                        <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '15px', textTransform: 'uppercase' }}>Discover The Dental Clinic</h2>
                                        <p style={{ fontSize: '20px', lineHeight: '1.6', color: '#666' }}>We work with you at every step of the process to ensure complete satisfaction and a smile you would love. We offer a full range of cosmetic services at very affordable prices.</p>
                                        <ul style={{ marginTop: '15px', paddingLeft: '20px', listStyleType: 'disc', color: '#666' }}>
                                            <li>Single Implant</li>
                                            <li>Multiple Implants</li>
                                            <li>Implant Retained Dentures</li>
                                            <li>Overdentures &amp; Bridges</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <section className="section-xl">
                            <div className="container">
                                <div className="position-relative">
                                    <div className="pbmit-heading-subheading animation-style2">
                                        <h2 className="pbmit-title">Our happy client say</h2>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slider"
                                    data-arrows-class="testimonial_arrow"
                                    data-autoplay="false"
                                    data-loop="true"
                                    data-dots="false"
                                    data-arrows="true"
                                    data-columns="3"
                                    data-margin="30"
                                    data-effect="slide"
                                >
                                    <div className="">
                                        <div className="row">
                                            <div className="row">
                                                {testimonials.slice(0, 3).map((testimonial, index) => (
                                                    <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                                        <article className="pbmit-testimonial-style-1">
                                                            <div className="pbminfotech-post-item">
                                                                <div className="pbmit-box-content-wrap">
                                                                    <div className="pbminfotech-box-star-ratings">
                                                                        {Array.from({ length: 5 }).map((_, i) => (
                                                                            <i
                                                                                key={i}
                                                                                className={`pbmit-base-icon-star-1 ${i < testimonial.client_rating
                                                                                    ? "pbmit-active"
                                                                                    : ""
                                                                                    }`}
                                                                            ></i>
                                                                        ))}
                                                                    </div>
                                                                    <div className="pbminfotech-box-desc">
                                                                        <blockquote className="pbminfotech-testimonial-text">
                                                                            <p>{testimonial.client_feedback_description}</p>
                                                                        </blockquote>
                                                                    </div>
                                                                    <div className="pbminfotech-box-author d-flex align-items-center">
                                                                        <div className="pbminfotech-box-img">
                                                                            <div className="pbmit-featured-img-wrapper">
                                                                                <div className="pbmit-featured-wrapper">
                                                                                    <img
                                                                                        src={testimonial.client_image}
                                                                                        className="img-fluid"
                                                                                        alt={testimonial.client_image_alt_text}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="pbmit-auther-content">
                                                                            <h3 className="pbminfotech-box-title">
                                                                                {testimonial.client_name}
                                                                            </h3>
                                                                            <div className="pbminfotech-testimonial-detail">
                                                                                {testimonial.client_feedback}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="appointment_box">
                            <h4 className="text-center mb-3">Request Your FREE Consult</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Your Name *" name="name" required value={formData.name} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" className="form-control" placeholder="Your Email *" name="email" required value={formData.email} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="tel" className="form-control" placeholder="Your Phone *" name="phone_number" required value={formData.phone_number} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="Subject *" name="subject" required value={formData.subject} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea name="message" cols="40" rows="10" className="form-control" placeholder="
Tell Us More About What You're Looking For..." required value={formData.message} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="col-md-12">
                                        <button type="submit" className="pbmit-btn">
                                            <span className="pbmit-button-text">Yes I want New Smile</span>
                                            <span className="pbmit-button-icon-wrapper">
                                                <span className="pbmit-button-icon">
                                                    <i className="pbmit-base-icon-black-arrow-1"></i>
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}