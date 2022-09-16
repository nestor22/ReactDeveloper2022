import React from "react";
import "./button.style.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ children, buttonType,...otherProps }) => {
  const button = BUTTON_TYPE_CLASSES[buttonType] ? BUTTON_TYPE_CLASSES[buttonType] : "";
  return (
    <button
      className={`button-container ${button}`}
      {...otherProps}
    >
      {" "}
      {children}
    </button>
  );
};

export default Button;
