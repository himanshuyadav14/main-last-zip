"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BlogsDetails = ({ blogsData }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;
  const totalPages = Math.ceil(blogsData.length / blogsPerPage);

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-")
      .trim();
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    if (words.length <= wordLimit) return description;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleReadMore = (blogTitle) => {
    setLoading(true);
    setTimeout(() => {
      router.push(`/blogs/${createSlug(blogTitle)}`);
    }, 1000); // Adjust the time as needed
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, blogsData]);

  return (
    <div>
      {loading && <div className="loader"></div>}
      <section className="site_content blog_classic">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-9 blog-right-col">
              <div className="row pbmit-element-posts-wrapper">
                {currentBlogs?.map((blog, index) => (
                  <article key={index} className="post blog-classic">
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <Image
                          src={blog.blog_image}
                          className="img-fluid"
                          alt={blog.blog_image_alt_text}
                          width={500}
                          height={300}
                        />
                      </div>
                    </div>
                    <div className="pbmit-blog-classic-inner">
                      <div className="pbmit-blog-meta pbmit-blog-meta-top">
                        <span className="pbmit-meta pbmit-meta-date">
                          <i className="pbmit-base-icon-calendar-3"></i>
                          <time
                            className="entry-date published"
                            dateTime={blog.publishedDate}
                          >
                            {blog.publishedDate}
                          </time>
                        </span>
                      </div>
                      <h3 className="pbmit-post-title">{blog.blog_title}</h3>
                      <div className="pbmit-entry-content">
                        <div className="pbmit-firstletter-blog">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: truncateDescription(
                                blog.blog_description.replace(/"/g, "'"),
                                50
                              ),
                            }}
                          />
                        </div>
                        <button
                          className="pbmit-btn"
                          onClick={() => handleReadMore(blog.blog_title)}
                        >
                          <span className="pbmit-button-content-wrapper">
                            <span className="pbmit-button-text">Read More</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="pagination-controls">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                  Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>

            {/* Side Bar */}
            <div className="col-md-12 col-lg-3 blog-left-col">
              <aside className="sidebar">
                <aside className="widget widget-recent-post">
                  <h2 className="widget-title">Recent Post</h2>
                  <ul className="recent-post-list">
                    {blogsData?.slice(0, 3)?.map((post, index) => (
                      <li key={index} className="recent-post-list-li">
                        <Image
                          src={post.blog_image}
                          className="img-fluid"
                          alt={post.blog_image_alt_text}
                          width={100}
                          height={100}
                          style={{ cursor: "pointer" }} // Ensure the image is clickable
                          onClick={() => handleReadMore(post.blog_title)} // Attach click handler
                        />
                        {/* <Link href={`/blogs/${createSlug(post.blog_title)}`}> */}
                        <div
                          className="pbmit-rpw-content"
                          onClick={() => handleReadMore(post.blog_title)}
                          style={{ cursor: "pointer" }}
                        >
                          <span className="pbmit-rpw-title" style={{ textDecoration: 'underline' }}>
                            {post.blog_title}
                          </span>
                        </div>
                        {/* </Link> */}
                      </li>
                    ))}
                  </ul>
                </aside>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsDetails;
