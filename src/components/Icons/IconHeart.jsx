import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const IconHeart = ({ link, ...props }) => {
  return (
    <span
      style={{ cursor: "pointer" }}
      onClick={() => (window.location.href = link)}
    >
      <FontAwesomeIcon icon={faHeart} {...props} />
    </span>
  );
};

export default IconHeart;
