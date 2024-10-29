"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const NewPatientsContent = () => {
    const url = process.env.NEXT_PUBLIC_SERVER_URL; // Ensure this points to your backend server

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone_number: "",
        subject: "",
        message: "",
    });

    // Notification settings
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
            <ToastContainer /> {/* ToastContainer for displaying notifications */}
            <section className="section-xl">
                <div className="container">
                    <div className="pbmit-heading-subheading text-center">
                        <h2 className="pbmit-title">Looking For a Gentle New Dentist?</h2>
                        <div className="pbmit-heading-desc">
                            <p>
                                We welcome you to our practice. As a new patient at Smilecloud Family Dental, you will find our modern amenities, convenient scheduling options and comprehensive dentistry services to be our best assets. Our core principles of precision, aesthetics and quality drive our motivated and caring team to deliver unmatched results on every patient visit. If you are looking for a caring, professional dentist in the Beaverton area, call Smilecloud Family Dental to learn more about our general, cosmetic, pediatric and restorative dentistry services.
                            </p>
                            <p>
                                We offer flexible dental payment plans & options and we accept most major insurance plans. Worry not if you don&apos;t have dental insurance as we have an in-house savings plan and offer specials to make quality dentistry affordable. We feature cutting-edge technology with minimally invasive techniques and procedures to ensure your first dental visit is pleasant. We aim to make your appointment efficient and easy by providing the convenience of booking an appointment online.
                            </p>
                            <p>
                                Whether you are new to the area or are looking for a gentle new dentist for you and your family, you can always count on us. Please contact us today for your next dental appointment.
                            </p>
                        </div>
                        <div>
                            <a href="https://res.cloudinary.com/definitiondental/image/upload/v1512731516/NewPatient_Paperwork_Fillable.pdf" className="pbmit-btn" download>
                                <span className="pbmit-button-content-wrapper">
                                    <span className="pbmit-button-text">DOWNLOAD NEW PATIENT PAPERWORK</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="appointment_box">
                    <h4 className="text-center mb-3">Make An Appointment</h4>
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
                                <textarea name="message" cols="40" rows="10" className="form-control" placeholder="Type Appointment Note...." required value={formData.message} onChange={handleChange}></textarea>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="pbmit-btn">
                                    <span className="pbmit-button-text">Submit Now</span>
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
            </section>
        </>
    );
};

export default NewPatientsContent;
