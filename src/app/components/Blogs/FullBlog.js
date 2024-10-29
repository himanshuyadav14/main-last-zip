"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter} from "next/navigation";

const FullBlog = ({ blog, onBack, blogsData, handleReadMore }) => {
    const router = useRouter();
    if (!blog) return null;

    const handleAllBlogsClick = () => {
        router.push("/blogs");
    };

    return (
        <section className="site_content full_blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-9 blog-right-col">
                        <article className="post full-blog">
                            <div className="pbmit-featured-img-wrapper">
                                <div className="pbmit-featured-wrapper">
                                    <Image src={blog.blog_image} className="img-fluid" alt={blog.blog_image_alt_text} width={800} height={500} />
                                </div>
                            </div>
                            <div className="pbmit-blog-inner">
                                <div className="pbmit-blog-meta pbmit-blog-meta-top">
                                    <span className="pbmit-meta pbmit-meta-date">
                                        <i className="pbmit-base-icon-calendar-3"></i>
                                        <time className="entry-date published" dateTime={blog.publishedDate}>{blog.publishedDate}</time>
                                        {blog.updatedDate && (
                                            <time className="updated pbmit-hide" dateTime={blog.updatedDate}>{blog.updatedDate}</time>
                                        )}
                                    </span>
                                    <span className="pbmit-meta pbmit-meta-author">
                                        <i className="pbmit-base-icon-user-3"></i>by:
                                        <span className="pbmit-author-link">{blog.created_by}</span>
                                    </span>
                                </div>
                                <h1 className="pbmit-post-title">
                                    {blog.blog_title}
                                </h1>
                                <div className="pbmit-entry-content">
                                    <div dangerouslySetInnerHTML={{ __html: blog.blog_description }} />
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-12 col-lg-3 blog-left-col">
                        <aside className="sidebar">
                            <aside className="widget widget-recent-post">
                                <h2 className="widget-title">Post</h2>
                                <ul className="recent-post-list">
                                    {blogsData?.slice(0, 3)?.map((post, index) => (
                                        <li key={index} className="recent-post-list-li" onClick={() => handleReadMore(post)}>
                                            {/* <Link href={`/blog-details/${post.id}`}> */}
                                            <Image src={post.blog_image} className="img-fluid" alt="" width={100} height={100} />
                                            {/* </Link> */}
                                            <div className="pbmit-rpw-content">
                                                <span className="pbmit-rpw-title" onClick={() => handleReadMore(post)}>
                                                    {/* <Link href={`/blog-details/${post.id}`}> */}
                                                    {post.blog_title}
                                                    {/* </Link> */}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </aside>
                            <aside className="widget widget-all-blogs">
                                <button onClick={handleAllBlogsClick} className="pbmit-btn">
                                    <span className="pbmit-button-content-wrapper">
                                        <span className="pbmit-button-text">All Blogs</span>
                                    </span>
                                </button>
                            </aside>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FullBlog;
