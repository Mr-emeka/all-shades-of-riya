import React from "react";
import Layout from "../components/Layout";
import BlogList from "../components/BlogList";
import homeStyles from "../styles/pages/index.module.scss";
import Featured from "../components/Featured";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

import ListOfGenre from "../components/custom/Genre";

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid {
            src
            aspectRatio
            base64
            srcSet
          }
        }
      }
      genres: dataYaml {
        genres
      }
    }
  `);
  return (
    <Layout page="home" bgColor="inherit">
      <section className={homeStyles.home__header}>
        <div className={`container ${homeStyles.home__banner}`}>
          <h1>AllShadesOfRiya</h1>
        </div>
      </section>
      <section className={homeStyles.home__featuredArea}>
        <Featured />
      </section>
      <section className={homeStyles.home__blogArea}>
        <BlogList />
        <SideContent data={data} />
      </section>
    </Layout>
  );
}

export const SideContent = ({ data }) => {
  console.log(data);
  return (
    <aside className="aside flex-column">
      <div>Hello, I am Amaka</div>
      <div className="aside__profile flex-column">
        <Img
          fluid={data.image.childImageSharp.fluid}
          alt="chiamaka glory founder all shades of riya"
        />
        <p>
          A creative writer. Serious ice cream lover! Fashion and beauty
          enthusiast, unapologetically feminist and Muslim. I love to dress up
          and eat amazing food that I did not cook. I’m a hopeless romantic that
          loves to binge watch rom coms
        </p>
      </div>
      <ListOfGenre genres={data.genres.genres} />
    </aside>
  );
};
