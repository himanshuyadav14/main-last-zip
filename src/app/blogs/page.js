import React from "react";
import BlogsDetails from "../components/Blogs/BlogsDetails";
import axios from 'axios';
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
    return metaData.find(meta => meta?.page_name === pageName);
  }
  export const metadata = async () => {
    const metaData = await fetchMetaData("blogs");
    return {
      title: metaData?.meta_title,
      description: metaData?.meta_description,
    };
  };

const page = async () => {
    try {
        const url = process.env.NEXT_PUBLIC_SERVER_URL;
        if (!url) {
            throw new Error("Server URL is not defined");
        }

        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            },
        };

        const response = await axios.get(`${url}/smile-dental/blogs`, options);

        if (response.status !== 200) {
            throw new Error("Failed to fetch data");
        }

        var blogsData = response.data;
    } catch (error) {
        console.error(error);
    }
    return <>
        <Slider pageName="blogs" showContactButton={false} />
        <BlogsDetails blogsData={blogsData} />
    </>;
};

export default page;