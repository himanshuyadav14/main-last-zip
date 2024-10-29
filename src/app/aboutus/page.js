import React from "react";
import ContactDetails from "../components/ContactUs/ContactDetails";
import AboutUsSection from "../components/AboutUs/AboutUsSection";
import DoctorInfo from "../components/AboutUs/DoctorInfo";
import Team from "../components/AboutUs/Team";
import Slider from "../components/Home/Slider";

export async function fetchMetaData(pageName) {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;
  const options = {
    method: "GET",
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json", 
    },
  };
  const response = await fetch(`${url}/smile-dental/metadata`, options);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const metaData = await response.json();

  // Find the metadata for the specific page
  return metaData.find(meta => meta?.page_name === pageName);
}
export const metadata = async () => {
  const metaData = await fetchMetaData("about us");
  return {
    title: metaData?.meta_title,
    description: metaData?.meta_description,
  };
};

const page = () => {
  return <>
    <Slider pageName="about us" showContactButton={false} />
    <ContactDetails />
    <AboutUsSection />
    <DoctorInfo />
    <Team />
  </>;
};

export default page;
