import React from "react";
import useSiteMetaData from "../../static_queries/useSiteMetadata";
import styled from "styled-components";

const FooterSection = styled.footer`
  background: #000;
  color: #fff !important;
  div:nth-child(1) {
    display: flex;
    padding: 2em;
  }
  div:nth-child(2) {
    padding: 1em;
  }
`;
const LinkSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 !important;
  a:hover {
    text-decoration: none;
    color: #fff;
  }
  a {
    margin-right: 1em;
  }
  @media (max-width: 786px) {
    flex-direction: column;
    margin-bottom: 1em;
    a {
      margin-right: 0;
      margin-bottom: 2em;
    }
  }
`;
const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 !important;
  h4 {
    margin: 0 !important;
    color: #dd8ea4;
    font-size: 1.5em;
  }
  div {
    width: 80%;
    padding: 0 !important;
    margin-top: 1em;
    p {
      font-size: 1em;
      color: #fff;
    }
  }
`;
const FooterCopyright = styled.div`
  font-size: 0.8em;
  text-align: center;
  background: #dd8ea4;
`;

const Footer = () => {
  const { infoData } = useSiteMetaData();
  return (
    <FooterSection>
      <div>
        <FooterText>
          <h4>All Shades Of Riya</h4>
          <div dangerouslySetInnerHTML={{ __html: infoData.description }}></div>
        </FooterText>
        <LinkSection>
          <a href={`https://twitter.com/${infoData.contact.twitter_handle}`}>
            Twitter
          </a>
          <a href={`mailto:${infoData.contact.email}`}>Email</a>
        </LinkSection>
      </div>
      <FooterCopyright>
        <span>&copy; {new Date().getFullYear()} All Shades Of Riya Co.</span>
        <span>All rights reserved.</span>
      </FooterCopyright>
    </FooterSection>
  );
};
export default Footer;
