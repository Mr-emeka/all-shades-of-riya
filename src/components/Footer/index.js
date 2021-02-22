import React from 'react'
import useSiteMetaData from "../../static_queries/useSiteMetadata"
import styled from "styled-components"

const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5vw 5vw;
  align-self: center;
  text-align:center;
  background: #31383F;
  color: #fff !important;
`
const LinkSection = styled.div`
 display:flex;
 justify-content:center;
 flex-direction: row;
 margin-bottom:2vw;
 a:hover{
     text-decoration:none;
     color: #fff;
 }
     a{margin-right:1em}
`
const FooterText = styled.div`
 text-align:center;
 margin-bottom: 2em;
 p{
width: 500px;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 140%;
color: #FFFFFF;
margin: 0 auto;
 @media (max-width: 780px){
   width: 100%;
 }
 }

`
const FooterCopyright = styled.div`
 font-size: .8em;
`
const Footer = ()=>{
    const { infoData } = useSiteMetaData()

return <FooterSection>

<div>
<FooterText>
<h3>All Shades Of Riya</h3>
<p dangerouslySetInnerHTML={{__html: infoData.description}}></p>
{/* <div dangerouslySetInnerHTML={{__html: infoData.cta}}></div> */}

</FooterText>
<LinkSection>

<a href={`https://twitter.com/${infoData.contact.twitter_handle}`}>
                Twitter
    </a>
    <a href={`mailto:${infoData.contact.email}`}>Email</a>
     <a href={`https://github.com/${infoData.contact.github_handle}`}>Github</a>
<a href="">
LinkedIn
</a>
<a href="">
RSS
</a>
</LinkSection>
<FooterCopyright>
<span>&copy;  {new Date().getFullYear()} All Shades Of Riya Co.</span>
<br />
<span>All rights reserved.</span>
</FooterCopyright>
</div>

</FooterSection>
}
export default Footer;