import React from "react";
import shareStyles from "../../styles/components/share.module.scss";

export default function Share({ title }) {

  let url =
    process.env.NODE_ENV === "development"
      ? `https://loving-hopper-39cf92.netlify.app/blog/${title}`
      : `https://allshadesofriya.com/blog/${title}`;

  return (
    <div className={shareStyles.shareArea}>
      <div>
        <a
          href={`http://twitter.com/intent/tweet?url=${url.replace(
            / /g,
            "-"
          )}&via="All Shade of Riya"`}
          target="blank"
        >
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0.00896646C19.1294 0.611275 18.1656 1.07195 17.1455 1.37324C16.5979 0.755757 15.8703 0.318104 15.0609 0.119469C14.2516 -0.0791667 13.3995 -0.0292013 12.6201 0.262607C11.8406 0.554416 11.1713 1.07399 10.7027 1.75105C10.2341 2.42812 9.98882 3.23001 10 4.04827V4.93995C8.40239 4.98058 6.81934 4.63305 5.39183 3.92829C3.96431 3.22354 2.73665 2.18345 1.81818 0.900645C1.81818 0.900645 -1.81818 8.92575 6.36364 12.4925C4.49139 13.739 2.26105 14.364 0 14.2758C8.18182 18.7342 18.1818 14.2758 18.1818 4.02152C18.181 3.77315 18.1566 3.52539 18.1091 3.28143C19.0369 2.38395 19.6917 1.25082 20 0.00896646Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
      <div>
        <a
          href={`http://www.facebook.com/sharer.php?u=${url}&t='All Shades of Riya'`}
          target="blank"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0001 0.041626C4.47724 0.041626 0 4.51886 0 10.0417C0 14.995 3.60522 19.0972 8.33225 19.8916V12.128H5.91994V9.33417H8.33225V7.27413C8.33225 4.88389 9.79213 3.58135 11.9247 3.58135C12.9461 3.58135 13.8238 3.65746 14.0786 3.69098V6.18942L12.5995 6.19013C11.44 6.19013 11.2165 6.74102 11.2165 7.54969V9.33274H13.9832L13.6223 12.1265H11.2165V19.9584C16.1642 19.3562 20 15.1495 20 10.0388C20 4.51886 15.5228 0.041626 10.0001 0.041626Z"
              fill="#010002"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
