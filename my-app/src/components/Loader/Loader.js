import React from "react";
import "./Loader.css";
import { Spinner } from "react-bootstrap";
const Loader = () => {
  return (
    <div className="div1">
      <div className="div2">
        <Spinner color="primary" className="spinner" />
      </div>
    </div>
  );
};

export default Loader;
