import React from "react";
import "./loader.scss";

// https://codepen.io/StanislasP/pen/jLvdzx

const loader = () => {
  return (
    <div id="content">
      <div id="center">
        <div id="loader-linear"></div>
        <div id="loader-rotate"></div>
      </div>
    </div>
  );
};

export default loader;
