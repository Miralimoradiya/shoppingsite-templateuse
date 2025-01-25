import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const IconCart = ({ link, bgcolor, ...props }) => {
  const style = {
    backgroundColor: bgcolor || "transparent",
  };

  return (
    <>
      <span
        style={{ cursor: "pointer", ...style }}
        onClick={() => (window.location.href = link)}
      >
        <FontAwesomeIcon icon={faCartPlus} {...props} />
      </span>
    </>
  );
};

export default IconCart;
