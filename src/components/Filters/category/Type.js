import React from "react";
import FilterBtn from "../FilterBtn";

const Type = ({ setType }) => {
  let type = ["tv", "movie", "ova", "special", "ona", "music"];

  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Type
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body d-flex flex-wrap">
            {type.map((items, index) => (
              <FilterBtn
                task={setType}
                key={index}
                name="type"
                index={index}
                items={items}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type;
