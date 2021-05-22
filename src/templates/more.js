import React from "react";
import { Link } from "gatsby";
import useBlogData from "../static_queries/useBlogData";
import blogListStyles from "../styles/components/bloglist.module.scss";
import Img from "gatsby-image";

export default function BlogList({ title }) {
  const blogData = useBlogData();
  function renderBlogData() {
    return (
      <div>
        {blogData
          .filter((blog) => blog.node.frontmatter.title !== title)
          .splice(Math.floor(Math.random() * (blogData.length - 4)), 6)
          .map((blog) => {
            return (
              <Link to={`/blog/${blog.node.fields.slug}`} key={blog.node.id}>
                {/* <li className={blogListStyles.li} key={blog.node.fields.slug}> */}
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
                  <h2>{blog.node.frontmatter.title}</h2>
                  <span>{blog.node.frontmatter.date}</span>
                  <p>{blog.node.excerpt}</p>
                </div>
                {/* </li> */}
              </Link>
            );
          })}
      </div>
    );
  }
  return (
    <section>
      <ul className={blogListStyles.list}>{renderBlogData()}</ul>
    </section>
  );
}
