import React from "react";
import styled from "styled-components";
// import Img from "gatsby-image"
// import { Link, useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby";

const LogoWrap = styled.div`
  margin: auto 0;
  /* flex: 0 1 36px; */
  font-size: bold;

  @media (max-width: 768px) and (orientation: landscape) {
    /* flex: 0 1 25px; */
  }
`;
const Logo = () => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       file(name: { eq: "logo" }, extension: { eq: "png" }) {
  //         childImageSharp {
  //           fluid(maxWidth: 1000, pngQuality: 80) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `)

  return (
    <LogoWrap as={Link} to="/">
      {/* <Img fluid={data.file.childImageSharp.fluid} alt="logo" /> */}
      ALL SHADES OF RIYA
    </LogoWrap>
  );
};

export default Logo;
