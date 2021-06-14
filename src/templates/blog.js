import React, { useState } from "react";
import Layout from "../components/Layout";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { graphql, Link } from "gatsby";
import useBlogData from "../static_queries/useBlogData";
import blogTemplateStyles from "../styles/templates/blog.module.scss";
//this component handles the blur img & fade-ins
import Img from "gatsby-image";
import NewsLetter from "../components/Newsletter";
import Share from "../components/Share";
import BlogList from "./more";

export default function Blog(props) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [setResult] = useState("");
  const data = props.data.markdownRemark;

  const allBlogData = useBlogData();

  const nextSlug = getNextSlug(data.fields.slug);

  function getNextSlug(slug) {
    const allSlugs = allBlogData.map((blog) => {
      return blog.node.fields.slug;
    });
    const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1];
    if (nextSlug !== undefined && nextSlug !== "") {
      return nextSlug;
    } else {
      return allSlugs[0];
    }
  }
  const handleChange = (value, name) => {
    setEmail(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { msg } = await addToMailchimp(email);
    setMessage(msg);
    // setResult(result);
    setEmail("");
    setTimeout(() => setMessage(""), 5000);
  };
  let re = /\S+@\S+\.\S+/;
  const isDisabled = () => re.test(email);

  console.log(process.env.NODE_ENV);
  console.log(data);
  return (
    <Layout>
      <section className="home__header">
        <div className="container home__banner">
          <h1>AllShadesOfRiya</h1>
        </div>
      </section>
      <section className="home__featuredArea">
        <div className="home__grid">
          <div>
            <article className={blogTemplateStyles.blog}>
              <figure className={blogTemplateStyles.blog__hero}>
                {data.frontmatter.hero_image ? (
                  <Img
                    loading="lazy"
                    fluid={data.frontmatter.hero_image.childImageSharp.fluid}
                    alt={data.frontmatter.title}
                  />
                ) : null}
              </figure>
              <div className={blogTemplateStyles.blog__info}>
                <h1>{data.frontmatter.title}</h1>
              </div>

              <div
                className={blogTemplateStyles.blog__body}
                dangerouslySetInnerHTML={{ __html: data.html }}
              ></div>
              {/* <div className={blogTemplateStyles.blog__shareOpt}>
                <Share Text={true} />
              </div> */}
              <div className={blogTemplateStyles.blog__footer}>
                <div className="d-flex justify-content-between">
                  <div>
                    <h2>Author: {data.frontmatter.author}</h2>
                    <p>
                      {data.frontmatter.date}.{" "}
                      <strong>{data.frontmatter.minute_read} min read</strong>
                    </p>
                  </div>
                </div>
                <Link
                  to={`/blog/${nextSlug}`}
                  className={blogTemplateStyles.footer__next}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 26 26"
                    enableBackground="new 0 0 26 26"
                  >
                    <path d="M23.021,12.294l-8.714-8.715l-1.414,1.414l7.007,7.008H2.687v2h17.213l-7.007,7.006l1.414,1.414l8.714-8.713  C23.411,13.317,23.411,12.685,23.021,12.294z" />
                  </svg>
                </Link>
              </div>
            </article>

            <div className={blogTemplateStyles.blog__share}>
              <Share Text={false} title={data.fields.slug} />
            </div>

            <hr className={blogTemplateStyles.blog__hr} />
            <div className={blogTemplateStyles.blog__more}>
              <div>
                <h1>What to read next</h1>
              </div>
              <BlogList title={data.frontmatter.title} />
              <NewsLetter
                callback={handleChange}
                text={email}
                message={message}
                handleClick={handleClick}
                disabled={isDisabled()}
              />
            </div>
            <aside></aside>
          </div>
        </div>
        {/*  */}
        {/*  */}
      </section>
    </Layout>
  );
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        author
        tags
        genres
        date(formatString: "MMMM Do, YYYY")
        minute_read
        hero_image {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;
