import React from "react";
import Banner from "../components/Implants/Banner";
import OtherLinkContent from "../components/Implants/ImplantsContent";
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
  const metaData = await fetchMetaData("implants");
  return {
    title: metaData?.meta_title,
    description: metaData?.meta_description,
  };
};

const page = async () => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;
  const options = {
    method: "GET",
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${url}/smile-dental/testimonials`, options);
  const testimonials = await response.json();

  return <>
    <Banner />
    <OtherLinkContent testimonials={testimonials} />
  </>;
};

export default page;
