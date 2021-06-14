import React from "react";

const Button = ({ style, children, type, href }) => {
  {
    return type === "link" ? (
      <a href={href} className="btn__read" style={{ ...style }}>
        {children}
      </a>
    ) : (
      <button style={{ ...style }}>{children}</button>
    );
  }
};

export default Button;
