"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import FullBlog from "./FullBlog";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const BlogsDetails = ({ blogsData }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);

  // Pagination
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

  const handleReadMore = async (blog) => {
    const slug = createSlug(blog.blog_title);
    setLoading(true);
    await router.push(`/blogs?search=${slug}`);
    setSelectedBlog(blog);
    setLoading(false);
  };

  const handleBack = () => {
    setSelectedBlog(null);
    router.push("/blogs");
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    if (words.length <= wordLimit) return description;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  useEffect(() => {
    const search = searchParams.get("search");
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (search) {
      const foundBlog = blogsData.find(
        (blog) => createSlug(blog.blog_title) === search
      );
      setSelectedBlog(foundBlog || null);
    } else {
      setSelectedBlog(null);
    }
  }, [currentPage, searchParams, blogsData]);

  // Pagination controls
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle pagination
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

  return (
    <div>
      {!selectedBlog ? (
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
                            {blog.updatedDate && (
                              <time
                                className="updated pbmit-hide"
                                dateTime={blog.updatedDate}
                              >
                                {blog.updatedDate}
                              </time>
                            )}
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
                          <Link
                            href={{
                              pathname: "blogs",
                              query: {
                                search: `${createSlug(blog.blog_title)}`,
                              },
                            }}
                          >
                            <button
                              className="pbmit-btn"
                              // onClick={() => handleReadMore(blog)}
                            >
                              <span className="pbmit-button-content-wrapper">
                                <span className="pbmit-button-icon pbmit-align-icon-right">
                                  {/* SVG Icon */}
                                </span>
                                <span className="pbmit-button-text">
                                  Read More
                                </span>
                              </span>
                            </button>
                          </Link>
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
                          <Link
                            href={{
                              pathname: "blogs",
                              query: {
                                search: `${createSlug(post.blog_title)}`,
                              },
                            }}
                          >
                            <Image
                              src={post.blog_image}
                              className="img-fluid"
                              alt={post.blog_image_alt_tex}
                              width={100}
                              height={100}
                            />
                          </Link>
                          <Link
                            href={{
                              pathname: "blogs",
                              query: {
                                search: `${createSlug(post.blog_title)}`,
                              },
                            }}
                          >
                            <div className="pbmit-rpw-content">
                              <span
                                className="pbmit-rpw-title"
                                // onClick={() => handleReadMore(post)}
                              >
                                {post.blog_title}
                              </span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </aside>
                </aside>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <FullBlog
          blog={selectedBlog}
          onBack={handleBack}
          blogsData={blogsData}
          handleReadMore={handleReadMore}
        />
      )}
    </div>
  );
};

export default BlogsDetails;
