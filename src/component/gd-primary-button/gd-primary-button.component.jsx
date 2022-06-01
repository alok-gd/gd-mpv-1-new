import React from "react";
import "./gd-primary-button.styles.scss";
import { FaDiscord } from "react-icons/fa";

const GDPrimaryButton = () => {
  return (
    <div className="gd-primary-button">
      <div className="upper-dot"></div>
      <div className="lower-dot"></div>
      <FaDiscord className="icon" />
      <p1 className="label">Discord</p1>
    </div>
  );
};

export default GDPrimaryButton;
