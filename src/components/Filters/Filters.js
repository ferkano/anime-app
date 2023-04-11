import React from "react";
import Rating from "./category/Rating";
import Status from "./category/Status";
import Type from "./category/Type";

const Filters = ({ setType, setStatus, setRating }) => {
  const clearFilter = () => {
    setType("");
    setStatus("");
    setRating("");
    window.location.reload(false);
  };
  return (
    <div>
      <div>Filters</div>
      <div onClick={clearFilter} style={{ cursor: "pointer" }}>
        Clear Filters
      </div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <Type setType={setType} />
        <Status setStatus={setStatus} />
        <Rating setRating={setRating} />
      </div>
    </div>
  );
};

export default Filters;
