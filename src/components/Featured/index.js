import React from "react";
import homeStyles from "../../styles/components/featured.module.scss";
import styled from "styled-components";
import Button from "../custom/button";

const Featured = ({}) => {
  return (
    <div className={homeStyles.featured__carousel}>
      <div className={homeStyles.featured__owl}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={homeStyles.featured__controls}></div>
    </div>
  );
};

const BGImage = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Card = ({
  src = "https://www.dearsalmah.com/wp-content/uploads/2019/01/IMG_2439-500x600.jpg",
}) => {
  return (
    <BGImage src={src} className={homeStyles.featured__content}>
      <div className={homeStyles.featured__description}>
        <h5>THE MOST PRODUCTIVE THING TO DO RIGHT NOW</h5>
        <p>This was going to be a valuable how to be productive post. </p>
        <a href="">Read More</a>
      </div>
    </BGImage>
  );
};

export default Featured;
