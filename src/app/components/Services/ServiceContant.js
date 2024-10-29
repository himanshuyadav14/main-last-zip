"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ServiceContant = ({ servicesData }) => {
  const [selectedService, setSelectedService] = useState(null);
  const serviceContentRef = useRef(null);
  const searchParams = useSearchParams();

  // Use useEffect to set the initial state to ensure it matches between client and server
  useEffect(() => {
    if (searchParams.get("search")) {
      const filterData = servicesData.find((service) => {
        if (service.service_name === searchParams.get("search")) {
          return service;
        }
      });
      setSelectedService(filterData);
    } else {
      setSelectedService(servicesData[0]);
    }
  }, [servicesData]);

  if (!selectedService) {
    return <div>Loading...</div>; // Optionally show a loading state
  }

  return (
    <div className="page-content">
      {/* Service Details */}
      <section className="site_content service_details" ref={serviceContentRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 service-right-col">
              <div className="pbmit-service-feature-image">
                <img
                  src={selectedService.service_image}
                  alt="Service Image"
                  layout="responsive"
                  width={700}
                  height={475}
                  className="img-fluid w-100"
                />
              </div>
              <div className="pbmit-entry-content">
                <div className="pbmit-service_content">
                  <div className="pbmit-heading animation-style2">
                    <h3 className="pbmit-title mb-3">
                      {selectedService.service_name}
                    </h3>
                  </div>
                  <p
                    className="pbmit-firstletter"
                    dangerouslySetInnerHTML={{
                      __html: selectedService.service_description,
                    }}
                  ></p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 service-left-col sidebar">
              <aside className="service-sidebar">
                <aside className="widget post-list">
                  <h2 className="widget-title">Our Service</h2>
                  <div className="all-post-list">
                    <ul>
                      {servicesData?.map((service, index) => (
                        <li
                          key={index} // Ensure each list item has a unique key
                          className={
                            selectedService?.id === service.id
                              ? "post-active"
                              : ""
                          }
                        >
                          <Link
                            href={{
                              pathname: "services",
                              query: {
                                search: `${service.service_name}`,
                              },
                            }}
                          >
                            {service.service_name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </aside>
            </div>
          </div>
        </div>
      </section>
      {/* Service Details End */}
    </div>
  );
};

export default ServiceContant;
