"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ContactForm = () => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
  });

  //notification settings
  const showAlert = (message) => {
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

  const showSuccess = (message) => {
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

        showSuccess("Form submitted successfully!");
      } else {
        showAlert("Failed to submit the form. Please try again.");

      }
    } catch (error) {
      showAlert("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      {/* Form Submit Notification */}
      <ToastContainer />
      {/* end */}

      {/* form section */}
      <section className="contact-form">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-12 col-xl-6">
              <div className="contact-us-left_img"></div>
            </div>
            <div className="col-md-12 col-xl-6">
              <div className="contact-form-one_right pbmit-bg-color-white">
                <div className="pbmit-heading-subheading">
                  <h4 className="pbmit-subtitle">Contact Us</h4>
                  <h2 className="pbmit-title">
                    Request an Appointment
                  </h2>
                </div>
                <form
                  className="contact-form"
                  method="post"
                  id="contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email *"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Your Phone *"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        name="message"
                        cols="40"
                        rows="10"
                        className="form-control"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-md-12">
                      <button className="pbmit-btn" type="submit">
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
                          <span className="pbmit-button-text">Submit Now</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
