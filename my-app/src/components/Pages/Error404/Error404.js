import React from "react";

import "./Error404.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const Error404 = () => {
  return (
    <>
      <div className="mainE">
        <h1>Error404 Page not Found.</h1>
        <h3> Porfavor vuelva al inicio.</h3>
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          shake
          size="2xl"
          className="fa-exclamation-triangle"
        />
      </div>
    </>
  );
};

export default Error404;
