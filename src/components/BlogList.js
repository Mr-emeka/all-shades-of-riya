import React from "react";
import { Link } from "gatsby";
import useBlogData from "../static_queries/useBlogData";
import blogListStyles from "../styles/components/bloglist.module.scss";
import Img from "gatsby-image";
import Button from "../components/custom/button";
import Share from "../components/Share/new";

export default function BlogList() {
  const blogData = useBlogData();
  function renderBlogData() {
    return (
      <div>
        {blogData
          .filter((blog) => blog.node.frontmatter.title !== "")
          .map((blog, index) => {
            return (
              <article className={blogListStyles.list__content} key={index}>
                {console.log(blog)}
                <div className={blogListStyles.list__header}>
                  <h2>
                    <Link
                      to={`/blog/${blog.node.fields.slug}`}
                      key={blog.node.id}
                    >
                      {blog.node.frontmatter.title}
                    </Link>
                  </h2>
                  <p>"Lifestyle"</p>
                </div>
                <div className={blogListStyles.list__hero}>
                  {blog.node.frontmatter.hero_image ? (
                    <Img
                      loading="lazy"
                      fluid={
                        blog.node.frontmatter.hero_image.childImageSharp.fluid
                      }
                      alt={blog.node.frontmatter.title}
                    />
                  ) : null}
                </div>
                <div className={blogListStyles.list__info}>
                  <p>{blog.node.excerpt}</p>
                  <div className={blogListStyles.list__actionArea}>
                    <Button
                      type="link"
                      href=""
                      style={{
                        padding: "10px 35px 10px 35px",
                        textTransform: "capitalize",
                        textTransform: "uppercase",
                        fontSize: "11px",
                        letterSpacing: "2px",
                        background: "#161616",
                        color: "#fff",
                        border: "none",
                        outline: "none",
                        lineHeight: "24px",
                      }}
                    >
                      Read More
                    </Button>

                    <Share title={blog.node.frontmatter.title} />
                  </div>
                </div>
              </article>
            );
          })}
      </div>
    );
  }
  return <div className={blogListStyles.list}>{renderBlogData()}</div>;
}
