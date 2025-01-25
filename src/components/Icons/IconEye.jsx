import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const IconEye = ({ link, bgcolor, ...props }) => {
  const style = {
    backgroundColor: bgcolor || "transparent",
  };

  return (
    <span
      style={{ cursor: "pointer", ...style }}
      onClick={() => (window.location.href = link)}
    >
      <FontAwesomeIcon icon={faEye} {...props} />
    </span>
  );
};

export default IconEye;
