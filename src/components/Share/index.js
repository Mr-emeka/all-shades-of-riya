import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import shareStyles from "../../styles/components/share.module.scss";

export default function Share({ title }) {
  const isSmallScreen = useMediaQuery("(max-width: 989px)");
  return (
    <div className={shareStyles.share}>
      <div>
        <a href="http://twitter.com/home?status=MESSAGE+URL" target="blank">
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

          <span className="ml-2">{!isSmallScreen && "Share on Twitter"}</span>
        </a>
      </div>
      <div>
        <a
          href="http://www.facebook.com/sharer.php?u=ENTER%20URL=TITLE"
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
          <span className="ml-2">{!isSmallScreen && "Share on Facebook"}</span>
        </a>
      </div>
      {isSmallScreen && (
        <div>
          <a
            href={`whatsapp://send?text=${title}`}
            data-action="share/whatsapp/share"
            target="_blank"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.077 2.928C15.191 1.041 12.683 0.001 10.011 0C4.505 0 0.0240001 4.479 0.0220001 9.985C0.0210001 11.745 0.481 13.463 1.355 14.977L0 20L5.233 18.763C6.692 19.559 8.334 19.978 10.006 19.979H10.01C15.515 19.979 19.996 15.499 19.999 9.994C20.001 7.325 18.963 4.816 17.077 2.928ZM14.898 13.554C14.69 14.137 13.671 14.699 13.213 14.74C12.755 14.782 12.326 14.947 10.218 14.116C7.681 13.116 6.079 10.515 5.955 10.349C5.83 10.182 4.936 8.996 4.936 7.768C4.936 6.54 5.581 5.936 5.81 5.687C6.039 5.437 6.309 5.375 6.476 5.375C6.642 5.375 6.809 5.375 6.954 5.381C7.132 5.388 7.329 5.397 7.516 5.812C7.738 6.306 8.223 7.54 8.285 7.665C8.347 7.79 8.389 7.936 8.306 8.102C8.223 8.268 8.181 8.372 8.057 8.518C7.932 8.664 7.795 8.843 7.683 8.955C7.558 9.079 7.428 9.215 7.573 9.464C7.719 9.714 8.219 10.531 8.961 11.192C9.915 12.042 10.718 12.305 10.968 12.431C11.218 12.556 11.363 12.535 11.509 12.368C11.655 12.202 12.133 11.64 12.299 11.39C12.465 11.14 12.632 11.182 12.861 11.265C13.09 11.348 14.317 11.952 14.566 12.077C14.816 12.202 14.982 12.264 15.044 12.368C15.106 12.471 15.106 12.971 14.898 13.554Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}