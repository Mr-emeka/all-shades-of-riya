import React from "react";
import styled from "styled-components";

const NewsLetterContainer = styled.div`
  width: 640px;
  background: #ffffff;
  border-top: 10px solid #dd8ea4;
  box-sizing: border-box;
  padding: 3em 2em;
  text-align: center;
  justify-content: center;
  align-self: center;
  h2 {
    font-weight: bold;
  }
  p {
    font-size: 0.9em;
  }
  @media (max-width: 780px) {
    width: 100%;
  }
`;

export default function NewsLetter({
  callback,
  handleClick,
  text,
  message,
  disabled,
}) {
  return (
    <NewsLetterContainer>
      <form onSubmit={handleClick}>
        <h2>Sign up for the newsletter</h2>
        <p>
          If you want relevant updates occasionally, sign up for the private
          newsletter. Your email is never shared.{" "}
        </p>
        <div>
          <input
            type="email"
            value={text}
            name="email"
            onChange={({ target: { value, name } }) => callback(value, name)}
            className="newsletter__input"
            placeholder="Enter Your Email"
          />
          <button
            className="newsletter__btn"
            onClick={(e) => handleClick(e)}
            disabled={!disabled}
          >
            Sign Up
          </button>
        </div>
        <span className="newsletter__message">{message}</span>
      </form>
    </NewsLetterContainer>
  );
}
