import React from "react";
import { Link } from "gatsby";
import useBlogData from "../static_queries/useBlogData";
import blogListStyles from "../styles/components/bloglist.module.scss";
import Img from "gatsby-image";
import Button from '../components/custom/button'




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
                  <Img
                    loading="lazy"
                    fluid={
                      blog.node.frontmatter.hero_image.childImageSharp.fluid
                    }
                    alt={blog.node.frontmatter.title}
                  />
                </div>
                <div className={blogListStyles.list__info}>
                  <p>{blog.node.excerpt}</p>
                  <div className={blogListStyles.list__actionArea}>
                    <Button style={{background:"#000",color:"#fff", textTransform:'uppercase'}}>Read More</Button>
                    <div>Share</div>
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
