import React from "react";
import FilterBtn from "../FilterBtn";

const Rating = ({ setRating }) => {
  let rating = ["g", "pg", "pg13", "r17", "r", "rx"];
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Rating
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body d-flex flex-wrap">
            {rating.map((items, index) => (
              <FilterBtn
                task={setRating}
                key={index}
                name="rating"
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

export default Rating;
