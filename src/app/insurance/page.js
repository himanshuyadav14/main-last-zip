import React from "react";
import Banner from "../components/Insurance/Banner";
import InsuranceContent from "../components/Insurance/InsuranceContent";

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
    return metaData.find(meta => meta?.page_name === pageName);
  }
  export const metadata = async () => {
    const metaData = await fetchMetaData("insurance");
    return {
      title: metaData?.meta_title,
      description: metaData?.meta_description,
    };
  };
const page = () => {

    return <>
        <Banner />
        <InsuranceContent />
    </>;
};

export default page;