import React from "react";
import FilterBtn from "../FilterBtn";

const Status = ({ setStatus }) => {
  let status = ["airing", "complete", "upcoming"];
  return (
    <div>
      {" "}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Status
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body d-flex flex-wrap"></div>
        </div>
      </div>
    </div>
  );
};

export default Status;
