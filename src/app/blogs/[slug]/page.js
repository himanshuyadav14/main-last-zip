import React from "react";
import FullBlog from "../../components/Blogs/FullBlog";
import axios from 'axios';
import Slider from "../../components/Home/Slider";

// Function to create a slug from a title
const createSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-")
        .trim();
};

const SlugPage = async ({ params }) => {
    const { slug } = params; 
    let blogsData = []; // Initialize blogsData
    let matchedBlog = null; // Initialize matchedBlog
    let loading = true; // Initialize loading state

    try {
        const url = process.env.NEXT_PUBLIC_SERVER_URL;
        if (!url) {
            throw new Error("Server URL is not defined");
        }

        const response = await axios.get(`${url}/smile-dental/blogs`);

        if (response.status === 200) {
            blogsData = response.data; // Get the blog data from the response
            // Find the blog that matches the slug
            matchedBlog = blogsData.find(blog => createSlug(blog.blog_title) === slug);
        } else {
            throw new Error("Failed to fetch data");
        }
    } catch (error) {
        console.error("Error fetching blogs data:", error);
    } finally {
        loading = false; // Update loading state
    }

    return (
        <>
            <Slider pageName="blogs" showContactButton={false} />
            {loading ? (
                <p>Loading...</p> // Show loading message while fetching data
            ) : matchedBlog ? (
                <FullBlog blog={matchedBlog} blogsData={blogsData} />
            ) : (
                <p>Blog not found</p>
            )}
        </>
    );
};

export default SlugPage;
