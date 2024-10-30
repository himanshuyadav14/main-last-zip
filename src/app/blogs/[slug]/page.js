import React from "react";
import FullBlog from "../../components/Blogs/FullBlog";
import axios from "axios";
import Slider from "../../components/Home/Slider";
import Head from "next/head";

// Function to create a slug from a title
const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .trim();
};

export async function fetchMetaData(slug) {
    const url = process.env.NEXT_PUBLIC_SERVER_URL;
    const options = {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(`${url}/smile-dental/blogs`, options);
      if (!response.ok) {
        throw new Error("Failed to fetch metadata");
      }
      const metaData = await response.json();
      return metaData.find((meta) => createSlug(meta?.blog_title) === slug);
    } catch (error) {
      console.error("Error fetching metadata:", error);
      return null; // or some default value
    }
  }

  export const generateMetadata = async ({ params }) => {
    const metaData = await fetchMetaData(params.slug); 
    return {
      title: metaData?.blog_title || "Blog Not Found", 
      description: metaData?.blog_description || "No description available.",
    };
  };

// Fetch blog data directly in the component
const SlugPage = async ({ params }) => {
  const { slug } = params;
  let blogsData = [];
  let matchedBlog = null;

  try {
    const url = process.env.NEXT_PUBLIC_SERVER_URL;
    if (!url) {
      throw new Error("Server URL is not defined");
    }

    const response = await axios.get(`${url}/smile-dental/blogs`);

    if (response.status === 200) {
      blogsData = response.data;
      // Find the blog that matches the slug
      matchedBlog = blogsData.find(
        (blog) => createSlug(blog.blog_title) === slug
      );
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error fetching blogs data:", error);
  }

  return (
    <>
      <Slider pageName="blogs" showContactButton={false} />
      {matchedBlog ? (
        <FullBlog blog={matchedBlog} blogsData={blogsData} />
      ) : (
        <p>Blog not found</p>
      )}
    </>
  );
};

export default SlugPage;
