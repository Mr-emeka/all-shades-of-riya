import React from "react";
import styled from "styled-components";

const NewsLetterContainer = styled.div`
  width: 640px;
  background: #ffffff;
  border-top: 10px solid #dd8ea4;
  box-sizing: border-box;
  font-weight: bold;
  padding: 3em 2em;
  text-align: center;
  h2 {
    font-weight: bold;
  }
  p {
    font-weight: bold;
    font-size: 1em;
  }

`;

export default function NewsLetter() {
  return (
    <NewsLetterContainer>
      <h2>Sign up for the newsletter</h2>
      <p>
        If you want relevant updates occasionally, sign up for the private
        newsletter. Your email is never shared.{" "}
      </p>
      <div>
        <input className="input" type="text" name="email" placeholder="Enter Email Address"/>
        <button>Sign Up</button>
      </div>
      <span></span>
    </NewsLetterContainer>
  );
}
